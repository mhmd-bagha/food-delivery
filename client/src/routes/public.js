import {Navigate, Route} from "react-router-dom";
import Index from "../components/pages/main";
import Food from "../components/pages/food";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/forgot-password";
import ChangePassword from "../components/pages/change-password";

const Public = (user) => {
    return (
        <>
            <Route path='/' element={<Index/>} index/>
            <Route path='category/:categoryName/:categoryId' element={<Index/>}/>
            <Route path='/food/:id' element={<Food/>}/>
            <Route path='/login' element={useAuth(user)}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
        </>
    )
}

const useAuth = ({auth}) => {
    return (!auth) ? <Login/> : <Navigate to='/' replace/>
}

export default Public