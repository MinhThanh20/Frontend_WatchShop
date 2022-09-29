import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../Assest/img/dhnam1.jpg"
import './Detail_Product.scss'
function Detail_Product() {
    const [count, setCount] = useState(1);
    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={image} alt="ĐỒNG HỒ NAM" height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold"></h1>
                        <hr />
                        <h2 className="my-4">18,540,000</h2>
                        <p className="lead">Floating like a balloon and as blue as the cabochon safely nestled in its side, the Ballon Bleu watch by Cartier adds a dash of elegance to male and female wrists alike. Roman numerals are guided on their path by a deep blue winding mechanism. With the convex curves of the case, guilloché dial, sword-shaped hands, and polished or satin-finish links of the bracelet…the Ballon Bleu watch by Cartier floats through the world of Cartier watchmaking.</p>
                        <div className="buttons_added">
                            <input onClick={() => { setCount(Math.max(count - 1, 1)) }}
                                className="minus is-form" type="button" value="-" />
                            <input aria-label="quantity" className="input-qty" value={count} />
                            <input onClick={() => { setCount(count + 1) }}
                                className="plus is-form" type="button" value="+" />
                            <Link to ="/cart">

                                <button className="btn btn-outline-primary" style={{ marginLeft: '20px', background: 'orange', color: "white" }}>THÊM VÀO GIỎ</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Detail_Product