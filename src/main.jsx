//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Header from "./Components/Shopping Cart/Header.jsx"
//import Content from "./Components/Shopping Cart/Content.jsx"
//import Card from "./Components/Shopping Cart/Card.jsx"
//import data from "./Components/Shopping Cart/data.json"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div>
    <div className="container-lg">
      <Header />
      {/* <Content />
      <div className="row rw-card">
        {data.map((obj) => (
          <Card key={obj.id}
            image={obj.image}
            item={obj.item}
            isRange={obj.isRange}
            isStrikedout={obj.isStrikedout}
            isStar={obj.isStar}
            price={obj.price}
            button={obj.button}
            isSale={obj.isSale}
          />
        ))
        }
      </div> */}
    </div>
  </div>
)
