const Hero = ({ Component }) => {
  return (
    <section className={`relative w-full overflow-clip`}>
      {Component ? (
        <Component />
      ) : (
        <div>
          <h1 className='pt-56 text-center text-2xl font-bold text-rose-500 underline'>Hero is UNDEFINED</h1>
        </div>
      )}
    </section>
  );
};

export default Hero;
