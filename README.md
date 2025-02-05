# 🛒 Redux Shopping Cart

A simple shopping cart web application built with React and Redux, using Redux Toolkit to manage the state of the cart. The app fetches products from an external API and allows users to add products to their cart, update quantities, and remove items. The cart data is persisted in `localStorage`.

## Features 🌟:
- Fetch products from an external API (Fake Store API).
- Add products to the cart with quantity management.
- Update the quantity of items in the cart.
- Remove items from the cart.
- Calculate and display the total amount of the cart.
- Persist cart data using `localStorage`.

## File Structure 📂:
- **`src/store.jsx`**: Configures the Redux store.
- **`src/cartSlice.jsx`**: Defines the Redux slice for the cart, with actions for adding, updating, and removing items.
- **`src/ProductList.jsx`**: Displays a list of products fetched from the API and allows adding them to the cart.
- **`src/Cart.jsx`**: Displays the cart items, with options to update quantities or remove items.
- **`src/App.jsx`**: The main application component, wrapping the ProductList and Cart components.

## Technologies Used 🛠️:
- **React**: Frontend library for building the user interface.
- **Redux Toolkit**: State management for handling cart data.
- **React-Redux**: Integration of Redux with React.
- **Axios**: Library for fetching products from the API.
- **Local Storage**: Persistence of cart data.
- **CSS**: For styling the app.

## Installation 💻:
1. Clone this repository:
   ```bash
   git clone https://github.com/AlaaSa3di/Shopping-Cart.git
