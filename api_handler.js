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
  
  