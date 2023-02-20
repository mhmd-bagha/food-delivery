import {Route, Outlet, Navigate} from "react-router-dom";
import Cart from "../components/pages/cart";
import Notifications from "../components/pages/notifications";
import Payment from "../components/pages/payment";
import DeliveryInformation from "../components/pages/delivery-information";
import Profile from "../components/pages/profile";
import History from "../components/pages/history";
import Favorites from "../components/pages/favorites";
import {ExpiredToken} from "../components/tools/auth-user";

const Protected = (user, reToken) => {
    const refreshToken = useRefreshToken(user.token, reToken)

    return (
        <Route element={useAuth(user)}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/delivery-information' element={<DeliveryInformation/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            {/* refresh auth token */}
            {refreshToken}
        </Route>
    )
}

const useAuth = ({auth}) => {
    return (auth) ? <Outlet/> : <Navigate to='/login' replace/>
}

const useRefreshToken = (token, reToken) => {
    const expiredToken = ExpiredToken(token)
    return (expiredToken) && reToken()
}

export default Protected