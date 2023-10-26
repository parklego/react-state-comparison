import React from "react";
import { useNavigate } from "react-router-dom";
import useMemoStore from "../store/memoStore";

const Home = () => {
  const { memo, setMemo, memoList, setMemoList, setRemoveList } =
    useMemoStore();

  const navigate = useNavigate();

  const handleMemo = (e) => {
    setMemo(e.target.value);
  };

  const handleAddMemo = (e) => {
    e.preventDefault();

    setMemoList(memo);
    setMemo("");
  };

  return (
    <>
      <form onSubmit={handleAddMemo}>
        <p>현재 입력값 : {memo.text}</p>
        <input type="text" onChange={(e) => handleMemo(e)} value={memo.text} />
        <button type="submit">메모에 추가하기</button>
      </form>

      <p>현재 추가된 메모</p>
      <ul>
        {memoList.map((memo) => {
          return (
            <>
              <li key={memo.id}>{memo.text}</li>
              <button onClick={() => setRemoveList(memo.id)}>메모 삭제</button>
            </>
          );
        })}
      </ul>
      <div>
        <button onClick={() => navigate("/other")}>
          다른 페이지에서 전역값 보기
        </button>
      </div>
    </>
  );
};

export default Home;
