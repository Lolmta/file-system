import React from 'react'
import Folder from '../Folder/Folder'
import File from '../File/File'

const Tree = ({data}) => {

  const content = data.content;


  //принимаю дату {}
  //в ретерне если дата то фолдер 
  //внутри фолдера если контент то контернт.мап дата => three(data) вызываю дерево 

 
  const Render = () => {
    return content?<Folder data={data}/>:<File data={data}/>
  }

  return (
      <Render/>
  )
}

export default Tree