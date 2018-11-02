import React, { Component } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import './Youtube.css';

class YTSearch extends Component {
  constructor() {
    super();

    this.state = {
      videoIds: [],
      API_KEY: 'AIzaSyDwFYf1aCr3F_DllkLTP4L77nDpP6oxnts',
      location: '59.95307,30.33427',
    };
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  fetchData() {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
      key: this.state.API_KEY,
      locationRadius: '50km',
      order: 'date',
      part: 'snippet',
      location: this.state.location,
      type: 'video',
      maxResults: 4,
    };
    axios
      .get(ROOT_URL, { params })
      .then((response) => {
        const videoIds = response.data.items.map((video) => video.id.videoId);
        this.setState({ videoIds });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { lat, lng } = this.props.position;
    if (prevProps.position.lat !== lat && prevProps.position.lng !== lng) {
      const location = `${lat},${lng}`;
      console.log('new query:', location);
      this.setState({ location });
    }
    if (prevState.location !== this.state.location) {
      this.fetchData();
    }
  }

  render() {
    const videoOpts = {
      height: '195',
      width: '320',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { videoIds } = this.state;
    return (
      <ul className="youtube__wrapper">
        {videoIds && videoIds.length ? (
          videoIds.map((id) => (
            <li key={`li${id}`} className="youtube__tile">
              <YouTube
                key={id}
                videoId={id}
                opts={videoOpts}
                onReady={this._onReady}
              />
            </li>
          ))
        ) : (
          <p>loading...</p>
        )}
      </ul>
    );
  }
}

export default YTSearch;
