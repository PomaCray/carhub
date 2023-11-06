'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import Image from 'next/image';


const SearchButton = ({ otherClasses }: {otherClasses:string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
) 

export default function SearchBar() {
    const [Manufacturer, setManufacturer] = useState('')
    const [Model, setModel] = useState('')

    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                Manufacturer={Manufacturer}
                setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image
            src='/model-icon.png'
            alt='car model'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input
            type='text'
            name='model'
            value={Model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan'
            className='searchbar__input'
          />
          <SearchButton otherClasses='sm:hidden'/>
        </div>
          <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}
