import React from 'react';
import { RxStarFilled } from 'react-icons/rx';

function Detail({ product }) {
  return (
    <div>
      <div className="flex justify-center items-center m-auto w-[174px] h-[174px] mb-2">
        <img src={product.image} className="max-w-full max-h-full" />
      </div>
      <p className="uppercase text-gray-400 text-xs font-semibold">
        {product.categories[0]}
      </p>
      <h2 className="text-black font-bold text-sm mb-2">{product.name}</h2>
      <p className="text-sm line-clamp-3 mb-3">{product.description}</p>
      <div>
        <span className="text-orange-400">$</span>
        <span className="px-3 font-bold">{product.price}</span>
        <span className="inline-flex flex-row items-center gap-1 font-bold w-fit border border-orange-400 rounded-md px-2 text-sm text-orange-400">
          <RxStarFilled className="inline-block" />
          {product.rating}
        </span>
      </div>
    </div>
  );
}

export default Detail;
