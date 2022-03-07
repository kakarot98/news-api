import React from 'react'
import CardComponent from './cards/CardComponent'

const List = ({articles, data}) => {
  return (<>
    {articles && articles.map((article, i) => (<CardComponent key={i} article={article}/>))}
    </>)
}

export default List