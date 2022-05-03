import React, { useState } from 'react'
import { createArt, getArts } from "../features/slice/artSlice";
import { useDispatch } from "react-redux";
const Add = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

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
      dispatch(createArt({
        title,
        price,
        category,
        image
      }));
      dispatch(getArts())

    }, 2000)
  }
  return (
    <div>
      <h3 className='title'>add an item</h3>
      <form className='flex flex-col'>
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
        <input type='text'
          className='input'
          onChange={(e) => setTitle(e.target.value)}
          placeholder='title' />
        <input type='text'
          className='input'
          onChange={(e) => setPrice(e.target.value)}
          placeholder='price' />
        <input type='text'
          className='input'
          onChange={(e) => setCategory(e.target.value)}
          placeholder='category' />
        <input onClick={handleSubmit} type='submit' value={loading ? 'processing...' : 'add'}
          className='input-btn capitalize' />
      </form>
    </div>
  )
}

export default Add
