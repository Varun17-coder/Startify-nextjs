import React from 'react'

const page = async ({params}:{params:Promise<{id:string}>}) => {
    const id=(await params).id;
  return (
    <>
    <h1 className='text-2xl'>This is a page {id}</h1>
    </>
  )
}

export default page
