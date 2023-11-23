'use client'


import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


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
    const [model, setModel] = useState('')
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(Manufacturer === '' && model === '') {
        return alert('Please fill in the search bar')
      }
      
      updateSearchParams(model.toLowerCase()  , Manufacturer.toLowerCase() )
    }

    const updateSearchParams = (model:string, Manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model){
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }
      if(Manufacturer){
        searchParams.set('Manufacturer', Manufacturer)
      } else{
        searchParams.delete('Manufacturer')
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathName)

    }



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
            value={model}
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
