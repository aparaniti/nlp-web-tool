# NLP Web Tool

This is a web application for Natural Language Processing (NLP). It allows users to analyze text using the MeaningCloud API to determine sentiment and other linguistic attributes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Custom Validations](#custom-validations)
- [Service Workers](#service-workers)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine:
git clone https://github.com/aparaniti/nlp-web-tool_.git
2. Navigate to the project directory:
cd nlp-web-tool
3. Install dependencies using npm:
npm install


## Usage

1. Start the development server:
npm run start

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the NLP Web Tool.

## Custom Validations

The project includes custom validations that are invoked before making API calls. These validations ensure that the input text is valid before sending it to the MeaningCloud API.

## Service Workers

Service workers are set up to provide a better offline experience for users. The application can work offline and load faster on subsequent visits.

## Testing

The project includes unit tests for the JavaScript files under the `client` folder. You can run the tests using the following command:
npm run test

## Contributing

Contributions to this project are welcome. Please follow the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).
