import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userInitialAtom } from "../atom/user";

const Home = () => {
  const [user, setUser] = useAtom(userInitialAtom);

  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div>
        <p>현재 이름 : {user.name}</p>
        <p>현재 나이 : {user.age}</p>
      </div>
      <div>
        <input
          type={"text"}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type={"number"}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
      </div>
      <div>
        <button onClick={() => navigate("/other")}>
          다른 페이지에서 전역값 보기
        </button>
      </div>
    </div>
  );
};

export default Home;
