import React from 'react';
import '../src/index.css'
import data from './data'
import Product from './component/Protuct';
console.log(data.products);




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
            data.products.map(product=>(
              <Product key={product._id} product={product} ></Product>




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
