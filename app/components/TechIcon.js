export default function TechIcon({ children, iconSize, textSize }) {
  return (
    <div
      className="flex text-slate-400 hover:text-purple-400 justify-center 
    items-center border-solid border-[0.5px] border-slate-400 min-w-fit w-[120px]"
    >
      <div className="flex justify-center items-center whitespace-nowrap space-x-2 p-1">
        <div className={iconSize}>{children[0]}</div>
        <div className={textSize}>{children[1]}</div>
      </div>
    </div>
  );
}
