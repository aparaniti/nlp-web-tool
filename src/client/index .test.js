import { checkForName } from './js/nameChecker';

describe('checkForName Function', () => {
  it('should not display an alert when invoked', () => {
    // Mock the `alert` function to capture calls
    const alertMock = jest.spyOn(window, 'alert');
    
    // Call the function
    checkForName('SomeName');

    // Expect the `alert` function not to have been called
    expect(alertMock).not.toHaveBeenCalled();
  });
});

describe('Sample Code Block', () => {
  it('should console.log the checkForName function', () => {
    // Mock the console.log function to capture calls
    const consoleLogMock = jest.spyOn(console, 'log');
    
    // Call the code block
    console.log(checkForName);
    
    // Expect the console.log function to have been called with the checkForName function
    expect(consoleLogMock).toHaveBeenCalledWith(checkForName);
  });

  it('should console.log "I EXIST"', () => {
    // Mock the console.log function to capture calls
    const consoleLogMock = jest.spyOn(console, 'log');
    
    // Call the code block
    console.log("I EXIST");
    
    // Expect the console.log function to have been called with "I EXIST"
    expect(consoleLogMock).toHaveBeenCalledWith("I EXIST");
  });

  it('should console.log "CHANGE!!"', () => {
    // Mock the console.log function to capture calls
    const consoleLogMock = jest.spyOn(console, 'log');
    
    // Call the code block
    console.log("CHANGE!!");
    
    // Expect the console.log function to have been called with "CHANGE!!"
    expect(consoleLogMock).toHaveBeenCalledWith("CHANGE!!");
  });
});