import React, { useState, useEffect } from 'react';
import { ImgList } from './Components/ImgList';
import { useScrollEnd } from './Hooks/useScrollEnd';
import { Loading } from './Components/Loading';


function App() {

  // * 로딩 Indicator 노출
  const [isLoading, setIsLoading] = useState(false);
  console.log('로딩중인가?', isLoading)



  // * Scroll이 끝났는지 확인하는 Custom Hook 불러오기
  const [fetchPage, setFetchPage] = useState(1);
  const isEnd = useScrollEnd();
  console.log('End?', isEnd)

  // * isEnd가 true가 되면 fetchPage를 1씩 증가시킨다.
  useEffect(() => {
    if (isEnd) {
      setFetchPage((prevPage) => {
        return prevPage + 1;
      })
    }
  }, [isEnd]);




  // * Picsum Api를 가져와서 이미지를 불러온다.
  const [imgList, setImgList] = useState([]);
  // const [url, setUrl] = useState('');

  // * useEffect로 Api 데이터를 한 번만 불러온다.
  useEffect(() => {
    fetchImages();
  }, [fetchPage]);



  // * fetch를 이용해 데이터를 불러온다.
  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=10`);
      if (!response.ok) {
        throw new Error('🚫네트워크 오류');
      }
      const data = await response.json();

      setImgList((prevImages) => {
        return [...prevImages, ...data]
      });
      setIsLoading(false);
    } catch (error) {
      console.error('데이터를 불러올 수 없습니다.', error);
      setIsLoading(false);
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Infinity Scrolling</h1>
      <ImgList imgList={imgList} />
      {isLoading && <Loading />}
    </div >
  );
}
export default App;
