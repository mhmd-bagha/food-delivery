import {Routes} from "react-router-dom";
import './styles/index.css'
import {connect} from "react-redux";
import Protected from "./routes/protected";
import {Fragment} from "react";
import Public from "./routes/public";

function App({user}) {

    return (
        <Fragment>
            <Routes>
                {Public(user)}
                {Protected(user)}
            </Routes>
        </Fragment>
    );
}

const mapToStateProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapToStateProps, null)(App)