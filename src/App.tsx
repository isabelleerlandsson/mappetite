import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRestaurantPage from "./pages/AddRestaurant/AddRestaurant";
import HomePage from "./pages/HomePage/HomePage";
import RestaurantListPage from "./pages/ListAllRestaurants/ListAllRestaurants";
import RestaurantDetailPage from "./pages/RestaurantDetails/RestaurantDetails";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
}

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add-restaurant"
          element={<AddRestaurantPage onAdd={addRestaurant} />}
        />
        <Route
          path="/restaurants"
          element={<RestaurantListPage restaurants={restaurants} />}
        />
        <Route
          path="/restaurants/:id"
          element={<RestaurantDetailPage restaurants={restaurants} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
