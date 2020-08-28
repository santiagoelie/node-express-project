import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [email,setemail] = useState('')
    const [pass,setpass] = useState('')

    function Register(e) {
        let data = {
            email:email,
            password:pass
        }

        axios.post('/register',data)
        .then(resp=>{
            if(resp)
                alert('Successfully registered, now login')
            else
                alert('Something went wrong, check details')
        })
        .catch(err=>console.log(err)
        )
    }

    return (
        <div className='container'>
        <h2 className='m-5 text-center'>Register into MERN Project</h2>
            <form onSubmit={(e)=>Register(e)} className='col-md-5 mx-auto'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} className="form-control" onChange={(e)=>{setemail(e.target.value)}}  placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={pass} className="form-control" onChange={(e)=>{setpass(e.target.value)}} placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Submit</button>
            </form>
            <Link to='/' style={{textDecoration:'none', color:'#000'}} className='text-center mt-5'><h5> 👉Already a member? Login Here 👈</h5></Link>
        </div>
    )
}

export default Register
