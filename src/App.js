import React, { useState } from 'react';
import Layout from './components/Layout';
import List from './features/product/List';
import { Pagination, Spin } from 'antd';
import { useGetProductQuery } from './store/productService';
import { useSelector } from 'react-redux';

function App() {
  const { data, isFetching } = useGetProductQuery();
  const { page, setPage } = useState(1);
  const searchString = useSelector((state) => state.filter.searchInput);

  return (
    <Layout>
      {isFetching ? (
        <Spin />
      ) : (
        <>
          <List
            list={data
              .filter((item) =>
                item.name.toLowerCase().includes(searchString.toLowerCase())
              )
              .slice(page * 16, (page + 1) * 16)}
          />
          <Pagination
            current={page}
            onChange={(page) => setPage(page)}
            pageSize={data.length / 16}
          />
        </>
      )}
    </Layout>
  );
}

export default App;
