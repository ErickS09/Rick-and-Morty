import React, { useEffect, useState } from 'react';
import Detail from './components/Detail'
import Home from './pages/Home'
import Pages from './components/Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Location from './pages/Location';
import Episode from './pages/Episode';


function App() {

  const [state, setState] = useState([])
  const [info, setInfo] = useState({})
  const initialurl = 'https://rickandmortyapi.com/api/character'
  const personajes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setState(data.results)
        setInfo(data.info)
      })

      .catch(error => console.log(error))

  }

  const onPrevious = () => {
    personajes(info.prev)
  }

  const onNext = () => {
    personajes(info.next)
  }

  useEffect(() => {
    personajes(initialurl);

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
          <>
            <Detail/>
            <div className='container mt-5'>
              <Pages prev={info.next} sig={info.prev} onPrevious={onPrevious} onNext={onNext} />
              <Home personajes={state} />
              <Pages prev={info.next} sig={info.prev} onPrevious={onPrevious} onNext={onNext} />
            </div>
          </>
        )} />
        <Route path='/Location' element={<Location />}/>
        <Route path='/Episode' element={<Episode />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
