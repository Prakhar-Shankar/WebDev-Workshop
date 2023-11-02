import React from 'react';

function Card({ title, description, link }: {title:any, description:any, link:any}) {
  return (
    <div className="hover:scale-110 max-w-sm border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700 hover:shadow-blue-400 hover:shadow-xl shadow-blue-400 shadow-lg">
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-3">
          {title}
        </h5>
      </div>
      <div className="flex items-center mt-2.5 mb-5">
        <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 h-8 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3 cursor-pointer hover:bg-blue-300 text-center">
            {description}
        </span>
        <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 h-8 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3 cursor-pointer hover:bg-blue-300 text-center">
           <a href={link}>My Github</a> 
        </span>
      </div>
    </div>
  );
}

export default Card;
