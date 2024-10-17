export const WavesSvg = () => {
  return (
    <>
      <svg
        className="absolute bottom-0 left-0 w-screen h-[150px] z-0" // Cambiamos w-full a w-screen
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M0,256L30,240C60,224,120,192,180,192C240,192,300,224,360,245.3C420,267,480,277,540,240C600,203,660,117,720,85.3C780,53,840,75,900,106.7C960,138,1020,180,1080,186.7C1140,192,1200,160,1260,133.3C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
