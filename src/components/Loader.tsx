import LoaderFile from "@/assets/Loading.webm";

const Loader = () => {
  return (
    <div className='absolute transition-opacity  w-full h-full flex items-center justify-center top-0 left-0 bg-black bg-opacity-75'>
      {" "}
      <video autoPlay muted loop>
        <source src={LoaderFile} type='video/webm' />
      </video>
    </div>
  );
};

export default Loader;
