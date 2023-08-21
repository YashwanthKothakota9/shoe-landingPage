const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-5 border font-montserrat text-lg leading-none rounded-full transition ease-in-out duration-300 hover:translate-y-1 hover:scale-120 delay-150  
    ${
      backgroundColor
        ? `${backgroundColor} 
      ${borderColor} ${textColor}`
        : "bg-green-500  text-white border-green-100}"
    } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
