import React from 'react'

const categories = ["All", "Electronics", "Clothing", "Books", "Home Appliances", "Sports", "Toys"];

const CategoryList: React.FC = () => {

  return (
    <div className='flex justify-around items-center bg-yellow-500 rounded-b-md'>
      {categories.map((category, index)=>(
        <div key={index} className="text-gray-800 font-semibold text-sm px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-400 transition duration-200 cursor-pointer">
            {category}
        </div>
      ))}
    </div>
  )
}

export default CategoryList;
