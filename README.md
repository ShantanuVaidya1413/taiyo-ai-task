# COVID-19 Dashboard

This application provides a visual dashboard for COVID-19 data, including cases, active cases, recovered cases, and deaths. It is built using React, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery).

## Features

- **Contact Management**: The app allows users to add, view, edit, and delete contacts. All contacts are stored in a Redux store.
- **Dashboard**: A simple dashboard displaying a line graph of cases over time, with markers indicating the country name, total number of active, recovered cases, and deaths.
- **API Endpoints**:
  - World wide data: [https://disease.sh/v3/covid-19/all]
  - Data as per countries: [https://disease.sh/v3/covid-19/countries]
  - Historical data: [https://disease.sh/v3/covid-19/historical/all?lastdays=all]

## Getting Started

To get started, clone this repository to your local machine:
git clone https://github.com/ShantanuVaidya1413/taiyo-ai-task.git

## Installation

Install the necessary dependencies:
npm install

## Running the App

Navigate to the project directory and run: npm start

This will start the development server and open your app in the browser.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types to the code.
- **TailwindCSS**: A utility-first CSS framework for styling your app.
- **React Router v6**: A routing library for React.
- **React Query (TanstackQuery)**: A library for making GraphQL queries.

## Contact Management App

The contact management app allows users to add, view, edit, and delete contacts. It uses Redux for state management.

## Dashboard

The dashboard displays a line graph of cases over time, with markers indicating the country name, total number of active, recovered cases, and deaths.

## Deliverable

A working contact management app with Maps and Charts, deployable on free services like Vercel, Github Pages, or Heroku.

## Objective Page Contacts

The app should have a form for adding new contacts, a list of all added contacts, and each contact should have a button to view the contacts details. The app should be able to edit and delete contacts. It uses Redux for state management.

## Objective Page Charts and Maps

Build a simple dashboard with:

- A line graph showing the cases fluctuations
- A react leaflet map with markers that indicates the country name, total number of active, recovered cases, and deaths in that particular country as a popup.

## Instructions

Use the provided APIs to fetch data and create dashboards.
