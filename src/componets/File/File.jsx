import React from 'react'
import {AiFillFile} from  'react-icons/ai'

const File = ({ data }) => {
  return (
    <div><AiFillFile/>{data.name}</div>
  )
}

export default File