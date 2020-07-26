import React, { useState } from "react";
import { Form, Input, Rating, Button } from "semantic-ui-react";

export const MovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const changeTitle = e => {
    setTitle(e.target.value);
  };
  const changeRating = data => {
    setRating(data.rating);
  };
  const submitMovie = async () => {
    const movie = { title, rating };
    const response = await fetch("/add_movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    });
    if (response.ok) {
      onNewMovie(movie);
      setTitle("");
      setRating(1);
    }
  };

  return (
    <Form>
      <Form.Field>
        <Input placeholder="Movie Title" value={title} onChange={changeTitle} />
      </Form.Field>
      <Form.Field>
        <Rating
          icon="star"
          maxRating={5}
          rating={rating}
          onRate={(_, data) => changeRating(data)}
        />
      </Form.Field>
      <Form.Field>
        <Button onClick={submitMovie}>Submit</Button>
      </Form.Field>
    </Form>
  );
};
