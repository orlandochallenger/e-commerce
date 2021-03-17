
import React, {useState, useEffect} from "react" 
import {commerce} from "./lib/commerce"
import {Products, NavBar, Cart, Checkout} from "./components"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart)
  }

  const handleAddToCart = async (productId, quanitity) => {
      const {cart} = await commerce.cart.add(productId, quanitity);
      
      setCart(cart)
  }

  const handleUpdatedCart = async (productId, quanitity) => {
      const {cart} = await commerce.cart.update(productId, {quanitity});

      setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
      const {cart} = await commerce.cart.remove(productId);

      setCart(cart)
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

console.log(products)
  return (
    <Router>
      <div >
        <NavBar totalItems={cart.total_items}/>
        <Switch>
            <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart}/>
            </Route>
            <Route exact path="/cart">
                <Cart cart={cart}
                handleUpdatedCart={handleUpdatedCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart} 
                />
            </Route>
            <Route exact path="/checkout">
                <Checkout cart={cart}/>
            </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
