import React, { useState, useEffect } from 'react'
import { updateArt, getArts,getSingleArt } from "../features/slice/artSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const Edit = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const vendorArt = useSelector(state => state.art.art)
  const user = useSelector(state => state.auth.user)
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


  const handleSubmit = (e, id) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(async () => {
      setLoading(false)
      const token = user.token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(`http://localhost:5001/api/art/${id}`, {
        title,
        price,
        category,
        image}).then((res) => console.log(res)).catch((err) => console.log(err))
      // dispatch(updateArt(id, {
      //   title,
      //   price,
      //   category,
      //   image
      // }));
      // dispatch(getArts())

      setTitle('')
      setPrice('')
      setCategory('')
      setImage('')
      alert('Art Updated')

    }, 2000)
  }

  return (

    <div className='my-9 p-7'>
      {vendorArt ? <>
          <h3 className='title'>Update an item</h3>
          <form className='flex flex-col'>
            <input type='file'

              onChange={handleChange}
              value={fileInputState}
              className='input  file:hidden ' />
        {previewSource || vendorArt.image ?
          <img
            src={previewSource || vendorArt.image}
            alt="chosen"
            className='h-[50px] w-[100px] rounded-md object-contain'
          /> : null}
          
            <input type='text'
              className='input'
              onChange={(e) => setTitle(e.target.value)}
              placeholder={vendorArt.title}
            />
            <input type='text'
              className='input'
              onChange={(e) => setPrice(e.target.value)}
              placeholder={vendorArt.price}

            />
            <input type='text'
              className='input'
              placeholder={vendorArt.category}
              onChange={(e) => setCategory(e.target.value)}
             />
            <input onClick={(e) => handleSubmit(e,vendorArt._id)} type='submit' value={loading ? 'processing...' : 'update'}
              className='input-btn capitalize' />
        </form>
      </> : 'loading...'}
    </div>
  )
}

export default Edit
