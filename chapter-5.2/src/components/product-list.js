import { useState} from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { name: 'React - The Complete Guide [Course]', price: '19.99' },
    { name: 'Stylish Chair', price: '329.49' },
    { name: 'Ergonomic Chair', price: '269.99' },
    { name: 'History Video Game Collection', price: '99.99' },
  ]);

  const addProduct = () => {
    setProducts(currentProducts => currentProducts.concat({
      name: 'Another new product', price: '15.99'
    }))
  }

  return (
    <>
      <button style={{margin: '20px 0 0 45px'}} onClick={addProduct}>Add Product</button>
      <ul style={{listStyle: 'none'}}>
      {
        products.map((product, index) => {
          return <li key={index} style={{background: '#eee', padding: '5px', margin: '5px', borderBottom: '1px solid #bbb'}}>
            {product.name} (${product.price})
          </li>
        })
      }
      </ul>
    </>
  );
}

export default ProductList;
