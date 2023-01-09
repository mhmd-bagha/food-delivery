import "../main/styles-main.scss";
import "../../../styles/forms.scss";
import Header from "../login/header";

const ForgotPassword = () => {
    return (
        <>
            {/* image header */}
            <div className="bg_mirage h-1/2">
                {/* header */}
                <Header/>
            </div>
            {/* content */}
            <div className="bg_dark px-8 py-16 rounded-t-main fixed bottom-0 w-full h-3/5 z-10">
                <p className="text-gray-200 text-xl font-medium">Forgot Password</p>
                {/* form forgot password */}
                <form action="/" method="post">
                    {/* email */}
                    <div className="form_group mt-8">
                        <input type="email" name="email" id="email" className="form_input" required/>
                        <label htmlFor="email" className="form_label">Email Address</label>
                    </div>
                    {/* button submit */}
                    <button type="submit" className="bg_red_coral text-white text-lg font-bold w-full py-3.5 mt-5 rounded-2xl">Send</button>
                </form>
            </div>
            {/* bg class */}
            <div className="bg_content_glass"></div>
        </>
    )
}
export default ForgotPassword