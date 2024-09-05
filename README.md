# Bitcoin Price Conversion Widget

This project is a simple and intuitive Bitcoin price conversion widget that allows users to convert USD to BTC based on real-time data from the CoinGecko API. The widget displays the current Bitcoin price, allows input for USD values, and shows the equivalent amount in Bitcoin along with the timestamp of the last price update.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Reference](#api-reference)
- [UI/UX Considerations](#uiux-considerations)
- [Performance Considerations](#performance-considerations)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)

## Demo

The widget fetches real-time data from CoinGecko and enables users to input USD amounts (up to a maximum of $100,000,000) and convert them into Bitcoin. It shows the latest price of Bitcoin and the timestamp of the last data refresh.

## Features

- **Current Bitcoin Price**: Displays the latest Bitcoin price in USD fetched from the CoinGecko API.
- **USD to BTC Conversion**: Converts any valid USD amount to BTC, up to a maximum of $100,000,000.
- **Timestamp**: Shows the last updated timestamp for the current Bitcoin price.
- **User Input Validation**: Ensures the input is a valid number and within the accepted range.
- **Responsive UI**: The widget is designed with a maximum width of 450px and adapts to various screen sizes.
- **Performance Optimized**: Debounced input handling and optimized API usage to ensure smooth performance.

## Technologies

- **React.js**: For building the component-based UI.
- **Tailwind CSS**: For rapid and responsive styling.
- **Axios**: For handling API requests to CoinGecko.
- **CoinGecko API**: Provides real-time data for Bitcoin price in USD.

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bitcoin-price-widget.git
   cd bitcoin-price-widget
   ```

2. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   Using npm:
   ```bash
   npm start
   ```

   Or using yarn:
   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the widget.

## Usage

- The widget will initially load with the latest Bitcoin price and the last updated timestamp.
- You can enter a USD amount in the input field (up to a maximum of $100,000,000).
- The widget will display the converted Bitcoin value and will automatically refresh when the input changes.
- The Bitcoin price and the last updated timestamp are refreshed each time the page loads.

## Folder Structure

```bash
├── public          # Public assets
├── src
│   ├── components  # Widget component
│   ├── index.css     # Main app css file
│   ├── App.js      # Main app file
│   └── index.js    # Entry point
├── .gitignore      # Git ignore file
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation
```

## API Reference

The widget uses the [CoinGecko API](https://www.coingecko.com/en/api) for fetching the current Bitcoin price in USD.

### API Endpoint Used:

- `GET /simple/price?ids=bitcoin&vs_currencies=usd`
  - **Response**:
    ```json
    {
      "bitcoin": {
        "usd": 42000
      }
    }
    ```

## UI/UX Considerations

- **Responsive Design**: The widget has a maximum width of 450px, making it ideal for embedding in dashboards, sidebars, or mobile views.
- **Neutral Default Values**: When the app first loads, the input and converted values show neutral placeholders (`"--"`) until the user enters a value.
- **Error Handling**: Invalid input values (non-numeric, out-of-range) are gracefully handled without breaking the UI.
- **Consistent Styling**: Tailwind CSS is used to maintain a clean and modern UI.

## Performance Considerations

- **Optimized API Calls**: The API call is made once on component load and not repeatedly for each user action.
- **Input Debouncing**: Input handling is debounced to avoid excessive re-renders and conversions while typing.
- **Lightweight Component**: The component is designed to be lightweight and doesn't contain unnecessary dependencies.

## Limitations

- **API Rate Limits**: Since CoinGecko’s free API has rate limits, the widget might fail to fetch the latest data if the limits are exceeded.
- **Static Conversion**: The conversion relies on the price at the time of the last API call and does not continuously update unless the page is refreshed.

## Future Improvements

- **Loading Indicator**: Add a spinner or loading state while fetching data from the API.
- **Auto Refresh**: Implement auto-refresh functionality to update the Bitcoin price at regular intervals without refreshing the page.
- **Error Boundaries**: Improve error handling to catch and display friendly messages in case of API failure.
- **Dark Mode**: Provide a dark mode option for better user experience in low-light environments.
