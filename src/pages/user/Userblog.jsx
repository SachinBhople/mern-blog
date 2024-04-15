import React from 'react'
import * as yup from "yup"
import { useFormik } from "formik"
import { useAddBlogMutation } from '../../redux/api/userApi'
const Userblog = () => {
    const [addBlog] = useAddBlogMutation()
    const formik = useFormik({
        initialValues: {
            hero: "",
            title: "",
            // desc: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter Name"),
            desc: yup.string().required("Enter Name"),
            // hero: yup.string().required("Enter Name"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("title", formik.values.title)
            fd.append("desc", formik.values.desc)
            fd.append("hero", formik.values.hero)
            resetForm()
            alert("ok")
            addBlog(fd)
            console.log(values);

        }
    })
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Add Blog</div>
                        <div class="card-body">
                            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
                            <form onSubmit={formik.handleSubmit}>
                                <input className='my-2' {...formik.getFieldProps("title")} type="text" />
                                <input className='my-2' {...formik.getFieldProps("desc")} type="text" />
                                <input className='my-2' onChange={e => formik.setFieldValue("hero", e.target.files[0])} type="file" />
                                <button type="submit" class="btn btn-primary">add blog</button>
                            </form>
                        </div>
                        <div class="card-footer">footer</div>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default Userblog