import React from 'react'
import NavBar from '../components/header/index.jsx'
import { IoMdAdd } from 'react-icons/io'
import Card from '../components/tasks/card.jsx'

const Homepage = () => {
    return(
        <main className='h-full w-full'>
            <NavBar />
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-3 gap-4 mt-10">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            {/*Add new task button */}
            <button 
            title="Add New Task"
            className=" fixed bottom-20  right-15 h-10 aspect-square rounded-r-md bg-blue-400 text-white font-bold cursor-pointer flex item-center justify-center ">
                <IoMdAdd size={24} className="font-bold" />
            </button>
        </main>
    )
}
export default Homepage