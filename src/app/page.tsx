"use client";
import { useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import Button from "@/components/Button";
import useWindowSize from "@/hooks/useWindowSize";

const ImageLove = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    className="border-[3px] border-red-400 h-32 w-32 xl:h-72 xl:w-72 rounded-full object-cover"
  />
);

export default function Home() {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [newMessageButton, setNewMessageButton] = useState(false);

  return (
    <main className="bg-pink-200 min-h-screen w-full flex justify-center items-center">
      {success && <Confetti width={width} height={height} />}

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          {!success ? (
            <>
              <ImageLove src="/images/dph.jpeg" alt="he image" />

              <ImageLove src="/images/ea.jpeg" alt="she image" />
            </>
          ) : (
            <ImageLove src="/images/noi.jpeg" alt="image success" />
          )}
        </div>

        {success ? (
          <h1 className="text-2xl container px-5 font-bold mt-10">
           Știam că vei spune da, mulțumesc că ai ales să faci parte din viața mea
            mireasa cea mai frumoasa si frumoasa 💖 aminteste-ti mereu, promit sa daruiesc
            întotdeauna cel mai bun dintre mine, suntem o echipă fata mea 💖 ai devenit
            în cineva foarte important pentru mine, mulțumesc pentru dragostea pe care mi-o oferi💖 💖 
          </h1>
        ) : (
          <h1 className="text-2xl xl:text-4xl font-bold mt-10">
            Vrei să fii prietena mea?
          </h1>
        )}

        {!success && (
          <div className="flex items-center w-full mt-10 gap-5">
            {/* Yes */}
            <Button onClick={() => setSuccess(true)} className="flex-1">
              {newMessageButton ? "Nu" : "Da"}
            </Button>

            {/* No */}
            <Button
              onMouseEnter={() => setNewMessageButton(true)}
              onMouseLeave={() => setNewMessageButton(false)}
              onClick={() => setSuccess(true)}
              className="flex-1 hidden lg:block"
            >
              {newMessageButton ? "Da" : "Nu"}
            </Button>

            <Button
              onClick={() => setSuccess(true)}
              className="flex-1 block lg:hidden"
            >
              Yes
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
