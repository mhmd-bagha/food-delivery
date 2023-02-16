import Header from "./header";
import {Tab, TabList, Tabs} from "react-tabs";
import "./styles.scss";
import "../../../styles/forms.scss";
import SignupView from "./signup-view";
import LoginView from "./login-view";

const Login = () => {
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
                    <div className="px-12">
                        {/* login */}
                        {LoginView()}
                        {/* sign up */}
                        {SignupView()}
                    </div>
                </Tabs>
            </section>
        </>
    )
}
export default Login