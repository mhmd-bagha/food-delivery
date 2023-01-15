import {Route, Routes} from "react-router-dom";
import Index from "./components/pages/main";
import './styles/index.css'
import Food from "./components/pages/food";
import Cart from "./components/pages/cart";
import Notifications from "./components/pages/notifications";
import Login from "./components/pages/login";
import ForgotPassword from "./components/pages/forgot-password";
import ChangePassword from "./components/pages/change-password";
import Payment from "./components/pages/payment";
import DeliveryInformation from "./components/pages/delivery-information";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Index/>} index/>
            <Route path='/food/:id' element={<Food/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/delivery-information' element={<DeliveryInformation/>}/>
        </Routes>
    );
}

export default App;