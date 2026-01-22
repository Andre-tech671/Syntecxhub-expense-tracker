# Syntecxhub Expense Tracker

A comprehensive React-based expense tracker application designed to help users manage their personal finances by tracking income and expenses. This project demonstrates modern React practices including hooks, state management, local storage persistence, and component-based architecture.

## Overview

The Expense Tracker allows users to:
- View their current financial balance
- Track total income and expenses
- Add new transactions (both income and expenses)
- View a list of all transactions in reverse chronological order
- Delete unwanted transactions
- Persist data locally in the browser

The application loads initial transaction data from a mock JSON file (`public/transactions.json`) if no local data exists, and all changes are automatically saved to localStorage for persistence across browser sessions.

## How It Works

### Data Flow and State Management
- **State Management**: The main `App.js` component manages the global state using React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).
- **Data Loading**: On app startup, it first checks localStorage for saved transactions. If none exist, it fetches seed data from `/transactions.json`.
- **Persistence**: Every change to transactions is automatically saved to localStorage.
- **Calculations**: Balance, total income, and total expenses are computed in real-time using `useMemo` for performance optimization.

### Components Breakdown

#### App.js (Main Component)
- **Purpose**: Root component that orchestrates the entire application.
- **Key Features**:
  - Manages `transactions` state array
  - Handles loading state during data fetch
  - Provides `addTransaction` and `removeTransaction` functions to child components
  - Calculates derived values: balance, income, expenses
  - Renders the main layout with Balance, TransactionList, and AddTransaction components

#### Balance.js
- **Purpose**: Displays the user's financial summary.
- **Features**:
  - Shows current balance (income - expenses)
  - Displays total income and total expenses separately
  - Uses currency formatting for USD display
  - Updates automatically when transactions change

#### TransactionList.js
- **Purpose**: Container for displaying all transactions.
- **Features**:
  - Shows loading message while data is being fetched
  - Renders transactions in reverse order (newest first)
  - Passes individual transaction data to Transaction components

#### Transaction.js
- **Purpose**: Represents a single transaction item.
- **Features**:
  - Displays transaction description and amount
  - Applies CSS classes based on transaction type (income/expense)
  - Includes a delete button to remove the transaction
  - Formats amount as currency

#### AddTransaction.js
- **Purpose**: Form for adding new transactions.
- **Features**:
  - Input fields for description and amount
  - Auto-focuses on description field for better UX
  - Validates input (description required, amount must be a number)
  - Supports negative amounts for expenses
  - Clears form after successful submission
  - Re-focuses on description field after adding

### Data Structure
Each transaction object contains:
- `id`: Unique identifier (timestamp-based)
- `description`: Text description of the transaction
- `amount`: Numeric value (positive for income, negative for expenses)

### Technologies and Concepts Demonstrated
- **React Hooks**: useState, useEffect, useMemo, useCallback, useRef
- **State Management**: Lifting state up to parent component
- **Data Persistence**: localStorage API
- **Asynchronous Operations**: Fetch API for loading initial data
- **Performance Optimization**: Memoization with useMemo and useCallback
- **Component Composition**: Breaking down UI into reusable components
- **Event Handling**: Form submission, button clicks
- **Conditional Rendering**: Loading states, dynamic CSS classes
- **Accessibility**: Proper labels and form structure

## Project Structure

```
Syntecxhub-expense-tracker/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html          # Main HTML template
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt
│   └── transactions.json   # Mock data for initial transactions
└── src/
    ├── App.css             # Main application styles
    ├── App.js              # Root component
    ├── App.test.js         # Tests for App component
    ├── index.css           # Global styles
    ├── index.js            # Application entry point
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── components/          # Reusable UI components
        ├── AddTransaction.js    # Form to add new transactions
        ├── Balance.js           # Financial summary display
        ├── Transaction.js       # Individual transaction item
        └── TransactionList.js   # List of all transactions
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Syntecxhub-expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Adding Transactions**:
   - Enter a description (e.g., "Salary", "Grocery shopping")
   - Enter an amount (positive for income, negative for expenses)
   - Click "Add Transaction"

4. **Viewing Balance**: The balance updates automatically showing your net financial position.

5. **Managing Transactions**: View all transactions in the list. Click the "x" button to delete any transaction.

6. **Data Persistence**: All changes are saved locally and will persist between browser sessions.

## Technologies Used

- **React**: Frontend library for building user interfaces
- **JavaScript (ES6+)**: Programming language with modern features
- **CSS**: Styling for responsive and attractive UI
- **localStorage**: Browser API for client-side data persistence
- **Fetch API**: For loading initial mock data
- **Create React App**: Build tool and development server

## Development Notes

- The app uses functional components with hooks instead of class components
- State is managed at the top level and passed down via props
- Calculations are memoized to prevent unnecessary re-computations
- The UI is responsive and works on different screen sizes
- Error handling is included for data fetching failures
