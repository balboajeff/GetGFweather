// Define the API URL
const apiUrl = 'https://api.aprs.fi/api/get?name=K2CCS&what=wx&apikey=126924.4ppQHltQeLSeDEM9&format=json';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });