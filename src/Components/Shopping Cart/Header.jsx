import Content from "./Content.jsx"
import "./Header.css"
import Card from "./Card.jsx"
import data from "./data.json"
import { useState } from "react"

const Header = () => {
    const myfunc = () => {
        document.getElementById("drop").classList.toggle("show");
    }

    const [cart, setCart] = useState([]);

    const handleAddCart = (obj) => {
        const tmp = [...cart, obj];
        setCart(tmp);
    };

    const handleRemoveCart = (id) => {
        const tmp = cart.filter((obj) => obj.id != id);
        setCart(tmp);
    }

    return (
        <>
            {console.log(cart)}
            <div className="row rw">
                <div className="col-5 col">
                    <a href="" className="boot">Start Bootstrap</a>
                    <a href="" className="home">Home</a>
                    <a href="" className="ab">About</a>
                    <div className="dropdown">
                        <button onClick={myfunc} className="button">Shop<i className="fa fa-caret-down down" aria-hidden="true"></i></button>
                        <div className="dropcontent" id="drop">
                            <a href="">All products</a>
                            <a href="">Popular Items</a>
                            <a href="">New Arrivals</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 cartbutton">
                    <button className="crt"><i className="fa fa-shopping-cart shpngcrt" aria-hidden="true"></i>Cart<div className="circle"><span style={{ color: "white", }}>{cart.length}</span></div></button>
                </div>
            </div>
            <Content />
            <div className="row rw-card">
                {data.map((obj) => (
                    <Card key={obj.id}
                        id={obj.id}
                        image={obj.image}
                        item={obj.item}
                        isRange={obj.isRange}
                        isStrikedout={obj.isStrikedout}
                        isStar={obj.isStar}
                        price={obj.price}
                        button={obj.button}
                        isSale={obj.isSale}
                        addCart={handleAddCart}
                        removeCart={handleRemoveCart}
                        isAdded={Boolean(cart.find((add) => add.id == obj.id))}
                    />
                ))
                }
            </div>
        </>
    );
};

export default Header;