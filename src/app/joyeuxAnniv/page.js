"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function MesageAnniv() {
  return (
    <div className="h-full">
      <header className="relative w-full aspect-1500/92">
        <Image
          src="/header.png"
          alt="acc"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </header>
      <main className="flex flex-col md:flex-row w-full h-100vh items-center justify-around gap-5 ">
        <div>
          <div className="w-full max-w-[200px]">
            <video
              src={
                "https://media.tenor.com/fjFefVXbjosAAAPo/funny-dog-dance-dancing-dog.mp4"
              }
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-center text-5xl font-extrabold italic">
            Joyeux Anniversaires Math !
          </h1>
          <p className="text-center text-2xl">
            On ne sait pas si tu as déjà eu un joyeux anniversaire comme cela !
          </p>
          <p className="text-center text-2xl">
            C'est pour rendre le passage de la quarantaine plus attrayant ...
          </p>
        </div>
        <div className="w-full max-w-[200px]">
          <video
            src={"https://media.tenor.com/-kx4msGXmN8AAAPo/happy-dance.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}
