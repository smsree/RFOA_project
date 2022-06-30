import { useState} from "react";
import Header from "./Component/Layouts/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import AdminLoginForm from "./Component/Admin/AdminLoginform";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [adminIsShown,setAdminIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  const showAdminHandler = () => {
    setAdminIsShown(true);
  }
  const hideAdminHandler=()=>{
    setAdminIsShown(false);
  }
  return (
    <CartProvider>
  
      <Header onShowCart={showCartHandler} onShowAdmin={showAdminHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      {adminIsShown && <AdminLoginForm onCloseAdmin={hideAdminHandler}/>}
      <main>
      <Meals/>
      </main>
      </CartProvider>
   
  );
}

export default App;
