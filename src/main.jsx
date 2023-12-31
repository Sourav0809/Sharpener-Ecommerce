import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./Components/Store/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Components/Store/AuthContext/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
