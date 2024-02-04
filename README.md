# Udacity - React - Project 1

MyReads: A Book Tracking App

## Introduction

### Overview

In the MyReads project, I create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

The project emphasizes using React to build the application for client side and the API provided by udacity for server side.

### Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Result obtained

I took the React course and did some research on my own. And these are what I did in this project:

- Instead of using `Create React App`, I use `Vite` for the deployment process to save time on building and testing.
- I used `Typescript` for the bar project instead of `Javascript` for writing the code. This helps my code become more coherent.
- I have separated the code and components into small modules for easy maintenance.
- Beside that, I also use additional libraries to make the project better (you can see it in package.json file)

## Setup and Start

Please follow below steps:

### 1. Required

To start or build this app, you need to have

- Node: should be LTS version (>= v20.11.0)
- NPM: should be LTS version (>= 10.2.4), or you can use Yarn instead (>= 1.22.21)

### 2. Install package dependencies

Run this script add root project (same level to package.json)

```bash
# with NPM
npm install

# or with Yarn
yarn install
```

### 3. Start development

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run start

# or with Yarn
yarn start
```

After starting successfully, this app will run on `http://localhost:5173/`

### 3. Build to deploy (optional)

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run build

# or with Yarn
yarn build
```

### 4. Scan ESLint (optional)

Run this script add root project (same level to package.json)

```bash
# with NPM
npm run lint

# or with Yarn
yarn lint
```
