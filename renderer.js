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
