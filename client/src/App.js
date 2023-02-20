import {Routes} from "react-router-dom";
import './styles/index.css'
import {connect} from "react-redux";
import Protected from "./routes/protected";
import {Fragment} from "react";
import Public from "./routes/public";
import {refreshTokenAuth} from "./api/auth";

function App({user, refreshToken}) {

    return (
        <Fragment>
            <Routes>
                {Public(user)}
                {Protected(user, refreshToken)}
            </Routes>
        </Fragment>
    );
}

const mapToStateProps = (state) => {
    return {
        user: state.user
    }
}

const mapToDispatchProps = (state) => {
    return {
        refreshToken: () => refreshTokenAuth()
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(App)