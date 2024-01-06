import { checkForName } from './nameChecker'; // Import the checkForName function
import { displayAnalysisResult } from './displayAnalysisResult'; // Import the displayAnalysisResult function

// Mock the fetch function
global.fetch = jest.fn();

// Import the function that handles form submission
import { handleSubmit } from './formHandler';

// Import the DOM testing utilities
import { screen, fireEvent } from '@testing-library/dom';

describe('Form Submission', () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <form id="analysis-form">
        <input id="text-input" type="text" />
        <button type="submit">Submit</button>
      </form>
    `;
  });

  it('should show an alert for invalid input', async () => {
    // Mock the checkForName function to return false (invalid input)
    checkForName.mockReturnValue(false);

    // Trigger the form submission
    handleSubmit(new Event('submit'));

    // Assert that an alert is shown
    expect(window.alert).toHaveBeenCalledWith('Input text is not valid.');
  });

  it('should send a POST request and display the analysis result', async () => {
    // Mock the checkForName function to return true (valid input)
    checkForName.mockReturnValue(true);

    // Mock the fetch function to return a response with JSON data
    const mockResponse = { ok: true, json: jest.fn(() => Promise.resolve({ result: 'Analysis result' })) };
    global.fetch.mockResolvedValue(mockResponse);

    // Trigger the form submission
    handleSubmit(new Event('submit'));

    // Assert that the fetch function was called with the expected arguments
    expect(global.fetch).toHaveBeenCalledWith('/analyze', {
      method: 'POST',
      body: expect.any(FormData),
      redirect: 'follow',
    });

    // Wait for the fetch promise to resolve
    await Promise.resolve();

    // Assert that the analysis result is displayed on the page
    expect(screen.getByText('Analysis result')).toBeInTheDocument();
  });

  it('should handle an API request failure', async () => {
    // Mock the checkForName function to return true (valid input)
    checkForName.mockReturnValue(true);

    // Mock the fetch function to return an error response
    global.fetch.mockRejectedValue(new Error('API request failed'));

    // Trigger the form submission
    handleSubmit(new Event('submit'));

    // Assert that an error message is logged
    expect(console.error).toHaveBeenCalledWith('Error:', expect.any(Error));
  });
});