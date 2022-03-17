import React from 'react'
import { Routes, Route} from "react-router-dom";
import CartScreen from '../pages/CartScreen';
import HomeScreen from '../pages/HomeScreen';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import OrderScreen from '../pages/OrderScreen';
import PaymentScreen from '../pages/PaymentScreen';
import PlaceOrderScreen from '../pages/PlaceOrderScreen';
import ProfileScreen from '../pages/ProfileScreen';
import Register from '../pages/Register';
import ShippingScreen from '../pages/ShippingScreen';
import SingleProduct from '../pages/SingleProduct';

const MyRoutes = () => {
  return (
    
    <Routes>
    <Route path='/' element={<HomeScreen/>} exact/>
    <Route path='/products/:id' element={<SingleProduct/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/profile' element={<ProfileScreen/>} />
    <Route path='/cart'>
<Route index element={<CartScreen/>}/>
<Route path=':id' element={<CartScreen/>}/>

    </Route>
    <Route path='/shipping' element={<ShippingScreen/>} />
    <Route path='/payment' element={<PaymentScreen/>} />
    <Route path='/placeorder' element={<PlaceOrderScreen/>} />
    <Route path='/order' element={<OrderScreen/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
   
  )
}

export default MyRoutes