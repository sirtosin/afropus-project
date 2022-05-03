import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { createPortrait, getPortraits } from "../features/slice/portraitSlice";
const UPortrait = () => {
    const [toggle, setToggle] = useState(true)
        ; 
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(true);
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const dispatch = useDispatch();
    
    function handleChange(e) {
        const file = e.target.files[0];
        previewFile(file);
        setFileInputState(e.target.value);
    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
            setImage(reader.result);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            dispatch(createPortrait({
                name,
                phone,
                address,
                image
            }));
            dispatch(getPortraits())

        }, 2000)
            setShow(!show);
    }
    const handleToggle = () => {
        setToggle((prev) => !prev);
    }

    return (
        <>

            {toggle && show ?

                <div className='h-screen w-[100%] fixed top-0 -left-8 z-50 bg-black opacity-90 flex items-center justify-center'>

                    <section className=' h-[600px] w-[500px] bg-white shadow-lg rounded-lg  p-5 m-5'>
                        <div className='flex items-center justify-center'>

                            <h5 className='title mb-9'>order a Portriat</h5>
                            <AiOutlineClose onClick={handleToggle} className='text-3xl text-red-600 ml-[1.4em] -mt-9 font-bold cursor-pointer' />
                        </div>
                        <form >
                            <input type='file'

                                onChange={handleChange}
                                value={fileInputState}
                                className='input  file:hidden ' />
                            {previewSource && (
                                <img
                                    src={previewSource}
                                    alt="chosen"
                                    className='h-[50px] w-[100px] rounded-md object-contain'
                                />
                            )}
                            <input type="text" placeholder="your name"
                                className='input'
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="address"
                                className='input'
                                onChange={(e) => setAddress(e.target.value)} />
                            <input type="text" placeholder="phone"
                                className='input'
                                onChange={(e) => setPhone(e.target.value)} />

                            <div className='flex items-center justify-center p-2'>
                                <input type="submit"
                                    className='input-btn capitalize '
                                    onClick={handleSubmit}
                                    value={loading ? 'processing...' : 'place order'} />
                            </div>

                        </form>
                    </section>
                </div>
                : null}
        </>
    )
}

export default UPortrait
