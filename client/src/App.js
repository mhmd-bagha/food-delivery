import {Routes} from "react-router-dom";
import './styles/index.css'
import {connect} from "react-redux";
import Protected from "./routes/protected";
import Public from "./routes/public";

function App({user, refreshTokenAuth}) {
    return (
        <>
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