import { checkForName } from './nameChecker'; // Import the checkForName function
import { displayAnalysisResult } from './displayAnalysisResult'; // Import the displayAnalysisResult function

document.querySelector('#analysis-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const inputText = document.querySelector('#text-input').value.trim();
  const lang = 'fr'; // Set the language code to French

  // Custom validation checks using checkForName function
  if (!checkForName(inputText)) {
    alert('Input text is not valid.'); // Display an alert for invalid input
    return;
  }

  // Create a new FormData object and append the required parameters
  const formdata = new FormData();
  formdata.append("key", "149921f08dmsh854780c894ed50fp1b3372jsn7f5dd9045ceb");
  formdata.append("txt", inputText);
  formdata.append("lang", lang);

  // Define the request options
  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  try {
    // Send the POST request to the MeaningCloud API
    const response = await fetch("/analyze", requestOptions);

    if (response.ok) {
      const data = await response.json();
      // Process and display the analysis result on your web page
      displayAnalysisResult(data);
    } else {
      console.error('API request failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

/**
 * Validates the input text.
 *
 * @param {string} inputText - The input text to be validated.
 * @return {boolean} Returns true if the input text is not blank, otherwise returns false.
 */
function validateInputText(inputText) {
  // Add your custom validation logic here
  // For example, check if the input text is not blank
  return inputText !== '';
}