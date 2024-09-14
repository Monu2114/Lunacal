import { useState } from "react";
import Image from "./Image";
export default function Widget2() {
  const [file, setFile] = useState();

  const [img_arr, setImg] = useState([
    "images/image-1.jpeg",
    "images/image-2.jpeg",
    "images/image-3.jpeg",
  ]);
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the file upload or processing here
      // For example, you might want to update your state with the new image
      setFile(URL.createObjectURL(selectedFile));
      setImg([...img_arr, URL.createObjectURL(selectedFile)]);
    }
  };
  return (
    <div className=" py-5 pl-3	flex flex-col gradient-shadow  bg-darkBlack w-[720px] h-[320px] rounded-2xl mr-10 gap-y-4">
      <div className="flex gap-x-2 items-top ">
        <img src="/images/question.svg" className="w-8 h-6" alt="" />
        <div className="flex gap-x-52 items-start">
          <button className="text-base h-[50px] w-[120px] bg-black text-white font-bold py-2 px-6 border border-black rounded-xl font-poppins text-lg font-medium">
            Gallery
          </button>
          <div className="flex ">
            <button
              className="font-medium shadow-inherit	 bg-button text-white text-xs w-[120px] h-[40px] rounded-2xl shadow-xl"
              onClick={handleImageClick}
            >
              + ADD IMAGE
            </button>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <div className="flex ">
              <img
                src="/images/left.svg"
                alt=""
                className="w-28 h-24 -translate-y-4 "
              />
              <img
                src="images/right.svg"
                alt=""
                className="w-28  h-24 -translate-y-4 -translate-x-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 -translate-y-4
	"
      >
        <img src="/images/box.svg" className="w-8 h-8 " alt="" />
        {img_arr.map((img, index) => (
          <Image key={index} url={img} alt="image" />
        ))}
      </div>
    </div>
  );
}
