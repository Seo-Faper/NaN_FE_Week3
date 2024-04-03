import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">메인</Link>
      <Link to="/home">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/me">나의 프로필</Link>
    </div>
  );
};

export default Header;
