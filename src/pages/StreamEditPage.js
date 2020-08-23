import React from 'react'
import StreamEditCont from "../containers/StreamEditCont"

const StreamEditPage = (props) => {
  return (
    <div>
      <h1>StreamEditPage.js</h1>
      <StreamEditCont {...props} />
    </div>
  )
}

export default StreamEditPage
