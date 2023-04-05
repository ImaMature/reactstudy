import React from "react";
import styled from "styled-components";

const a = {
   backgroundColor: "green",
   fontSize: "1.5em",
};
//디자인을 만들 때는 함수 안에다가 선언해서는 안됨. 새로고침 할 때 마다 계속 로드되기 때문
//그리고 위와 같은 방식보다는 css를 이용하는 것이 훨씬 나음

/*
    let t = document.createElement("div")
    t.style = {
        font-size: "1.5em";
        text-align: "center";
        color: "palevioletred";
    }
*/
//위 주석 처리된 코드 문단은 바로 아래 Title과 같음
const StyleTag = styled.div`
   font-size: 1.5em;
   text-align: center;
   color: palevioletred;
`;

let ColoredTag = styled.h4`
   font-size: 25px;
   color: ${props => props.color || "black"}; // 개별적용 부분은 props로 받기
`;

function StyleCompsTest() {
   return (
      <div>
         <div style={a}>안녕</div>
         <div className="box1">hi?</div>
         <StyleTag>테스트</StyleTag>
         <ColoredTag color="green">styled components로 만든 태그 </ColoredTag>
         <ColoredTag color="yellow">styled components로 만든 태그 </ColoredTag>
         <ColoredTag color="blue">styled components로 만든 태그 </ColoredTag>
      </div>
   );
}
export default StyleCompsTest;
