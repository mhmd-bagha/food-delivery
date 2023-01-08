import Header from "./header";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "./styles.scss";
import "../../../styles/forms.scss";
import {Link} from "react-router-dom";

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
                        <TabPanel>
                            <form action="/" method="post">
                                {/* email */}
                                <div className="form_group">
                                    <input type="email" name="email_login" id="email_login" className="form_input" placeholder=""
                                           required/>
                                    <label htmlFor="email_login" className="form_label">Email Address</label>
                                </div>
                                {/* password */}
                                <div className="form_group">
                                    <input type="password" name="password_login" id="password_login" className="form_input"
                                           placeholder=""
                                           required/>
                                    <label htmlFor="password_login" className="form_label">Password</label>
                                </div>
                                {/* forgot password */}
                                <div className="flex justify-center">
                                    <Link to="/forgot-password" className="color-auro_metal_saurus text-sm my-2">Forgot password</Link>
                                </div>
                                {/* submit button */}
                                <button type="submit"
                                        className="bg_red_coral text-white text-lg font-bold w-full py-3.5 mt-16 rounded-2xl">Login
                                </button>
                            </form>
                        </TabPanel>
                        {/* sign up */}
                        <TabPanel>
                            <form action="/" method="post">
                                {/* full name */}
                                <div className="form_group">
                                    <input type="text" name="full_name" id="full_name" className="form_input"
                                           placeholder=""
                                           required/>
                                    <label htmlFor="full_name" className="form_label">Full Name</label>
                                </div>
                                {/* email */}
                                <div className="form_group">
                                    <input type="email" name="email" id="email" className="form_input" placeholder=""
                                           required/>
                                    <label htmlFor="email" className="form_label">Email Address</label>
                                </div>
                                {/* password */}
                                <div className="form_group">
                                    <input type="password" name="password" id="password" className="form_input"
                                           placeholder=""
                                           required/>
                                    <label htmlFor="password" className="form_label">Password</label>
                                </div>
                                {/* submit button */}
                                <button type="submit"
                                        className="bg_red_coral text-white text-lg font-bold w-full py-3.5 mt-10 rounded-2xl">Sign
                                    up
                                </button>
                            </form>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </>
    )
}
export default Login