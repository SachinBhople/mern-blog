import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from 'yup'
import { useLoginMutation } from '../redux/api/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {


    const [loginUser, { isSuccess, isError, isLoading, error }] = useLoginMutation()



    const formik = useFormik({
        initialValues: {
            email: "sachin@gmail.com",
            password: "123",
        },
        validationSchema: yup.object({
            password: yup.string().required("Enter email "),
            email: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            // alert("ok")
            loginUser(values)
            resetForm()
        }
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isError) {
            toast.error(JSON.stringify(error))
        }
        if (isSuccess) {
            navigate("/user")
            toast.success("Login Success")
        }
    }, [isError, isSuccess])

    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input {...formik.getFieldProps("email")}
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input {...formik.getFieldProps("password")}
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login