function LoginSignUpInput({ placeholder, type, action }) {
  return (
    <div className=" flex justify-center items-center w-[90%]  mb-2">
      <input
        className=" pl-5 bg-neutral-100 w-[90%] h-[60px] text-neutral-400 text-[21.84px] font-semibold font-['Montserrat']"
        placeholder={placeholder}
        type={type}
        onChange={(e) => action(e.target.value)}
      />
    </div>
  );
}

export default LoginSignUpInput;
