export default function Widget1() {
  return (
    <div className=" py-5 pl-3	flex flex-col gradient-shadow  bg-darkBlack w-[720px] h-[320px] rounded-2xl mr-10 gap-y-16 mt-10">
      <div className="flex gap-x-2">
        <img src="src\assets\question.svg" className="w-8 h-6" alt="" />
        <div className="flex flex-col">
          <div className="cursor-pointer flex gap-x-20 display bg-black h-[52px] w-[614px] rounded-3xl py-3 pl-20 text-textColor 	tracking-widest  font-poppins text-lg font-medium	 ">
            <div className="bg-background hover:text-white rounded-xl">
              About Me
            </div>
            <div className="hover:text-white">Experiences</div>
            <div className="hover:text-white">Recommended</div>
          </div>
          <div className="flex py-6 ">
            <img
              src="src\assets\box.svg"
              className="w-8 h-8 relative -translate-x-8 translate-y-8"
              alt=""
            />
            <div className="flex flex-col mr-10 justify-start	">
              <p className="text-font text-xl	flex">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <br />
              <p className="text-font text-xl	">
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
            </div>

            <img
              src="src\assets\Rectangle 39335.svg "
              className="w-8 h-20 relative -translate-y-10  "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
