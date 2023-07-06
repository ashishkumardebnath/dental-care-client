import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }
    
    const handleLogin = (data) => {
        setLoginError('')
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h1 className="text-xl text-center">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 character or longer" }
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-700">{errors.password?.message}</p>}
                    </div>
                    <input className="btn btn-accent w-full mt-5" type="submit" value="Login" />
                    <div>
                        {loginError && <p className="text-red-700">{loginError}</p>}
                    </div>
                </form>
                <p className="text-center"><small >New to Doctors Portal? <Link className="text-secondary font-semibold" to='/signup'>Create a account.</Link></small></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;