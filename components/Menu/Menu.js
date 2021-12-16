import React from 'react'
import { stock } from '../../utils/itemsStock'
import ProductCards from '../ProductCards/ProductCards'
// console.log(stock.lunch);
function Menu() {

    const menuTabs = [
        {
            id:"pills-home-tab",
            target:"#pills-home",
            controls:"pills-home",
            selected:"false",
            content:"home"
        },
        {
            id:"pills-home-tab",
            target:"#pills-home",
            controls:"pills-home",
            selected:"false",
            content:"home"
        },
        {
            id:"pills-home-tab",
            target:"#pills-home",
            controls:"pills-home",
            selected:"false",
            content:"home"
        },

    ]
    return (
        <section className='food-container'>

<div className="container ">
        <ul className="nav nav-pills mb-3  d-flex justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item " role="presentation">
            <button
            style={{background:"none"}}
              className="nav-link active text-danger fw-bold "
              id="pills-Snacks-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Snacks"
              type="button"
              role="tab"
              aria-controls="pills-Snacks"
              aria-selected="false"
            >
             <span className='adjustButton'>Snacks</span> 
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
             style={{background:"none"}}
             className="nav-link  text-danger fw-bold"
              id="pills-supper-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-supper"
              type="button"
              role="tab"
              aria-controls="pills-supper"
              aria-selected="false"
            >
              <span className='adjustButton'>Supper</span> 
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              style={{background:"none"}}
              className="nav-link  text-danger fw-bold"
              id="pills-Lunch-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Lunch"
              type="button"
              role="tab"
              aria-controls="pills-Lunch"
              aria-selected="false"
            >
              <span className='adjustButton'>Lunch</span> 
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-Snacks"
            role="tabpanel"
            aria-labelledby="pills-Snacks-tab"
          >
            <ProductCards title="Snacks" data={stock.snacks}/>
          </div>
          <div
            className="tab-pane fade"
            id="pills-supper"
            role="tabpanel"
            aria-labelledby="pills-supper-tab"
          >
           <ProductCards title="supper" data={stock.supper}/>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Lunch"
            role="tabpanel"
            aria-labelledby="pills-Lunch-tab"
          >
            <ProductCards  title="Lunch"  data={stock.lunch}/>
          </div>
        </div>  
        </div>
      </section>
      
      
    )
}

export default Menu
