import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Body.css'









const Body = () => {

  const[data,setData] = useState([])

  useEffect(()=> {
    axios.get('/productData.json').then((res)=> {
      console.log(res.data)
      setData(res.data)
    })
  },[])

  return (
    <div id='table' style={{width:window.innerWidth}}>
      <Table >
    <thead>
      
      


      <tr>

        <th>Product Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
     {data.map((ele)=> {
      return(
        <tr>
          <td>
            <div><img src= {require('../avacado.jpg')} style={{width:"10%",float:'left'}}></img>
            </div>{ele.name}</td>
          <td>{ele.brand}</td>
          <td>${ele.price}</td>
          <td>{ele.quantity}</td>
          <td>${Math.round(((ele.quantity)*(ele.price)))}</td>
          <td>{ele.status}</td>
          <div>
          <td><Button style={{backgroundColor:"white",border:"none",color:"black"}}>X
</Button></td>
<td><Button style={{backgroundColor:"white",border:"none",color:"black"}}>Edit
</Button></td>
</div>
          
        </tr>
      )
     })}
    </tbody>
  </Table></div>
  )
}

export default Body
