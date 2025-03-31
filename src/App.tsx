import Header from "./components/header";
import ProductList from "./components/product-list";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList className="mt-6 container mx-auto" />
    </div>
  );
}

export default App;
