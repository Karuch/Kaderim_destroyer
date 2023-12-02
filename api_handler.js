fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => {
    // Select the textarea element by its id
    const textareaElement = document.getElementById('expandingTextArea5');

    // Append the new text to the textarea, starting two lines down if there's already text
    if (textareaElement.value) {
      textareaElement.value += '\n\n';
    }
    textareaElement.value += json.title;

    // Adjust the height of the textarea
    textareaElement.style.height = 'auto'; // Reset the height
    textareaElement.style.height = textareaElement.scrollHeight + 'px'; // Set the height to the content's scroll height
  })
  .catch(error => {
    console.error('Error:', error);
  });


  fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => {
    // Select the textarea element by its id
    const textareaElement = document.getElementById('expandingTextArea5');

    // Append the new text to the textarea, starting two lines down if there's already text
    if (textareaElement.value) {
      textareaElement.value += '\n\n';
    }
    textareaElement.value += json.price;

    // Adjust the height of the textarea
    textareaElement.style.height = 'auto'; // Reset the height
    textareaElement.style.height = textareaElement.scrollHeight + 'px'; // Set the height to the content's scroll height
  })
  .catch(error => {
    console.error('Error:', error);
  });