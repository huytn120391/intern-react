import { Divider, Menu, Spin } from 'antd';
import React, { useState } from 'react';
import { useGetCategoryQuery } from '../store/categoryService';
import MenuItem from 'antd/es/menu/MenuItem';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function Sidebar() {
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    setOpenKeys([keys[1] ?? keys[0]]);
  };

  const { data, isFetching } = useGetCategoryQuery();

  const handleClearFilter = (e) => {
    e.preventDefault();
  };

  const items = isFetching
    ? []
    : data.map((item, index) =>
        getItem(
          item.name,
          `sub${index}`,
          <></>,
          item.child.map((child, idx) => getItem(child, `sub${index}-${idx}`))
        )
      );

  return (
    <nav className="text-black w-1/5">
      <div className="flex flex-row justify-between items-center h-[40px]">
        <h2 className="text-2xl font-semibold">Filter</h2>
        <button
          onClick={(e) => handleClearFilter(e)}
          className="text-xs text-gray-500"
        >
          Clear filter
        </button>
      </div>
      <Divider />
      <div className="uppercase text-xs font-semibold pb-4">Category</div>
      {isFetching ? (
        <li className="pb-4 flex justify-center items-center">
          <Spin />
        </li>
      ) : (
        <Menu
          mode="inline"
          items={items}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />
      )}
      <Divider />
      <div className="uppercase text-xs font-semibold pb-4">Brands</div>
    </nav>
  );
}

export default Sidebar;
