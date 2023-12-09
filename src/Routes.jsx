import React from 'react'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router-dom'

export default function Routes() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
