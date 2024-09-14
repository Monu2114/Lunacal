import Widget1 from "./Widget-1.jsx";
import Widget2 from "./Widget-2.jsx";

function App() {
  //<button class="">

  return (
    <div className="flex flex-col gap-y-8 items-end justify-items-center mt-0 bg-custom-gradient h-screen	">
      <Widget1 />
      <div className="w-[600px] bg-neutral-700 h-1 shadow-xl shadow-black ml-10 mr-24"></div>
      <Widget2 />
      <div className="w-[600px] bg-neutral-700 h-1 shadow-xl shadow-black ml-10 mr-24"></div>
    </div>
  );
}

export default App;
