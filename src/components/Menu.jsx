import React, { useState, useEffect } from 'react'
import Artwork from './Artwork'
import { Skeleton } from 'antd';
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { getArts} from "../features/slice/artSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const art = useSelector(state => state.art.art)
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('all')
  const [filteredArtworks, setFilteredArtworks] = useState([])

  useEffect(() => {
    // dispatch(getArts())
    setFilteredArtworks(art)
  }, [])


  const filterCategory = (item) => {
    setCategory(item);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (item === 'all') {
        setFilteredArtworks(art)
      } else {
        setFilteredArtworks(art.filter((art) => art.category.includes(item)));
      }
    }, 1000);
  };

  return (
    <div>
      <h1 className='font-serif text-3xl text-center p-10 text-gray-500'>View Diverse Artworks From Our Artist</h1>

      <section className='text-sm flex-wrap md:text-xl flex items-center justify-center'  >
        {["all", "paintings", "photography", "drawings", "imprints"].map((item, index) => (
          <div key={index} onClick={() => filterCategory(item)} className={`cursor-pointer p-3 m-2 rounded-lg font-bold capitalize shadow font-serif hover:bg-gray-300 ${category === item ? 'bg-gray-300' : null}`}>
            {item}
          </div>
        ))}
      </section>
      {loading ? (
        <section className='flex items-center justify-around flex-wrap m-5'>

          <div className='w-[300px] h-[200px] shadow-lg rounded-lg p-4'>
            <Skeleton avatar paragraph={{ rows: 3 }} active />
          </div>

          <div className='w-[300px] h-[200px] shadow-lg rounded-lg p-4'>
            <Skeleton avatar paragraph={{ rows: 3 }} active />
          </div>

          <div className='w-[300px] h-[200px] shadow-lg rounded-lg p-4'>
            <Skeleton avatar paragraph={{ rows: 3 }} active />
          </div>

        </section>)

        :
        (<section className='mt-4 ml-2 flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3'>
          
              {filteredArtworks.length > 0 ? filteredArtworks.map((item) => (
                <Artwork key={item._id} item={item} />
              )) : <h1 className='ml-[5em]  my-9 text-gray-500 text-4xl lg:ml-[15em] w-full '>No Artwork Found</h1>}
        </section>)}
    </div>
  )
}

export default Menu
