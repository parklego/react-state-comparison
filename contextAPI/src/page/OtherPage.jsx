import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const OtherPage = () => {
  const userCtx = useContext(UserContext);
  return (
    <div>
      <p>전역 상태 이름 : {userCtx.user.name}</p>
      <p>전역 상태 나이 : {userCtx.user.age}</p>
    </div>
  );
};

export default OtherPage;
