import React, { useState } from 'react';
import HeaderBg from '../asset/header-bg.png';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput } from '../store/fitlerSlice';

function Header() {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.filter.searchInput);

  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(e.target.value));
  };

  const handleClearOnClick = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(''));
  };

  return (
    <header
      className="flex flex-col justify-center items-center gap-4 text-white bg-center bg-repeat bg-cover min-h-[368px]"
      style={{
        backgroundImage: `url(${HeaderBg})`,
        backgroundColor: 'linear-gradient(#fbc300,#c98a00)',
      }}
    >
      <a
        href="https://www.algolia.com/"
        className="font-semibold text-2xl mb-10"
      >
        algolia
      </a>
      <h1 className="text-5xl font-light">
        Stop looking for an item - find it
      </h1>
      <form className="flex flex-row mt-3 min-w-[740px] min-h-[64px] rounded-lg bg-white text-sm">
        <button className="text-orange-400 pl-3 pr-2 text-xl">
          <BiSearch />
        </button>
        <input
          type="text"
          className="px-4 outline-none text-black grow"
          value={searchInput}
          onChange={(e) => handleOnChange(e)}
          placeholder="Product, brand, color,..."
          autoComplete="off"
        />
        <button
          className="text-black pr-3 pl-2"
          onClick={(e) => handleClearOnClick(e)}
        >
          {searchInput ? <RxCross1 /> : ''}
        </button>
      </form>
    </header>
  );
}

export default Header;
