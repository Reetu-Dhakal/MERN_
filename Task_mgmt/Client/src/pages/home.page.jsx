import React, { useState, useEffect } from 'react'
import NavBar from '../components/header/index.jsx'
import { IoMdAdd } from 'react-icons/io'
import Card from '../components/tasks/card.jsx'
import AddEditTask from '../components/forms/task.form.jsx'
import Modal from 'react-modal'
import { getUserDetails } from '../api/auth.api'
import { useNavigate } from 'react-router'

const Homepage = () => {
    const[userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate();
    const [isAddModalOpen, setAddModalOpen] = useState(false)

    const openAddModal = () => setAddModalOpen(true)
    const closeAddModal = () => setAddModalOpen(false)
    
    const getProfile = async () => {
        // API call to get user profile (optional - don't block if fails)
        try{
            const user = await getUserDetails()
            setUserInfo(user)
            console.log('User details:', user)
        } catch(error){
            console.error('Could not fetch user details:', error.response?.status)
            // Don't redirect on error - user can still use the app
        }
    }

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if(!access_token) {
            console.log('No token found, user not authenticated')
            navigate('/login')
        } else {
            console.log('Token found, user authenticated')
        }
    }, [navigate])

    useEffect(() => {
        (async () => {
            await getProfile()
        })()
    }, [])

    return (
        <main className='h-full w-full'>
            <NavBar user={userInfo} />
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

            {/* Add new task button */}
            <button
                onClick={openAddModal}
                title="Add New Task"
                style={{ backgroundColor: '#800020' }}
                className="fixed bottom-20 right-6 h-10 w-10 rounded-full text-white font-bold flex items-center justify-center shadow-lg hover:opacity-90 transition border-2 border-transparent active:border-white"
            >
                <IoMdAdd size={24} />
            </button>

            {/* Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onRequestClose={closeAddModal}
                style={{
                    overlay: { backgroundColor: "rgba(0,0,0,0.4)" }
                }}
                className="w-full max-w-md mx-auto mt-16"
            >
                <AddEditTask onClose={closeAddModal} />
            </Modal>
        </main>
    )
}

export default Homepage
