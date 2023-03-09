import {Routes} from "react-router-dom";
import './styles/index.css'
import {connect} from "react-redux";
import Protected from "./routes/protected";
import Public from "./routes/public";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App({user}) {
    return (
        <>
            {/* import toast container */}
            <ToastContainer/>
            <Routes>
                {Public(user)}
                {Protected(user)}
            </Routes>
        </>
    );
}

const mapToStateProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapToStateProps, null)(App)