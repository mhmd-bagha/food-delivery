import {Routes} from "react-router-dom";
import './styles/index.css'
import {useSelector} from "react-redux";
import Protected from "./routes/protected";
import Public from "./routes/public";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    const user = useSelector(state => state.user)

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

export default App