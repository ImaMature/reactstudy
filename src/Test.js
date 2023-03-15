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
   const [uknown_Num, setUknown_Num] = useState(0); //React 안에 hooks 라이브러리 상태 값 = UI에 동기화되어있다는 것

   const testAdd = () => {
      setUknown_Num(uknown_Num + 1); //변수 값 변경 시 ++이 아니라 이렇게 사용해야 함
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

function Counter() {
   const [non, setNon] = useState(0);

   const onIncrease = () => {
      setNon(non + 1);
   };
   const onDecrease = () => {
      setNon(non - 1);
   };
   return (
      <div>
         <h1>{non}</h1>
         <button onClick={onIncrease}>+1</button>
         <button onClick={onDecrease}>-1</button>
      </div>
   );
}
function A() {
   console.log("app 실행됨");
   const [users, setUsers] = useState([{ id: 4, name: "이동욱" }]); //레퍼런스 변경되야 동작

   //기본 데이터
   let sample = [
      { id: 1, name: "김성근" },
      { id: 2, name: "선동열" },
      { id: 3, name: "박진만" },
   ];
   const download = () => {
      const a_data = sample.concat({ id: 4, name: "김종국" }); //추가할 데이터
      setUsers(a_data); //깊은 복사로 레퍼런스(메모리 참조 값) 변경
   };
   return (
      <div>
         <hr></hr>
         <button onClick={download}>download</button>
         {users.map((u, i) => (
            <p key={u.id}>
               {u.id}, {u.name}
            </p>
         ))}
      </div>
   );
}

export { MapTest, NumberAdd, Counter, A };
