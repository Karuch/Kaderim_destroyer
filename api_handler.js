const now = new Date();
const year = now.getFullYear();        // Returns the year (4 digits)
const month = now.getMonth() + 1;      // Returns the month (0-11, +1 to make it 1-12)
const day = now.getDate();             // Returns the day of the month (1-31)
const hours = now.getHours();          // Returns the hour (0-23)
const minutes = now.getMinutes();      // Returns the minutes (0-59)
const seconds = now.getSeconds();      // Returns the seconds (0-59)
const milliseconds = now.getMilliseconds(); // Returns the milliseconds (0-999)
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const dateElement = document.getElementById('date');
// Set the text of the h1 element to the title from the JSON
dateElement.textContent = formattedDateTime

fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => {
    // Select the h1 element by its id
    const titleElement = document.getElementById('expandingTextArea5');

    // Set the text of the h1 element to the title from the JSON
    titleElement.textContent = json.title;
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  