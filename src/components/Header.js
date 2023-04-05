import React from "react";
import styled from "styled-components";
import { TestTag } from "../New.js";

//하나의 컴포넌트를 생성 (재사용)

//style-components => js파일과 css파일 관리
const HeaderList = styled.div`
   border: 1px solid black;
   height: 200px;
`;

function Header() {
   return (
      <HeaderList>
         <h1>헤더입니다.</h1>
         <ul>
            <TestTag>dddd</TestTag>
            <li>vvvvv</li>
         </ul>
      </HeaderList>
   );
}
export default Header;
