import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./BodyPhoto/Photo";
function Body() {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    try {
      // 요청이 시작할 때에는 error 와 cards를 초기화하고
      setError(null);
      setCards(null);
      //loading 상태를 true로 바꿈
      setLoading(true);
      const response = await axios.get(" https://tester-api.nearthlab.com/v1/photos?page=1&per=16");
      setCards(response.data); // 데이터는 response.data 안에 들어있음
      console.log(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  // 아직 users가 받아와지지 않았다면 아무것도 표시되지 않음
  if (!cards) return null;

  //드디어 cards가 성공적으로 받아와진 상태.
  return (
    <div>
      <div>
        <span className="totalCount">전체 {cards.meta.total} 개</span>
      </div>
     
        {cards.photos.map((data, index) => (
          <Photo key={index} data={data} />
        ))}
      
    </div>
  );
}

export default Body;
