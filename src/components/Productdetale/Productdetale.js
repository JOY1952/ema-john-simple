import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Heder-component/Shop/Product/Product';

const Productdetale = () => {
             const {productKey} = useParams()
              const product = fakeData.find(pd => pd.key === productKey);
              console.log(product);  
               return (
                              <div>
                                      <h1>{productKey}Product Detail coming soon</h1> 
                                      <Product showAddToCart={false} product={product}></Product>      
                              </div>
               );
};

export default Productdetale;