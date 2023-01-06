import {Route, Routes} from "react-router-dom";
import Index from "./components/pages/main";
// import styles
import './styles/index.css'
import Food from "./components/pages/food";
import Cart from "./components/pages/cart";
import Notifications from "./components/pages/notifications";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Index/>} index/>
            <Route path='/food/:id' element={<Food/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
        </Routes>
    );
}

export default App;