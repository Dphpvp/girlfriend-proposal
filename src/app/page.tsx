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
              <ImageLove src="/images/he.jpeg" alt="he image" />

              <ImageLove src="/images/she.jpeg" alt="she image" />
            </>
          ) : (
            <ImageLove src="/images/both.jpeg" alt="image success" />
          )}
        </div>

        {success ? (
          <h1 className="text-2xl container px-5 font-bold mt-10">
            Sabía que dirías que sí, gracias por elegir ser parte de mi vida, mi
            novia la más bonita y hermosa 💖 recuerda siempre, que prometo dar
            siempre lo mejor de mí, somos un equipo my girl 💖 te has convertido
            en alguien muy importante para mí gracias por el amor que me das🫂💖
          </h1>
        ) : (
          <h1 className="text-2xl xl:text-4xl font-bold mt-10">
            ¿Quieres ser mi novia?
          </h1>
        )}

        {!success && (
          <div className="flex items-center w-full mt-10 gap-5">
            {/* Yes */}
            <Button onClick={() => setSuccess(true)} className="flex-1">
              {newMessageButton ? "No" : "Sí"}
            </Button>

            {/* No */}
            <Button
              onMouseEnter={() => setNewMessageButton(true)}
              onMouseLeave={() => setNewMessageButton(false)}
              onClick={() => setSuccess(true)}
              className="flex-1 hidden lg:block"
            >
              {newMessageButton ? "Sí" : "No"}
            </Button>

            <Button
              onClick={() => setSuccess(true)}
              className="flex-1 block lg:hidden"
            >
              Sí
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
