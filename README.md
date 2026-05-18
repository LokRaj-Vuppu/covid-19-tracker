# COVID-19 Tracker 🦠🌍

A React web application that tracks COVID-19 cases worldwide using live data from a public API. Features an interactive Leaflet map with country-level statistics and Chart.js line graphs for historical trends.

---

## Features

- Live global and per-country COVID-19 stats (cases, recoveries, deaths)
- Country selector dropdown to filter by country
- Interactive world map with circle markers scaled to case counts (Leaflet)
- Historical trend line charts (Chart.js)
- Statistics cards showing totals at a glance
- Material UI components for a clean, responsive layout

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 16 | Frontend UI framework |
| Material UI | Component library and styling |
| Leaflet + react-leaflet | Interactive world map |
| Chart.js + react-chartjs-2 | Line charts for historical data |
| numeral | Number formatting (e.g. 1.2M) |
| disease.sh API | Free public COVID-19 data source |

---

## Data Source

This app uses the **[disease.sh](https://disease.sh/)** open-source disease data API — no API key required.

Key endpoints used:
- `https://disease.sh/v3/covid-19/all` — Global totals
- `https://disease.sh/v3/covid-19/countries` — Per-country stats
- `https://disease.sh/v3/covid-19/historical/all?lastdays=120` — Historical data

---

## Project Structure

```
covid-19-tracker/
├── public/           # Static HTML and assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── App.js        # Root component
│   ├── App.css       # Global styles
│   └── index.js      # Entry point
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v14+

### Installation

```bash
git clone https://github.com/LokRaj-Vuppu/covid-19-tracker.git
cd covid-19-tracker
npm install
```

### Run the App

```bash
npm start
```

Visit: **http://localhost:3000/**

### Build for Production

```bash
npm run build
```

---

## Screenshots

> *(Add screenshots of the map view and stats cards here)*

---

## Author

**LokRaj Vuppu** — [GitHub](https://github.com/LokRaj-Vuppu)
