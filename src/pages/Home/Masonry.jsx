import Masonry from 'masonry-layout'
import React, { useEffect, useState } from 'react'





// USELESS





export const Masonry = () => {

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    let elem = document.querySelector('.masonry')
    let msnry = new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 320,
      percentPosition: true,
      fitWidth: true
    })

    msnry.layout()

  }, [])



  return (
    <div className='grid items-center masonry' data-masonry='{ "itemSelector": ".grid-item", "fitWidth": "true"}'>
      <div className="grid-sizer w-1/5"></div>
      <div className='w-full lg:w-2/6 grid-item mx-6 ' onClick={() => setIsOpen(!isOpen)}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className={`w-5/6 bg-transparent md:w-1/6 px-4 grid-item md:bg-slate-300 p-2 text-box duration-1000 ${isOpen ? 'translate-y-44' : 'translate-y-0'}`}>
        <p className='text-xs text-white md:text-black md:text-lg'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
      </div>
      <div className='w-1/4 md:h-32 grid-item m-10 translate-x-56 -translate-y-44' ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6 md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-3/6 md:w-1/6 grid-item m-14'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-2/6 md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-4/6 md:w-3/6 grid-item md:mx-80'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6 md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
    </div>
  )
}
