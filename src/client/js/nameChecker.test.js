import { checkForName } from './nameChecker'; // Import the checkForName function

// Mock the alert function
const mockAlert = jest.fn();
jest.mock('jest-mock-alert', () => ({
  ...jest.requireActual('jest-mock-alert'),
  alert: mockAlert,
}));

// Import the DOM testing utilities
import { screen } from '@testing-library/dom';

describe('checkForName Function', () => {
  it('should display an alert when the name is found', () => {
    // Arrange
    const inputText = 'Picard';

    // Act
    checkForName(inputText);

    // Assert
    expect(mockAlert).toHaveBeenCalledWith('Welcome, Captain!');
  });

  it('should not display an alert when the name is not found', () => {
    // Arrange
    const inputText = 'Sisko';

    // Act
    checkForName(inputText);

    // Assert
    expect(mockAlert).not.toHaveBeenCalled();
  });
});