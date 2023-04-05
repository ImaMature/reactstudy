import React from "react";
import styled from "styled-components";

//하나의 컴포넌트를 생성 (재사용)

//style-components => js파일과 css파일 관리
const HeaderList = styled.div`
   border: 1px solid black;
   height: 200px;
`;

function Footer() {
   return (
      <HeaderList>
         <h1>푸터입니다.</h1>
      </HeaderList>
   );
}
export default Footer;
