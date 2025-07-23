const Button = ({
  title,
  id,
  rightIcon = null,
  leftIcon = null,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative inline-flex items-center gap-2 z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
