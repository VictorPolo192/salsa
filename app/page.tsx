"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Page() {
  const heroRef = useRef<HTMLElement>(null)
  const mongoRef = useRef<HTMLImageElement>(null)
  const solRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const exitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: () => ScrollTrigger.maxScroll(window),
          scrub: 1,
        },
      })

      exitTimeline
        .to(
          solRef.current,
          {
            x: () => window.innerWidth,
            autoAlpha: 0,
            ease: "power2.in",
          },
          0,
        )
        .to(
          mongoRef.current,
          {
            x: () => -window.innerWidth,
            autoAlpha: 0,
            ease: "power2.in",
          },
          0,
        )
    },
    { scope: heroRef },
  )

  return (
    <>
      <main
        ref={heroRef}
        className="relative isolate flex min-h-[900px] w-screen justify-center overflow-hidden bg-gradient-to-b from-[#4f91f7] via-[#8b83dc] to-[#c5a2e8]"
      >
        <Image
          src="/sol.webp"
          ref={solRef}
          alt=""
          width={860}
          height={1111}
          className="absolute bottom-[40%] left-[58%] z-0 h-[55%] w-auto max-w-none object-contain object-bottom sm:left-[66%] sm:h-[60%]"
          sizes="(max-width: 640px) 40vw, 30vw"
          aria-hidden="true"
        />
        <Image
          src="/background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-10 object-cover object-bottom"
          aria-hidden="true"
        />
        <Image
          src="/mongo.webp"
          ref={mongoRef}
          alt="Mogo, el personaje del hero"
          width={1405}
          height={2313}
          className="absolute bottom-0 left-[4%] z-20 h-[78%] w-auto max-w-[60vw] object-contain object-bottom sm:left-[10%] sm:h-[88%] sm:max-w-none"
          sizes="(max-width: 640px) 60vw, 40vw"
        />
        <div className="relative z-30 min-h-[900px] w-[1368px] max-w-full bg-transparent p-6">
          <NavbarDemo />
        </div>
      </main>
      <section className="relative isolate min-h-[675px] w-screen overflow-hidden pt-[75px]">
        <video
          src="/caballo.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full -scale-x-100 object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-pink-500/40" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[600px] w-[1368px] max-w-full grid-cols-1 md:grid-cols-2">
          <div className="flex min-h-[300px] items-center justify-center bg-[#d1d5db]/65 p-8 text-left md:min-h-[600px]">
            <p className="max-w-xl font-serif text-2xl font-bold text-black md:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex min-h-[300px] items-center justify-center bg-[#22c55e]/65 p-8 md:min-h-[600px]">
            <video
              src="/caballo.webm"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full max-w-2xl rounded-[15px] shadow-[0_20px_45px_rgba(236,72,153,0.35)]"
            />
          </div>
        </div>
      </section>
    </>
  )
}
