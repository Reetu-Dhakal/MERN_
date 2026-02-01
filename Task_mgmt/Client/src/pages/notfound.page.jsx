import React from "react";
import { Link } from "react-router";

const NotfoundPage = () => {
    return(
        <main className="h-full w-full flex justify-center items-center">
            <div className="flex flex-col gap-2">
                <h1 className="text-center text-3xl font-bold">page not found</h1>
                <p className="text-center">404 page no found</p>
                <Link className='w-50 py-3 mx-auto bg-blue-500 text-center text-white! font-bold rounded-md'to={"/"}>Back to Home</Link>
            </div>
        </main>
    )
}
export default NotfoundPage