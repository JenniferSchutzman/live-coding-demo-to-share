import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [members, setMembers] = useState([])
  const history = useHistory();
  const { error, loading, get, response } = useFetch('http://localhost:3001/members',
    { cachePolicy: 'network-only' }
  )

  useEffect(() => {
    getMemberData()
  }, [])

  async function getMemberData() {
    const details = await get()
    console.log('details', details)
    if (response.ok) setMembers(details)
  }

  const gotToIndividual = person => {
    console.log('pesron', person)
    history.push({
      pathname: `individual/${person.id}`,
      state: person
    })
  }

  return (
    <>
      {error && <h1>THERE IS AN ERROR!!!</h1>}
      {loading && <p>!!!!!!!!!!!!!!!!!</p>}
      {members && members.map(indv => {
        return (
          <ul onClick={() => gotToIndividual(indv)} key={indv.name}>
            <li>{indv.name}</li>
            <li>{indv.company}</li>
          </ul>
        )
      })}
    </>
  )
}

export default Home;