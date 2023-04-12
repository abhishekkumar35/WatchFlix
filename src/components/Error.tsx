import React from 'react'
import {useRouteError} from 'react-router-dom';



const Error = () => {
    const error:any = useRouteError()
  return (
    <div>Error {error.statusText  || "unknown Error"} {error.status || null}</div>
  )
}

export default Error