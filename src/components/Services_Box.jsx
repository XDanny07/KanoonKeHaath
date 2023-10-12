export function Services_Box() {
  useEffect(() => {
    let i = 0;
    const slideimg = document.querySelector(".slidebgimg");
    const intv = setInterval(() => {
      slideimg.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slideshowimg[i]})`;
      i = (i + 1) % slideshowimg.length;
    }, 1000);
    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <div
      className={`group shadow-xl slidebgimg relative mx-auto w-[60%] h-[500px] cursor-pointer border border-neutral-500 rounded-md bg-[linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${slideshowimg[0]})]`}
    >
      <div className="absolute bottom-0 flex justify-between items-center p-10 w-full">
        <p className="group-hover:scale-110 transition-scale duration-100  p-2 text-white text-6xl font-medium">
          Services
        </p>
        <p>
          <BsArrowRight className="group-hover:scale-[1.2] transition-scale duration-100 text-white text-6xl font-medium" />
        </p>
      </div>
    </div>
  );
}
