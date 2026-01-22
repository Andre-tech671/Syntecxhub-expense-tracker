# Syntecxhub Expense Tracker

A simple React-based expense tracker application that allows users to manage their income and expenses.

## Features

- View current balance
- Add new transactions (income or expense)
- List all transactions
- Delete transactions

## Project Structure

```
Syntecxhub-expense-tracker/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── transactions.json
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── components/
        ├── AddTransaction.js
        ├── Balance.js
        ├── Transaction.js
        └── TransactionList.js
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

3. Add transactions, view balance, and manage your expenses.

## Technologies Used

- React
- JavaScript
- CSS
