import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <main className="h-full w-full">
            <div className ="flex flex-col gap-2">
                <h1>Page not Found</h1>
                <p>404. not found</p>
                <Link 
                className='w-50 py-3 bg-blue-500 text-white font-bold rounded-md' to={'/'}>
                    Go to Home Page
                </Link>
            </div>
        </main>
    );
}   

export default NotFoundPage;