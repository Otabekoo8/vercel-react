import React from 'react'
import "./Product.css"
import item1 from "../img/portfolio/1.png"
import item2 from "../img/portfolio/2.png"
import item3 from "../img/portfolio/3.png"



const Product = () => {
  return (
    <div className='Products'>    
        <div className="container">
           <div className="product-inn">
                <div className="product-item1">
                    <img src={item1} alt="" />
                    <h4>-01-</h4>
                    <h3>Mirror Maze</h3>
                    <p>residential complex with mirror walls</p>
                </div>
                <div className="product-item1">
                    <img src={item2} alt="" />
                    <h4>-01-</h4>
                    <h3>Mirror Maze</h3>
                    <p>residential complex with mirror walls</p>
                </div>
                <div className="product-item1">
                    <img src={item3} alt="" />
                    <h4>-01-</h4>
                    <h3>Mirror Maze</h3>
                    <p>residential complex with mirror walls</p>
                </div>
           </div>
           <div className="buton">
                <button className="one1">--</button>
                <button className="one2">++</button>
           </div>
        </div>
    </div>
  )
}

export default Product