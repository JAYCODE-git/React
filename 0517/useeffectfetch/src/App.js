import React, { useEffect, useState } from 'react';
import NationList from './components/NationList';

function App() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/nations');

  // * then을 이용한 서버 통신
  // useEffect(() => {
  //   fetch('http://localhost:3000/nations')
  //     .then(response => {
  //       if (!response.ok) {
  //         // http 상태 코드가 200~299 사이가 아닐 경우 에러 발생
  //         throw new Error('🚫네트워크 오류 🚫네트워크 오류 🚫네트워크 오류')
  //       }
  //       return response.json()
  //     })
  //     .then(json => setNations(json))
  //     .catch((error) => console.error('🚫통신 오류', error))
  // }, []);

  //* async&await을 이용한 서버 통신
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // http 상태 코드가 200~299 사이가 아닐 경우 에러 발생
          throw new Error('🚫네트워크 오류 🚫네트워크 오류 🚫네트워크 오류')
        }
        const json = await response.json();
        setNations(json)
      } catch (error) {
        console.error('🚫통신 오류', error)
      }
    }
    fetchData();
  }, [url]);


  return (
    <>
      <NationList nations={nations} setUrl={setUrl} />
    </>
  );
}

export default App;
