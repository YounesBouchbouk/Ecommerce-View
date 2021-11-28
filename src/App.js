import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header.jsx";
import Foother from "./components/Foother.jsx";
import Home from "./pages/Home.jsx";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./globalTheme/globaltheme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      
        <ThemeProvider theme={theme}>
         
        <Router>
           <Fragment>
           <Header /> 
              <Routes>
                 
                  <Route exact  path="/login" element={<Login/>}  />
                    
                  
                  <Route exact  path="/signup" element={<SignUp/>} />
                    
                  
                  <Route exact  path="/"  element={<Home />} />
                    
                   <Route exact  path="/products"  element={<ProductPage />} /> 
                   <Route exact  path="/products/:id"  element={<SingleProduct />} />
            
              </Routes>
              <Foother />
              </Fragment>
      </Router>
     
     </ThemeProvider>
    </div>
  );
}

export default App;
