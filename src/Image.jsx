export default function Image({ url }) {
  return (
    <img
      src={url}
      className="transition-transform transition-opacity ease-out hover:-translate-y-4 hover:-rotate-2 hover:scale-110 hover:grayscale-0 duration-500 delay-100 w-[190px] h-[179px] rounded-[24px] grayscale"
      alt="dynamic"
    />
  );
}
