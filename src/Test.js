import { createRef, useEffect, useMemo, useRef, useState } from "react";

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
   //const newName = { name: "kkk" };
   //const listNo1 = { ...list_A[1], ...newName }; //배열 특정 인덱스만 값 바꾸기
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
//useState?
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

//useEffect?
function UseEffectTest() {
   const [data, setData] = useState(0);
   const [search, setSearch] = useState(0);
   //데이터를 다운받는다고 가정
   const download = () => {
      let downData = 5;
      setData(downData); //useEffect 한번 실행됨
   };
   // 실행 시점
   // (1) 함수가 최초 실행될 때 (마운트 될 때)
   // (2) 상태 변수가 변경될 때 (deps에 등록되어있을 때만)

   useEffect(() => {
      //useEffect(effect 함수, 디펜던시 함수(배열))
      console.log("useEffect 발동");
      download();
   }, [search]);
   // 가장 처음 렌더링 될 때 한번만 실행하고 싶을 때엔 deps에 빈 배열을 넣기
   // 배열을 생략하면 리렌더링 될 때마다 useEffect가 실행됨
   // deps에는 다시 그릴 유형의 함수(useState 배열의 현재 상태)가 들어가야 함

   return (
      <div>
         <hr></hr>
         <button
            onClick={() => {
               setSearch(2);
            }}>
            검색
         </button>
         <p>data : {data}</p>
         <button
            onClick={() => {
               setData(data + 1);
            }}>
            눌러봐유
         </button>
      </div>
   );
}

function UseMemoMan() {
   const [list, setList] = useState([1, 2, 3, 4]);
   const [str, setStr] = useState("합계");

   const getAddResult = () => {
      //모든 값 더하기
      let sum = 0;
      list.forEach(i => (sum = sum + i));
      console.log("sum : ", sum);
      return sum;
   };

   const MemoUseResult = useMemo(() => getAddResult(), [list]);
   //useMemo(기억할 함수, deps 배열)
   // deps 배열 안에 넣은 내용이 바뀌면, 등록한 함수를 호출해서 값을 연산해주고
   // 내용이 바뀌지 않았다면 이전에 연산한 값 재사용

   return (
      <div>
         <button
            onClick={() => {
               setStr("안녕");
               //문자를 변경했는데 getAddResult가 실행됨
               // -> str의 상태가 변경되는 순간 str이라는 변수를 들고 있는 영역의 함수가 다시 return 됨
               //문자 변경 시 getAddResult가 실행되지 않게 하려면? useMemo를 사용하기
               //useMemo 사용 시, 버튼(문자변경)을 클릭해도 getAddResult가 실행되지 않음
            }}>
            문자변경
         </button>
         <button
            onClick={() => {
               setList([...list, 10]); //list의 값을 바꾸면 return이 다시 실행됨
            }}>
            리스트 값 추가
         </button>
         <div>
            {list.map(i => (
               <h1>{i}</h1>
            ))}
         </div>
         <div>
            {str} : {MemoUseResult}
         </div>
      </div>
   );
}

function UseRefTest() {
   //useRef (디자인)
   //dom을 변경할 때 사용
   const myRef = useRef(null);

   const [list2, setList2] = useState([
      {
         id: 1,
         name: "aaa",
      },
      {
         id: 2,
         name: "bbb",
      },
   ]);

   const myRefArr = Array.from({ length: list2.length }).map(() => {
      return createRef();
   });
   //Array.from({length:숫자 or length}) => 숫자 or length만큼의 빈 배열 생성
   //.map(() => 넣고 싶은 값) => 넣고 싶은 값을 각 array에 넣어주기
   //createRef() => ref를 동적으로 생성해주는 hook, myRef가 배열로 만들어짐

   return (
      <div>
         <button
            onClick={() => {
               console.log(myRef);
               console.log(myRef.current);
               console.log(myRefArr);
               //myRef.current.style.backgroundColor = "red"; //스타일 변경해보기
               myRefArr[0].current.style.backgroundColor = "red"; //ref로 스타일 변경해보기
            }}>
            색 변경
         </button>
         <div ref={myRef}>박스</div>
         {list2.map((member, id) => (
            <p key={member.id} ref={myRefArr[id]}>
               {member.name}
            </p>
         ))}
      </div>
   );
}

export { UseEffectTest, UseMemoMan, UseRefTest };
