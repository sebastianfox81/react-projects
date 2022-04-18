import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {

  const [ loading, setLoading ] = useState(true);
  const [ person, setPerson ] = useState(null);
  const [ title, setTitle ] = useState('name');
  const [value, setValue] = useState('random person');

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      // console.log(e)
      const newValue = e.target.id
      setTitle(newValue)
      setValue(person[newValue])
    }

  }

  const getPerson = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const person = data.results[0];
    const { phone,
            email,
            picture: { large: image },
            login: { password },
            name: { first, last },
            dob: { age },
            location: { street : { number, name}}
    } = person;
    // const { large: image } = person.picture;
    // const { login: { password } } = person;
    // const { first, last } = person.name;
    // const { age } = person.dob;
    // const { street : { number, name } } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`
    }
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name)
    // console.log(newPerson)
  }

  useEffect(() => {
    getPerson()
  }, [])

  return <main>
    <div className="block bcg-black"></div>
    <div className="block">
      <div className="container">
        <img src={(person && person.image) || defaultImage} alt="random user" className="user-img" />
        <p className="user-title">my {title} is </p>
        <p className="user-value">{value}</p>
        <div className="values-list">
          <button className="icon" id="name" onMouseOver={handleValue}>
            <FaUser />
          </button>
          <button className="icon" id="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className="icon" id="age" onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button className="icon" id="street" onMouseOver={handleValue}>
            <FaMap />
          </button>
          <button className="icon" id="phone" onMouseOver={handleValue}>
            <FaPhone />
          </button>
          <button className="icon" id="password" onMouseOver={handleValue}>
            <FaLock />
          </button>
        </div>
        <button className="btn" type="button" onClick={getPerson}>
          {loading ? 'Loading...' : 'random user'}
        </button>
      </div>
    </div>
    </main>
}

export default App



