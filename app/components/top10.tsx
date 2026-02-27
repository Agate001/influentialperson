import { Button, Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'


interface Values{
 title: string;
 description: string;
 Img: string;
 Alt: string;
 link: string;
}

const Top10card = ({title, description, Img, Alt, link}: Values) => {
  return (

    <div className="mb-60 sm:mb-0 flex flex-col items-center bg-white border border-gray-200 min-h-50 max-h-50 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover min-h-50 max-h-50 rounded-t-lg  md:w-48 md:rounded-none md:rounded-s-lg" src={Img} alt={Alt}/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
    <Button href={link}>
        Learn
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
</div>


  )
}

export default Top10card