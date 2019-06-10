const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');

socket.on('message', message => {
  console.log(message);
});
$messageForm.addEventListener('submit', e => {
  e.preventDefault();
  $messageFormButton.setAttribute('disabled', 'disabled');
  const message = e.target.elements.message.value;
  socket.emit('sendMessage', message, error => {
    $messageFormButton.removeAttribute('disabled', 'disabled');
    $messageFormInput.value = '';
    $messageFormInput.focus();

    if (error) {
      return console.log(error);
    }
    console.log('The message was delivered.');
  });
});

socket.on('countUpdated', count => {
  console.log('The count has been updated:', count);
});
document.querySelector('#increment').addEventListener('click', () => {
  console.log('clicked');
  socket.emit('increment');
});

const $sendLocation = document.querySelector('#send-location');
$sendLocation.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser.');
  }
  $sendLocation.setAttribute('disabled', 'disabled');
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        $sendLocation.removeAttribute('disabled', 'disabled');
        console.log('Location shared!');
      },
    );
  });
});
