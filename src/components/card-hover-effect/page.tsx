import { CardHoverEffect } from "./card-hover-effect";

const CardHoverPage = () => {
  return (
    <div className="bg-amber-50 h-dvh w-dvw grid place-items-center">
      <style>
        {`  
            .mona-sans-600 {
                font-family: "Mona Sans", sans-serif;
                font-optical-sizing: auto;
                font-weight: 600;
                font-style: normal;
                font-variation-settings: "wdth" 100;
            }
            
            .cormorant-800 {
                font-family: "Cormorant", serif;
                font-optical-sizing: auto;
                font-weight: 700;
                font-style: normal;
            }
        `}
      </style>
      <div className="wrapper flex flex-col items-center mona-sans-600 text-slate-900">
        <h2 className="text-6xl uppercase text-center ">
          What's up
          <br />
          <span className="cormorant-800 text-7xl"> on Socials</span>
        </h2>
        <CardHoverEffect className="mt-6 mb-8" />
        <p className="text-3xl text-center cormorant-800">
          Follow us on social media
        </p>
      </div>
    </div>
  );
};

export default CardHoverPage;
