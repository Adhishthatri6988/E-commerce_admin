import React from 'react'
import assets  from '../assets/admin_assets/assets';
const Add = () => {
  return (
    <form className='flex flex-col gap-3 items-start w-full'>
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex gap-2' >
          <label htmlFor='image1'>
            <img className='w-20' src={assets.upload_area}  />
            <input type='file' id='image1' hidden/>
          </label>

          <label htmlFor='image2'>
            <img className='w-20' src={assets.upload_area}  />
            <input type='file' id='image2' hidden/>
          </label>

          <label htmlFor='image3'>
            <img className='w-20' src={assets.upload_area}  />
            <input type='file' id='image3' hidden/>
          </label>

          <label htmlFor='image4'>
            <img className='w-20' src={assets.upload_area}  />
            <input type='file' id='image4' hidden/>
          </label>
        </div>
      </div>


      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required ></input>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required ></textarea>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
            <p className='mb-2'>Product Category</p>
            <select className='w-full px-3 py-2'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Product Sub-Category</p>
            <select className='w-full px-3 py-2'>
              <option value="Topwear">Topwear</option>
              <option value="Bottonwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Product Price</p>
            <input className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='70'></input>
        </div>
        
      </div>
      
    </form>
  )
}

export default Add