import React, { useContext } from 'react'
import { userContext } from '../LandingPage/LandingPage'
import "./Table.scss"

export default function Table() {

    const {data,startIndex,endIndex} = useContext(userContext)

  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>User Age</th>
                    <th>User Gender</th>
                    <th>User Email</th>
                </tr>
            </thead>
            <tbody>
                {data.slice(startIndex,endIndex).map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
