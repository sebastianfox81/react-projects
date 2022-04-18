import React from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {

  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='loading'></div>
    )
  }
  return (
    <div className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by {author} | {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link" target='_blank'>
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>
                remove
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Stories