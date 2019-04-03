const formAddress = document.querySelector('#formAddress');
const responseBlock = document.querySelector('#responseBlock');
formAddress.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formAddress.address.value) {
    responseBlock.textContent = 'Loading...';
    fetch(`//localhost:3000/weather?address=${formAddress.address.value}`).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            responseBlock.textContent = data.error;
          } else {
            responseBlock.innerHTML = `<p><b>Location:</b> ${
              data.location
            }</p><p><b>Forecast:</b> ${data.forecast}`;
          }
        });
      },
    );
  } else {
    responseBlock.textContent = 'Please provide an address';
  }
});
