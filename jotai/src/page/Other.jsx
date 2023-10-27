import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import { userInitialAtom } from "../atom/user";

const Other = () => {
  const { name, age } = useAtomValue(userInitialAtom);

  const navigate = useNavigate();

  const initialUser = useResetAtom(userInitialAtom);

  return (
    <div>
      <div>
        <p>전역 상태 이름 : {name}</p>
        <p>전역 상태 나이 : {age}</p>
      </div>
      <div>
        <button onClick={() => initialUser()}>전체 초기화하기</button>
      </div>
      <div>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    </div>
  );
};

export default Other;
