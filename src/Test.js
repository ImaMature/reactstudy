import { useState } from "react";

function MapTest() {
   //배열 반복문으로 출력하기
   const menus = [
      { id: 1, key: 1, value: "menu1" },
      { id: 2, key: 2, value: "menu2" },
      { id: 3, key: 3, value: "menu3" },
   ];
   const menuList = menus.map((keyitems, data) => (
      <li key={keyitems.id}>
         menus : {keyitems.key}, {keyitems.value} | data : {data}
      </li>
   ));
   /*==============================================================================*/
   //배열에서 특정 값 수정하기
   const list_A = [
      { id: 1, name: "aaa" },
      { id: 2, name: "bbb" },
      { id: 3, name: "ccc" },
   ];
   const newName = { name: "kkk" };
   const listNo1 = { ...list_A[1], ...newName }; //배열 특정 인덱스만 값 바꾸기
   //console.log(list_A);
   //console.log(listNo1);
   const updateNameDto = {
      id: 3,
      name: "ppp",
   };
   //배열에서 특정 key의 value 변경하기
   const newList = list_A.map(i => (i.id === updateNameDto.id ? { ...i, ...updateNameDto } : i));
   const jsonStr = JSON.stringify(newList);

   return (
      <div>
         <ul>{menuList}</ul>
         <hr></hr>
         <div>
            <p>{jsonStr}</p>
         </div>
      </div>
   );
}

function NumberAdd() {
   //let uknown_Num = 0; 상태값이 아님
   const [uknown_Num, a] = useState(0); //React 안에 hooks 라이브러리 상태 값 = UI에 동기화되어있다는 것

   const testAdd = () => {
      a(uknown_Num + 1); //변수 값 변경 시 ++이 아니라 이렇게 사용해야 함
      console.log("uknown_Num", uknown_Num);
   };

   return (
      <div>
         <hr></hr>
         <div>
            <p>numbers : {uknown_Num}</p>
            <button onClick={testAdd}>더하기</button>
         </div>
      </div>
   );
}

export { MapTest, NumberAdd };
