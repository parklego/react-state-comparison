import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "../atom/user";
import { userStateSelector } from "../selector/user";

const Other = () => {
  const user = useRecoilValue(userState);
  const initialName = useResetRecoilState(userState);
  const nameLength = useRecoilValue(userStateSelector);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <p>전역 상태 이름 : {user.name}</p>
        <p>전역 상태 이름 길이: {nameLength}</p>
        <p>전역 상태 나이 : {user.age}</p>
      </div>
      <div>
        <button onClick={() => initialName()}>이름 초기화하기</button>
      </div>
      <div>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    </div>
  );
};

export default Other;
