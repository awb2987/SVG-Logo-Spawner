# SVG-Logo-Spawner

## Description

SVG-Logo-Spawner is a Node.js command-line application that allows users to generate a simple logo in SVG format. Users can input text, select a shape, and choose colors for both the text and the shape. The generated logo is saved as an SVG file, which can be easily viewed in a web browser.

## User Story

As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Testing](#testing)
- [Contributing](#contributing)
- [Walkthrough Video](#walkthrough-video)
- [Links](#links)

## Installation

To get started, clone the repository and install the necessary packages:

```bash
git clone https://github.com/awb2987/SVG-Logo-Spawner.git
cd SVG-Logo-Spawner
npm install
```

## Usage

Run the application using the following command:

```bash
node index.js
```

Follow the prompts to enter the text for your logo, choose a shape, and specify colors. The generated SVG file will be named `logo.svg` and will be created in the project directory.

## Acceptance Criteria

- User can enter up to three characters for the text.
- User can specify a text color using a color name or hexadecimal code.
- User can choose from three shapes: circle, triangle, and square.
- User can specify a color for the shape using a color name or hexadecimal code.
- An SVG file named `logo.svg` is created with the specified properties.
- When opened in a browser, the SVG file displays the generated logo correctly.

## Testing

This application uses Jest for testing. To run the tests, use the following command:

```bash
npm test
```

Ensure that all tests pass to verify the functionality of the logo generation process.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## Walkthrough Video

A walkthrough video demonstrating the functionality of the SVG-Logo-Spawner can be found at: [Video Link](https://drive.google.com/file/d/1760Wr9kXo5oifYR8MefNJlJkRTD4iOnh/view)

## Links

- [GitHub Repository](https://github.com/awb2987/SVG-Logo-Spawner)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Inquirer Documentation](https://github.com/SBoudrias/Inquirer.js)
