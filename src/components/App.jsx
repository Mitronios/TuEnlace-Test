import { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <main className="container-fluid text-center bg-dark">
      <h1 className="text-white">Tu Enlace.Net</h1>
      <ProductCard />
    </main>
  );
};

export default App;
