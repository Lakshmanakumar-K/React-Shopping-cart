import "./Card.css"
import PropTypes from "prop-types"

const Card = ({ id, image, item, isRange, isStrikedout, isStar, price, button, isSale, addCart, removeCart, isAdded = false }) => {
    return (

        <div className="col-lg-2 col-card">
            <div className="cd">
                <img src={image} className="card-img-top" alt="..." />
                <h5 className="card-title item">{item}</h5>
                {isStar ? (<p className="star"><span><i className="fa fa-star checked" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star checked" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star checked" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star checked" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star checked" aria-hidden="true"></i></span>
                </p>
                ) : (<></>)}
                {isRange ? (<p className="range">${price[0]}-${price[1]}</p>) : (<></>)}
                {isStrikedout ? (<p className="num"><span><s className="strike">${price[0]}</s></span><span>${price[1]}</span></p>) : (<>{isRange ? (<></>) : (<p className="num">${price[0]}</p>)}</>)}
                <div className="bton">
                    {isRange ? (<button className="btn btn-primary" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>{button}</button>) : (<>{isAdded ? (<button onClick={() => removeCart(id)} className="btn btn-primary" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>Remove from cart</button>) : (<button onClick={() => addCart({ id, image, item, isRange, isStrikedout, isStar, price, button, isSale, addCart })} className="btn btn-primary" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>{button}</button>)}</>)}
                </div>
                {isSale ? (<p className="sale">Sale</p>) : (<></>)}
            </div>
        </div >
    );
};

Card.propTypes = {
    key: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    item: PropTypes.string,
    isRange: PropTypes.bool,
    isStrikedout: PropTypes.bool,
    isStar: PropTypes.bool,
    price: PropTypes.array,
    button: PropTypes.string,
    isSale: PropTypes.bool,
    addCart: PropTypes.func,
    removeCart: PropTypes.func,
    isAdded: PropTypes.bool
}

export default Card