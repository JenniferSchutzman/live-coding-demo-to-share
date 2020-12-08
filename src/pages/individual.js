import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


const Individual = () => {
  const [personData, setPersonData] = useState({})
  const id = useParams();
  console.log('id', id)
  const location = useLocation()

  useEffect(() => {
    // we woould be doing a get by id 
    setPersonData(location.state)
  }, [])

  return (
    <>
      {personData && (
        <>
          <div>{personData.name}</div>
          <div>Frequently used language: {personData.commonLanguage}</div>
        </>
      )}
    </>
  )
}

export default Individual;