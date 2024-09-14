import Image from "./Image";
export default function Widget2() {
  let img_arr = [
    "src/assets/image-1.jpeg",
    "src/assets/image-2.jpeg",
    "src/assets/image-3.jpeg",
  ];
  return (
    <div className=" py-5 pl-3	flex flex-col gradient-shadow  bg-darkBlack w-[720px] h-[320px] rounded-2xl mr-10 gap-y-4">
      <div className="flex gap-x-2 items-top ">
        <img src="src\assets\question.svg" className="w-8 h-6" alt="" />
        <div className="flex gap-x-28 items-start">
          <button className="text-base h-[50px] w-[120px] bg-black text-white font-bold py-2 px-6 border border-black rounded-xl font-poppins text-lg font-medium">
            Gallery
          </button>
          <div className="flex ">
            <button className="font-medium	bg-button text-white text-xs w-[120px] h-[40px] rounded-2xl shadow-xl">
              + ADD IMAGE
            </button>
            <div className="flex  gap-0">
              <img
                src="src\assets\left.svg"
                alt=""
                className="w-28  h-24	flex-shrink-0"
              />
              <img src="src\assets\right.svg" alt="" className="w-28  h-24  " />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 -translate-y-4

"
      >
        <img src="src\assets\box.svg" className="w-8 h-8 " alt="" />
        {img_arr.map((img, index) => (
          <Image key={index} url={img} alt="image" />
        ))}
      </div>
    </div>
  );
}
