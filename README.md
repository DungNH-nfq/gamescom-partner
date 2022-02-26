# gamescom_partner

<p >
  <a href="https://dungnh-nfq.github.io/gamescom-partner/" target="blank">This is the app for Gamescom partners for candidate testing.</a>
</p>

## Description

As a user I want to view a partner page to get an overview about the company and it’s products.

- The website is responsive and looks like in the sketch file(page “Partner”) for mobile (artwork Partner/Mobile/Detailpage) and desktop (Partner/Detailpage).
- For other screen sizes the design behaves responsive.
- The navigation (header on desktop, bottom navigation on mobile) are sticky.
- The frontend is developed foresightly. Dynamic content is added later. (e.g. other aspect ratios of images, titles with different length…) and should still result in a nice layout.
- Sections may be ordered differently by editors.
- “read more” expands the text area. Other buttons don’t have an action.
- A CSS framework (preferably Bootstrap) is consequently used.
- The site is a React application.
  p/s: You can find the sketch file [here](https://www.sketch.com/s/1c8d7446-8572-47c1-ae04-b45d7f578773).

## Pre-requisites

1. [React](https://reactjs.org/) is a JavaScript library for building user interfaces.

   - [React Typescript](https://www.typescriptlang.org/docs/handbook/react.html)

2. [Vite](https://vitejs.dev/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts

   - [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react) The all-in-one Vite plugin for React projects.

3. [Tailwindcss](https://tailwindcss.com/): A utility-first CSS framework packed with classes like 'flex', 'pt-4', 'text-center' and 'rotate-90' that can be composed to build any design, directly in your markup.

4. [VSCode](https://code.visualstudio.com/)

5. [Github pages](https://github.com/tschaub/gh-pages) publish files to a `gh-pages` branch on GitHub (or any other branch anywhere else).

## Installation

Clone the project

```bash
$ git clone https://github.com/buffalolazyvn/gamescom_partner.git gamescom_partner
```

Go to the project directory

```bash
$ cd gamescom_partner
```

## .ENV

The default file `.env` should be placed in the root directory. Environment variables can be configured and customize via .env file. For example like the base_url on github pages, and the path to access the app on it, e.g: **https://dungnh-nfq.github.io/gamescom-partner/**

### Or you can just download it as zip, then

Install dependencies

```bash
$ npm install
```

Start the server

```bash
$ npm run dev
```

Run tests

```bash
$ npm test:unit
$ npm test:unit:coverage
```

Deploy to the github pages

> The app will be deployed to the github pages and url to access it is **https://dungnh-nfq.github.io/gamescom-partner/**

```bash
$ npm run deploy
```
