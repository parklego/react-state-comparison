import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const userCtx = useContext(UserContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div>
        <p>현재 이름 : {userCtx.user.name}</p>
        <p>현재 나이 : {userCtx.user.age}</p>
      </div>
      <div>
        <input type={"text"} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            userCtx.changeName(name);
          }}
        >
          이름 수정하기
        </button>
      </div>
      <div>
        <input type={"number"} onChange={(e) => setAge(e.target.value)} />
        <button
          onClick={() => {
            userCtx.changeAge(age);
          }}
        >
          나이 수정하기
        </button>
      </div>

      <div>
        <button onClick={() => navigate("/other")}>
          다른 페이지에서 전역값 보기
        </button>
      </div>
    </>
  );
};

export default Home;
