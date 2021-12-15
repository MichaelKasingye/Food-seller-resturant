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
        <section className='chefs'>

<div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="false"
            >
              Lunch
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              chicken
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Fries
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ProductCards data={stock.lunch}/>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            ...p
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...c
          </div>
        </div>
        </div>
      </section>
      
      
    )
}

export default Menu
