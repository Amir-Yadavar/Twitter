export default function SidebarItemMenu({ text, Icon, active }) {
  return (
    <div className="hoverEffect flex items-center justify-center text-gray-700 xl:justify-start text-lg space-x-3 my-1">
      <Icon className="h-7 " />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
