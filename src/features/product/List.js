import React from 'react';
import { useGetProductQuery } from '../../store/productService';
import Detail from './Detail';
import { Spin } from 'antd';

function List({ list }) {
  const { data, isFetching } = useGetProductQuery();

  return (
    <div className="grid grid-cols-4 gap-10 w-full">
      {isFetching ? (
        <Spin />
      ) : (
        data
          .slice(0, 16)
          .map((item, index) => <Detail product={item} key={index} />)
      )}
    </div>
  );
}

export default List;
