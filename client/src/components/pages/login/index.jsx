import Header from "./header";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "./styles.scss";
import "../../../styles/forms.scss";
import SignupView from "./signup-view";
import LoginView from "./login-view";
import {connect} from "react-redux";
import {loginAuth, signupAuth} from "../../../api/auth";

const Login = ({login, signup, user}) => {
    return (
        <>
            {/* background full */}
            <section className="bg_dark min-h-full">
                {/* start page */}
                <div className="bg_mirage px-12 py-8 rounded-b-main">
                    {/* header */}
                    <Header/>
                </div>
                {/* tabs login or sign up */}
                <Tabs className="tabs_login">
                    {/* list login and sign up */}
                    <TabList className="flex justify-evenly text-lg font-medium relative -top-12 pt-1">
                        <Tab className="tab">Login</Tab>
                        <Tab className="tab">Sign up</Tab>
                    </TabList>
                    {/* contents login and sign up */}
                    <div className="px-12 relative -top-3">
                        {/* login */}
                        <TabPanel>
                            <LoginView login={login}/>
                        </TabPanel>
                        {/* sign up */}
                        <TabPanel>
                            <SignupView signup={signup} user={user}/>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => loginAuth(data, dispatch),
        signup: (data) => signupAuth(data, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)