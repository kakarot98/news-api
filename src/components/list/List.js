import React from 'react'
import CardComponent from './cards/CardComponent'

const List = ({articles, data}) => {
  return (<>
    {articles && articles.map(article => (<CardComponent key={article.title} article={article}/>))}
    </>)
}

export default List