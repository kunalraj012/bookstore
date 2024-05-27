/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
       <div className=" mt-28 max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
          <div className=" item-center justify-center text-center dark:bg-slate-900 dark:text-white">
            <h1 className="text-2xl  md:text-2xl">We 're delighted to have you {" "}
            <span className="text-pink-500">here! :)</span></h1>
            <p className="mt-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto, perferendis harum vero dicta illo quibusdam quis fuga quo quos obcaecati eaque, odio aut doloremque, iure officia. Perferendis aspernatur ipsa excepturi error quisquam similique, accusantium inventore ut eligendi ullam. Laborum eaque aliquid iure a at cumque expedita quasi modi totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6">Back</button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
              list.map((item)=> (
                <Cards key={item.id} item={item} />
              ))
            }
          </div>
       </div>
    </>
  )
}

export default Course