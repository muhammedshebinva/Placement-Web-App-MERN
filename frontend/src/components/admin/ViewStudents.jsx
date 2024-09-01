import React from 'react'
import Navbar from '../shared/Navbar'



function ViewStudents() {

    const userData = [
    {
        name:"shebin", 
        email:"shebin@gmail.com"
    } ,
    {name:"shebin", email:"shebin@gmail.com"} ,
    {name:"shebin", email:"shebin@gmail.com"} ,
    {name:"shebin", email:"shebin@gmail.com"} 
]
        
    
  return (
    <>
    <Navbar/>
    <div>ViewStudents</div>

    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    
      {userData.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}

    </tbody>
  </table> 


    </>
  )
}

export default ViewStudents