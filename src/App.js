import React from 'react';
import '../src/index.css'
import data from './data'




function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="">amazona</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/singin">Sing In</a>
        </div>

    </header>
    <main>
        <div className="row center">
          {
            data.products.map(products=>(

              <div key={products._id} className="card">
                  <a href={`/product/${products._id}`}>
                      <img  className="medium" src={`${products.image}`} alt=""/>
                  </a>
  
                  <div className="card-body">
                  <a href={`/product/${products._id}`}>
                          <h2>{products.name}</h2>
                      </a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span> <i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
  
                      </div>
                  <div className="price">${products.price}</div>
                  </div>
              </div>

  ))  
          }
        </div>
    </main>

    <footer className="row center">
        All rin
    </footer>
</div>
  );
}

export default App;
