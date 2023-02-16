import {TabPanel} from "react-tabs";

const SignupView = () => {
    return (
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
    )
}
export default SignupView