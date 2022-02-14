import React from 'react'

export default function PageBreak() {
  return (
<div className="grid grid-cols-12 mb-20">
  <div className="col-span-5 text-right">
    <p></p>
  </div>

  <div className="col-span-1 mt-10">
    {/* <div className="sm:block w-0.5 bg-black absolute h-full left-1/2 transform -translate-x-1/2"></div> */}
  </div>

  <div className="col-span-6">
    {/* <div className="border rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center mt-10"></div> */}
    <div className="grid grid-cols-3 items-center mt-6">
      <div>
        <hr />
      </div>
      <div className="text-center font-extrabold  border-2 border-black p-4">test</div>
      <div>
        <hr />
      </div>
    </div>
  </div>
</div>

  )
}
