/**
 * Handles the form submission event.
 *
 * @param {Event} event - The form submission event.
 * @return {undefined} This function does not return a value.
 */
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the input field with the ID "name"
    let formText = document.getElementById('name').value;

    // Call the checkForName function with the input text
    checkForName(formText);

    console.log("::: Form Submitted :::"); // Log a message to the console

    // Send a GET request to 'http://localhost:8080/test'
    fetch('http://localhost:8080/test')
        .then(res => res.json()) // Parse the response as JSON
        .then(function(res) {
            // Update the HTML content of an element with the ID "results"
            document.getElementById('results').innerHTML = res.message;
        })
        .catch(function(error) {
            console.error('API Error:', error); // Log any errors that occur during the request
        });
}

// Export the handleSubmit function so it can be used elsewhere
export { handleSubmit };