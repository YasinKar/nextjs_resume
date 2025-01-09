import { Spinner } from '@nextui-org/react'
import React from 'react'

const loading = () => {
  return (
    <Spinner color="danger" className='h-screen w-screen flex justify-center items-center' />
  )
}

export default loading