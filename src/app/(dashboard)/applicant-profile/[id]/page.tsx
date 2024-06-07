import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>page hrrrrrr {JSON.stringify(params)}</div>
  )
}

export default page