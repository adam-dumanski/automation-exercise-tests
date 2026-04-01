# 🧪 Automation Exercise - E2E Tests

![Cypress Tests](https://github.com/adam-dumanski/automation-exercise-tests/actions/workflows/cypress.yml/badge.svg)

Automated E2E tests for https://www.automationexercise.com using Cypress and Page Object Model.

## 🚀 Features

- ✅ Page Object Model architecture (6 page objects)
- ✅ **14 E2E test scenarios**
- ✅ Best practices (data-test selectors)
- ✅ Complete E2E flow: Login → Products → Cart → Checkout → Payment → Success
- ✅ Test data management
- ✅ File upload testing
- ✅ Payment flow testing

## 📦 Installation
```bash
npm install
```

## ▶️ Run Tests
```bash
# Open Cypress
npx cypress open

# Run headless
npx cypress run
```

## 📂 Project Structure
```
automation-exercise-tests/
├── cypress/
│   ├── e2e/tests/
│   │   ├── login.cy.js         (4 tests)
│   │   ├── signup.cy.js        (2 tests)
│   │   ├── products.cy.js      (3 tests)
│   │   ├── cart.cy.js          (3 tests)
│   │   ├── checkout.cy.js      (1 test - Full E2E!)
│   │   └── contact.cy.js       (1 test)
│   ├── support/pages/
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── ProductsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── ContactPage.js
│   └── fixtures/
│       └── testFile.txt
```

## 🧪 Test Coverage

| Area | Tests | Description |
|------|-------|-------------|
| Login | 4 | Valid/invalid credentials, logout, locked user |
| Signup | 2 | New user registration, duplicate email validation |
| Products | 3 | Display, search, add to cart |
| Cart | 3 | View, remove, multiple products |
| **Checkout** | **1** | **Full E2E purchase flow** |
| Contact | 1 | Contact form with file upload |

**Total: 14 tests**

## 🛍️ E2E Test Flow

Complete purchase journey:
1. User login
2. Browse products
3. Add to cart
4. Proceed to checkout
5. Review order
6. Payment processing
7. Order confirmation
8. Invoice download

## 🛠️ Tech Stack

- **Cypress** - E2E testing framework
- **JavaScript** - Programming language
- **Page Object Model** - Design pattern

## 👤 Author

Adam Dumański

## 📝 License

MIT