import {Routes} from "react-router-dom";
import './styles/index.css'
import {connect} from "react-redux";
import Protected from "./routes/protected";
import Public from "./routes/public";
import {refreshTokenAuth} from "./api/auth";
import {useRefreshToken} from "./components/tools/auth-user";
import {useEffect} from "react";

function App({user, refreshTokenAuth}) {
    const reToken = useRefreshToken(user, refreshTokenAuth)

    useEffect(() => {
        return reToken
    }, [reToken])

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

const mapToDispatchProps = (dispatch) => {
    return {
        refreshTokenAuth: () => refreshTokenAuth(dispatch)
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(App)