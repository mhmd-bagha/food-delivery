import {Link} from "react-router-dom";
import {TabPanel} from "react-tabs";

const LoginView = () => {
    return (
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
    )
}

export default LoginView