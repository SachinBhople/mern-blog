import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBlogDetailQuery } from '../redux/api/blogApi'

const Detaills = () => {
    const { blogId } = useParams()
    const { data } = useGetBlogDetailQuery(blogId)
    return <>
        {data
            ? <div className="container my-3">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <Link className='btn btn-light my-2' to="/"> Back</Link>
                        <img className='img-fluid' src={data.hero} alt={data.title} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        {data.desc}
                    </div>
                </div>
            </div>

            : <div className="text-center">
                <h1>It looks like you've lost</h1>
                <Link to="/"> Go hOme</Link>
            </div>
        }
    </>

}

export default Detaills