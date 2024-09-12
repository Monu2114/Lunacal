function App() {
  //<button class="">

  return (
    <div className="flex flex-col gap-y-8 items-end justify-items-center mt-10 	">
      <div className=" py-5 pl-3	flex flex-col gradient-shadow  bg-darkBlack w-[720px] h-[280px] rounded-2xl mr-10 gap-y-16">
        <div className="flex gap-x-2">
          <img src="src\assets\question.svg" className="w-8 h-6" alt="" />
          <div className="cursor-pointer flex gap-x-20 display bg-black h-[62px] w-[614px] rounded-3xl py-3 pl-20 text-textColor text-lg	tracking-wider hover:text-white	">
            <div>About Me</div>
            <div>Experiences</div>
            <div>Recommended</div>
          </div>
        </div>
        <div className="flex  justify-between w-full ">
          <img src="src\assets\box.svg" className="w-8 h-8" alt="" />
          <img
            src="src\assets\Rectangle 39335.svg"
            className="w-8 h-20 relative -translate-y-10  "
            alt=""
          />
        </div>
      </div>
      <div className=" py-5 pl-3	flex flex-col gradient-shadow  bg-darkBlack w-[720px] h-[280px] rounded-2xl mr-10 gap-y-16">
        <div className="flex gap-x-2 items-top ">
          <img src="src\assets\question.svg" className="w-8 h-6" alt="" />
          <div className="flex gap-x-16">
            <button className="text-base h-[50px] w-[120px] bg-black text-white font-bold py-2 px-6 border border-black rounded-xl">
              Gallery
            </button>
            <button className="font-medium	bg-button text-white text-xs w-[120px] h-[40px] rounded-2xl shadow-xl">
              + ADD IMAGE
            </button>
            <div className="flex ">
              <img src="src\assets\left.svg" alt="" className="w-20 h-20" />
              <img src="src\assets\right.svg" alt="" className="w-20 h-20" />
            </div>
          </div>
        </div>
        <img src="src\assets\box.svg" className="w-8 h-8" alt="" />
      </div>
    </div>
  );
}

export default App;
