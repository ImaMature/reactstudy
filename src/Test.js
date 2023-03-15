export default function MapTest() {
   //배열 반복문으로 출력하기
   const menus = [
      { key: 1, value: "menu1" },
      { key: 2, value: "menu2" },
      { key: 3, value: "menu3" },
   ];
   const menuList = menus.map((index, data) => (
      <li key={index}>
         index : {index.key}, {index.value} | data : {data}
      </li>
   ));
   /*==============================================================================*/
   //배열에서 특정 값 수정하기
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
      <div>
         <ul>{menuList}</ul>
         <hr></hr>
         <div>
            <p>{jsonStr}</p>
         </div>
      </div>
   );
}
