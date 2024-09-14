export default function Image({ url }) {
  return (
    <img
      src={url}
      className="transition ease-out hover:-translate-y-4 hover:-rotate-2 hover:scale-110 w-[190px] h-[179px] rounded-[24px]
   transition-opacity grayscale hover:grayscale-0 duration-500  delay-"
      alt="dynamic"
    />
  );
}
