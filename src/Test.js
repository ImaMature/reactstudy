export default function MapTest() {
   const menus = [
      { key: 1, value: "menu1" },
      { key: 2, value: "menu2" },
      { key: 3, value: "menu3" },
   ];
   const menuList = menus.map((index, data) => <li key={index}>{data}</li>);

   return <ul>{menuList}</ul>;
}
