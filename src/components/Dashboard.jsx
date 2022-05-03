import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { getArts, deleteArt,getSingleArt } from "../features/slice/artSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Dashboard = ({ }) => {
    const vendorArt = useSelector(state => state.art.art)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    // console.log(user._id, userId.user)

    useEffect(() => {
        dispatch(getArts())
        console.log(vendorArt)
        // console.log('loading art: ',art)

    }, [])


    const handleSingle = (id) => {
        dispatch(getSingleArt(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteArt(id))
    }
    return (
        <div >
            <div>
                <h1 className='title'> your artworks</h1>
                <section className='grid lg:grid-cols-3'>
                    {
                        vendorArt.length > 0 &&
                        vendorArt?.map((data) => (
<>
    {user._id === data.user ?
        <div key={data.id} className
        ='flex items-start justify-start'>
        <Link to={`/edit/${data._id}`}>
            <img src={data.image} className='w-[200px] h-[200px rounded-lg shadow] object-contain m-5'  onClick={()=> handleSingle(data._id)}/></Link>
            <div className='flex items-center justify-center w-12 h-12 bg-white shadow rounded-full text-3xl text-red-500 cursor-pointer -ml-9' onClick={() => handleDelete(data._id)}>
                <AiOutlineClose />
            </div>
        </div> : null}
</>
))}

        </section>
    </div>
</div>
    )
}

export default Dashboard
