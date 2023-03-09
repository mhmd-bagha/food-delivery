import {Link} from "react-router-dom";
import {object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useRef, useState} from "react";

const LoginView = ({login, user}) => {
    const loginBtn = useRef(null)
    const [loginStatus, setLoginStatus] = useState(false) // change value login button

    const validator = object({
        email: string().trim().email().required(),
        password: string().min(6).required(),
    })
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validator)})
    const loginHandle = (data) => {
        loginDisabled()

        login(data).then(() => {
            loginBtn.current.disabled = false
            setLoginStatus(false)
        })

    }

    const loginDisabled = () => {
        loginBtn.current.disabled = true
        setLoginStatus(true)
    }

    return (
        <form action="/" method="post" onSubmit={handleSubmit(loginHandle)}>
            {/* email */}
            <div className="form_group">
                <input type="email" id="email_login" className="form_input" placeholder=""
                       required {...register('email')}/>
                <label htmlFor="email_login" className="form_label">Email Address</label>
                <p className="text-xs error_text">{errors.email?.message}</p>
            </div>
            {/* password */}
            <div className="form_group">
                <input type="password" id="password_login" className="form_input"
                       placeholder=""
                       required {...register('password')}/>
                <label htmlFor="password_login" className="form_label">Password</label>
                <p className="text-xs error_text">{errors.password?.message}</p>
            </div>
            {/* forgot password */}
            <div className="flex justify-center">
                <Link to="/forgot-password" className="color-auro_metal_saurus text-sm my-2">Forgot password</Link>
            </div>
            {/* submit button */}
            <button type="submit"
                    className="bg_red_coral text-white text-lg font-bold w-full py-3.5 mt-16 rounded-2xl"
                    ref={loginBtn}>{loginStatus ? 'Logging...' : 'Login'}
            </button>
        </form>
    )
}

export default LoginView