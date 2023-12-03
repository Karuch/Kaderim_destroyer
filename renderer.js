// renderer.js
const { ipcRenderer } = require('electron');





function fetch_cleaner(link) {
  fetch(link) //'https://dummyjson.com/products/1'
  .then(res => res.json())
  .then(json => {
    // Select the textarea element by its id
    const textareaElement = document.getElementById('expandingTextArea5');

    textareaElement.value = `⬛️ ${json.title}`;

    // Adjust the height of the textarea
    textareaElement.style.height = 'auto'; // Reset the height
    textareaElement.style.height = textareaElement.scrollHeight + 'px'; // Set the height to the content's scroll height
  })
  .catch(error => {
    textareaElement.value = "⚠️ERROR: Could not set values from API";
    console.error('Error:', error);
    
  });
}
function fetch_not_cleaner(link) {
  fetch(link) //'https://dummyjson.com/products/1'
  .then(res => res.json())
  .then(json => {
    // Select the textarea element by its id
    const textareaElement = document.getElementById('expandingTextArea5');

    // Append the new text to the textarea, starting two lines down if there's already text
    if (textareaElement.value) {
      textareaElement.value += '\n\n';
    }
    textareaElement.value += `⬛️ ${json.price}`;

    // Adjust the height of the textarea
    textareaElement.style.height = 'auto'; // Reset the height
    textareaElement.style.height = textareaElement.scrollHeight + 'px'; // Set the height to the content's scroll height
  })
  .catch(error => {
    console.error('Error:', error);
  });
}












ipcRenderer.on('refresh-divs', () => {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  document.getElementById('date').textContent = formattedDate;
  fetch_cleaner('https://dummyjson.com/products/1');
  fetch_not_cleaner('https://dummyjson.com/products/1');  
});


const now = new Date();
const year = now.getFullYear();        // Returns the year (4 digits)
const month = now.getMonth() + 1;      // Returns the month (0-11, +1 to make it 1-12)
const day = now.getDate();             // Returns the day of the month (1-31)
const hours = now.getHours();          // Returns the hour (0-23)
const minutes = now.getMinutes();      // Returns the minutes (0-59)
const seconds = now.getSeconds();      // Returns the seconds (0-59)
const milliseconds = now.getMilliseconds(); // Returns the milliseconds (0-999)
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

//const dateElement = document.getElementById('date');
// Set the text of the h1 element to the title from the JSON
//dateElement.textContent = formattedDateTime




function expandings_handler(expanding_id){

    const textarea = document.getElementById(expanding_id);
    textarea.addEventListener('input', adjustHeight);

}

function adjustHeight() {
  this.style.height = 'auto'; // Reset height to recompute
  this.style.height = this.scrollHeight + 'px'; // Set new height
}

expandings_handler('expandingTextArea');
expandings_handler('expandingTextArea2');
expandings_handler('expandingTextArea3');
expandings_handler('expandingTextArea4');
expandings_handler('expandingTextArea5');


function toggleButtonAndTextarea(buttonId, textareaId) {
    const emojiButton = document.getElementById(buttonId);
    const expandingTextArea = document.getElementById(textareaId);
    let isChecked = true; // Initial state is checked
  
    // Function to toggle the emoji and textarea visibility
    function toggleEmojiAndTextarea() {
      isChecked = !isChecked; // Toggle the state
  
      // Update the button's text content based on the state
      emojiButton.textContent = isChecked ? '✔️' : '❌';
  
      // Toggle the visibility of the textarea based on the state
      expandingTextArea.style.display = isChecked ? 'none' : 'block';
    }
  
    // Initialize the textarea based on the initial state of the button
    expandingTextArea.style.display = isChecked ? 'none' : 'block';
  
    // Add a click event listener to the button
    emojiButton.addEventListener('click', toggleEmojiAndTextarea);
}

toggleButtonAndTextarea('emojiButton', 'expandingTextArea'); // Replace with your actual IDs
toggleButtonAndTextarea('emojiButton2', 'expandingTextArea2'); // Replace with your actual IDs
toggleButtonAndTextarea('emojiButton3', 'expandingTextArea3'); // Replace with your actual IDs
toggleButtonAndTextarea('emojiButton4', 'expandingTextArea4'); // Replace with your actual IDs
