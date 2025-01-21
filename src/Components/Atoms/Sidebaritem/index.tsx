const Sidebaritems = ({icon}: { icon: JSX.Element}) => {
  return (
    <a href="#">
       <div className="flex items-center transition-all hover:bg-white/5 w-fit py-2 px-5 rounded-xl">
        {icon}
      </div>
    </a>
  );
};
export default Sidebaritems
