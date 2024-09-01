import React from 'react'
import Navbar from '../shared/Navbar'
import { Link } from 'react-router-dom'

//login
//view and manage students
//vew and manage companies
//schedule class

function AdminDashboard() {
  return (
    <div>
  <Navbar/>

    <button className='AdminDashButtons'><Link to={'/admin/viewstudents'}>View Students</Link> </button>


    </div>
  )
}

export default AdminDashboard

