import React from 'react'
import Folder from '../Folder/Folder'
import File from '../File/File'

const Tree = ({data}) => {

  const content = data.content;

  const Render = () => {
    return content?<Folder data={data}/>
    :<File data={data}/>
  }

  return (
      <Render/>
  )
}

export default Tree