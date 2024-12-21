# Age Calculator

## Overview
The Age Calculator is a simple and interactive web application that allows users to calculate their age based on their date of birth. Users input their birth day, month, and year, and the application displays their age in years.

## Features
- **Responsive Design**: The application is styled using modern CSS to ensure a clean and user-friendly interface.
- **Error Validation**: Input fields include error messages to guide users in providing valid data (e.g., valid day, month, and year).
- **Interactive UI**: Displays the user's calculated age upon clicking the "Calculate" button.

## Technologies Used
- **HTML**: Semantic markup structure.
- **CSS**: Styling with the `Poppins` font from Google Fonts for a modern look.
- **JavaScript**: Implements age calculation logic and form validation.

## File Structure
```
project-folder
|-- index.html   # Main HTML file
|-- style.css    # Stylesheet for the application
|-- script.js    # JavaScript for application logic
|-- utils.js     # Utility functions for validation and age calculation
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/age-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd age-calculator
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Open the Age Calculator in a web browser.
2. Enter your birth date in the input fields for day, month, and year.
3. Click the "Calculate" button to view your age in years.
4. If invalid data is entered, error messages will appear beneath the respective input fields.

## Live Demo
Check out the live demo of the Age Calculator:
[Age Calculator Live Demo](https://mouadasel-age-calculator.netlify.app/)

## Repository
Find the project repository on GitHub:
[Age Calculator Repository](https://github.com/Mouadasel/Age-Calculator)

## Project Structure
### HTML
- **Semantic Markup**: Proper usage of `label` elements for form inputs ensures accessibility and clarity.
- **Error Messages**: Included `span` elements to display validation messages dynamically.

### CSS
- **Fonts**: `Poppins` font imported from Google Fonts for a sleek appearance.
- **Class-based Styling**: Modular and reusable CSS classes prefixed with `card__` for the components.

### JavaScript
- **Validation**: Ensures valid input data (e.g., valid day, month, and year).
- **Utility Functions**: Located in `utils.js`, these handle validation and age calculation:
  - `validateDay(day)`: Validates the day input.
  - `validateMonth(month)`: Validates the month input.
  - `validateYear(year)`: Validates the year input based on the current year.
  - `isDateValid(dayElement, monthElement, yearElement)`: Checks if the entered date is valid and highlights errors.
  - `calculateAge(year, month, day)`: Calculates the age based on the provided date of birth.

## Future Improvements
- Add support for calculating age in months and days.
- Include additional validation for leap years.
- Provide a more detailed result summary (e.g., next birthday countdown).

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

---

Enjoy using the Age Calculator!

