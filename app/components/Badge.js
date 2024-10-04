function Badge({ children }) {
  return (
    <div className="flex bg-slate-200 text-slate-700 h-fit max-w-fit items-center gap-1 px-3  text-xs py-1">
      <div className="flex items-center whitespace-nowrap">{children}</div>
    </div>
  );
}

export default Badge;
