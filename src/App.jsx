import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>

      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Tec"/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}   />
          <Route path="/checkout" element={<CheckOut/>}   />
          <Route path="*" element={<h2>Sitio en Construcción</h2>} />
        </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
