import React, { useState, useEffect } from 'react'
// import { useLocation } from "react-router"
import { useNavigate } from "react-router-dom";

const CollectionItem = (props) => {
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  var state  = props.data
  useEffect(() => {
    var IDdata = state.filter((value, index, self) => self.indexOf(value) === index)
    setdata(IDdata)
  }, [])

  const goforBackClick = () => {
    navigate('/');
  }

  return (
    <>
      <h1>Your Products</h1>
      <div className='manubar'>
        <button className='login-button' onClick={goforBackClick}>Go Back</button>
        <br /><br />

      </div>
      <div className="product-list">

        {data.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-image" src={product.images[0]} alt={product.name} />
            <div className="product-details">
              <h2 className="product-name">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">price :- {product.price}$</p>
              <p className="product-price">Rating :- {product.rating}</p>
              {/* <button style={{ color: "white" }} onClick={() => addCartID(product)}>Add To Card</button> */}
            </div>
          </div>
        ))}

      </div>

    </>

  )

}

export default CollectionItem;
