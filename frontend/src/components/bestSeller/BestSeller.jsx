import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../title/Title';
import ProductItem from '../productItem/ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    },[products])

  return (
    <div className='my-5'>
        <div className='text-center text-3xl py-5'>
            <Title text1={'Best'} text2={'Seller'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Best selling right now</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>

    </div>
    
    
  )
}

export default BestSeller