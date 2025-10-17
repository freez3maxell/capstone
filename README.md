# Setup and Evaluation

# Clone the repository via terminal and navigate to the project files (.\capstone\Developer Capstone\)
git clone https://github.com/freez3maxell/capstone.git
cd '.\capstone\Developer Capstone\'

# Install Dependencies
npm install

# Launch app in Browser (vite)
npm run dev

# Run Tests
npm test

# Basic Functionalities

## Overview
This project is a React application built with Vite, featuring a restaurant booking system and informational pages. It uses Bootstrap for styling and includes several custom components for a modular, maintainable codebase.

## Main Features

- **Homepage**: Displays a hero section, specials, testimonials, and restaurant information.
- **Navigation**: Responsive navbar for navigating between Home, About, Menu, and Booking pages.
- **Booking**: Users can select a date, time, number of guests, and occasion to book a table. Form validation and accessibility features are included.
- **Menu**: Showcases a list of recipes with images and descriptions.
- **About Us**: Provides information about the restaurant and its story.
- **Footer**: Responsive footer with navigation links and copyright.

## Accessibility
- Semantic HTML elements are used throughout.
- ARIA attributes and proper form labeling improve accessibility for screen readers.

## Styling
- Bootstrap classes are used for layout and components.
- Custom SCSS files extend and override Bootstrap styles for a unique look.

## Testing
- Unit and integration tests are provided for key components, especially the booking form.

## File Structure
- `src/components/` contains all React components.
- `src/scss/` contains SCSS partials for styling.
- `src/utilities/` contains utility functions and API logic.

## Development
- Hot Module Replacement (HMR) is enabled via Vite for fast development.
- ESLint is configured for code quality.

---
