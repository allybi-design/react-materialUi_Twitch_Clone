import React from 'react'
import StreamCreate from "../containers/StreamCreateCont"

const StreamCreatePage = (props) => {
  return (
    <div>
      <h1>Create a New Stream</h1>
      <StreamCreate {...props}/>
    </div>
  )
}

export default StreamCreatePage
