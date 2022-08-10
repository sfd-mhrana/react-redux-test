import React, { Component } from 'react';

function Home (props){
        return (
            <div>
                <p>Home Component</p>
                <div>
                    <div className="add-to-cart">
                    <span className="cart-count">{props.data.length}</span>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://i.pinimg.com/originals/5a/29/1b/5a291b64de40780d96cdebf2dba4b2bb.jpg" />
                    </div>
                    <div className="text-wrapper item">
                        <span>
                            I Love You
                        </span><br />
                        <span>
                            Price : 'My Life'
                        </span>
                    </div>
                    <div className="btn-wrapper item">
                        <button 
                        onClick={
                            ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}
                           >Add to Cart</button>
                           <button className="removebtncartbtn"
                        onClick={
                            ()=>{props.removeToCartHandler()}}
                           >Remove to Cart</button>
                    </div>
                </div>
            </div>
        );
}

export default Home;