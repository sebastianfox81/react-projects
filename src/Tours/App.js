import React from 'react'

const url = 'https://course-api.com/react-tours-project'

const Card = ({ id, image, name, info, price, deleteTour}) => {

  const [ readMore, setReadMore ] = React.useState(false)

  return (
          <article className="card">
        <img src={image} alt="img"/>
        <div className="card-info">
          <h3 className="card-title">{name}</h3>
          <p>{readMore ? info : info.substring(0,50) + '...'}</p>
        </div>
          <button className="btn" onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
          <p>{`$${price}.00`}</p>
        <div className='card-footer'>
          <span><i className='fab fa-twitter'></i></span>
          <span><i className='fab fa-facebook'></i></span>
          <span><i className='fab fa-squarespace'></i></span>
          <span><i className='fab fa-linkedin'></i></span>
        </div>
        <button className="btn" onClick={() => deleteTour(id)}>Delete Tour</button>
      </article>

  )
}

const App = () => {

  const [ tours, setTours ] = React.useState([])
  console.log(tours)
  const fetchTours = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setTours(data)
  }

  React.useEffect(() => {
    fetchTours()
  },[])

  const deleteTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if(!tours.length ) {
    return (
      <>
    <div><h1>No More Tours!</h1></div>
    <button className="btn" onClick={() => fetchTours()}>Refresh Tours</button>
      </>
    )
  }
  return (
<div>
  <section className="cards">
    <div className="title">
      <h1>Tours</h1>
    </div>
    <div className="cards-center">
      {
        tours.map((tour) => {
          return (
            <Card key={tour.id} {...tour} deleteTour={deleteTour}/>
          )
        })
      }
    </div>
  </section>
</div>

  )
}

export default App