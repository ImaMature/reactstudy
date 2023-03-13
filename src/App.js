import "./App.css";

function App() {
   let list = [1, 2, 3];
   return (
      <div class="app-style">
         <h1>
            {list.map(i => (
               <div>{i}</div>
            ))}
         </h1>
      </div>
   );
}

export default App;
