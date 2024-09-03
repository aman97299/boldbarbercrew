import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_BASE_URL } from '../../utils/constants';
import MainScreen from '../../screens/homeScreen/Home v1';
import MainHeader from '../UI/Header/mainHeader';
function useQuery(){
  const {search} = useLocation();
  return React.useMemo(()=>new URLSearchParams(search),[search]);
}
function AddToCart() {
  const [data, setData] = useState([])

    const nav = useNavigate();
    const queryParams = useQuery();

    useEffect(() => {
        if (localStorage.getItem("id") == null) {
          alert("pl login to buy products!!!");
          nav('/login');
        }
        console.log("success");
      });
      useEffect(() => {
        // console.log(APP_BASE_URL + `getproductid/"queryParams.get("id")`);
      if(queryParams.get("id") == null)  getCartItems()
        else addToCart()
    }, [])

   
    const addToCart = async () => {
      const url = APP_BASE_URL + 'carditem/'
      const productId = queryParams.get("id");
       const userId=localStorage.getItem("id");
      axios.post(url, { productId,userId}).then((response) => {
          if (response) {
              getCartItems()
          }
      }).catch((err) => {
          alert(err)
      })
  }
  const getCartItems = async () => {
    const url = APP_BASE_URL + 'carditem/get'
    const response = await axios.get(url)
    if (response) {
        setData(response?.data)
    }
}

  return (
    <div>
      <MainHeader />
     <table class="table table-bordered">
      <tr>
        <th>PROUDUCT NAME</th>
        <th>QRY</th>
        <th>PRICE</th>
        <th>TOTALPRICE</th>
      </tr>
      {data?.map((i) => {
          return (
            <tr key={i?.name} style={{ margin: 10 }}>
              <td>{i?.product.name}</td>
              <td>{i?.quantity}</td>
              <td>{i?.price}</td>
              <td>{i?.Totalprice}</td>
              
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default AddToCart