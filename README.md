# Singlish to Sinhala Translation Testing - ITPM Assignment 1

This repo has test cases for Singlish -> Sinhala for website [https://www.swifttranslator.com/](https://www.swifttranslator.com/) using Playwright automation framework.

## 📋 Project Overview

This project implements automated testing for:

- **24+ positive test scenarios** covering accurate Singlish to Sinhala conversions
- **10+ negative test scenarios** identifying system failures or incorrect behaviors
- **1 UI-related test scenario** for interface validation

## 🚀 Getting Started

### Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Installation

Follow these steps to set up and run the test suite:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/LeshanieM/Playwright-Test-Cases.git

```

```bash
Extract the zip file and Open it in VS code
```
#### Step 2: Install Dependencies

Install all required npm packages including Playwright:

```bash
npm install
```

This command will:

- Install Playwright and its dependencies

#### Step 3: Install Playwright Browsers (Only if you haven't download them earlier)

Playwright requires browser binaries to run tests. Install them using:

```bash
npx playwright install
```

This command will download and install:

- Chromium
- Firefox
- WebKit (Safari engine)

**Note:** The download size is approximately 300-400 MB depending on your operating system.

#### Step 4: Run the Tests

Execute all test cases using:

```bash
npx playwright test
```

#### Generate and view test report

```bash
npx playwright show-report
```

#### Run tests with UI mode (interactive)

```bash
npx playwright test --ui
```

## 🐛 Troubleshooting

### Common Issues

**1. Module not found errors**

```bash
# Solution: Reinstall dependencies
npm install
```

**2. Browser not found**

```bash
# Solution: Reinstall Playwright browsers
npx playwright install
```

**3. Tests failing due to network issues**

- Ensure stable internet connection
- Check if the website https://www.swifttranslator.com/ is accessible
- Increase timeout values in `playwright.config.js` if needed


## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Swift Translator Website](https://www.swifttranslator.com/)
