import React from "react";
import useMemoStore from "../store/memoStore";
import { useNavigate } from "react-router-dom";

const Other = () => {
  const { memoList } = useMemoStore();
  const navigate = useNavigate();

  return (
    <div>
      <p>현재 저장된 메모 </p>
      {memoList.map((memo) => {
        return <li key={memo.id}>{memo.text}</li>;
      })}
      <div>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    </div>
  );
};

export default Other;
