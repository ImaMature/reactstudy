import "./App.css";

function App() {
   const list = [
      { id: 1, name: "aaa" },
      { id: 2, name: "bbb" },
      { id: 3, name: "ccc" },
   ];
   const newName = { name: "kkk" };
   const listNo1 = { ...list[1], ...newName }; //배열 특정 인덱스만 값 바꾸기
   console.log(list);
   console.log(listNo1);
   const updateNameDto = {
      id: 3,
      name: "ppp",
   };
   //배열에서 특정 key의 value 변경하기
   const newList = list.map(index => (index.id === updateNameDto.id ? { ...index, ...updateNameDto } : index));
   const jsonStr = JSON.stringify(newList);
   return (
      <div class="app-style">
         <h1>{jsonStr}</h1>
      </div>
   );
}

export default App;
