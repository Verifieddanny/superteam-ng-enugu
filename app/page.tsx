"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  const letterRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const enuguRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const setLetterRef = (index: number) => (el: HTMLParagraphElement | null) => {
    letterRefs.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const letters = letterRefs.current.filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 2,
        markers: true // Remove in production
      }
    });

    // First animation: Disperse letters and image
    letters.forEach((letter) => {
      const randomX = (Math.random() - 0.5) * 1000;
      const randomY = (Math.random() - 0.5) * 1000;
      
      tl.to(letter, {
        x: randomX,
        y: randomY,
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 360,
      }, "<");
    });

    // Animate the image along with the letters
    tl.to(imageRef.current, {
      x: 500,
      y: -300,
      opacity: 0,
      scale: 0,
      rotate: 360,
    }, "<");

    // Create a smoother scale animation for Enugu text
    tl.to(enuguRef.current, {
      scale: 50,
      x: -2200,
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
    })
    .to(enuguRef.current, {
      scale: 150,
      x: -5500,
      y: 0,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
    });

    // Fade in the white background and content of the next section
    tl.fromTo(nextSectionRef.current, 
      {
        backgroundColor: "transparent",
        opacity: 0,
      }, 
      {
        backgroundColor: "white",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5" // Start slightly before the previous animation ends
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <main className="overflow-hidden relative">
      <div className="md:w-[24rem] md:h-[24rem] w-[12rem] h-[12rem] bg-[#00ff9d7a] rounded-full blur-md absolute -left-[5rem] -top-[5rem]"></div>
      <div className="md:w-[24rem] md:h-[24rem] w-[12rem] h-[12rem] bg-[#8c00ff7a] rounded-tl-full blur-md absolute right-0 responsiveDiv"></div>


      

           <Image 
            src="/assets/nigeria-apple.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="w-[8rem] h-[7rem] blur-sm absolute left-[4rem] top-[6rem] drop-shadow-lg md:block hidden" 
          />

          <Image 
            src="/assets/nigeria-apple.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="w-[8rem] h-[7rem] blur-sm absolute right-[4rem] top-[6rem] md:block hidden" 
          />

          <Image 
            src="/assets/logo.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="w-[8rem] h-[7rem] blur-sm absolute md:right-[40rem] md:top-[50rem]  right-7 top-[80dvh]" 
          />


          <Image 
            src="/assets/logo.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="w-[8rem] h-[7rem] blur-sm absolute md:left-[40rem] md:top-[50rem]  left-7 top-[80dvh]" 
          />


          <Image 
            src="/assets/logo.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="w-[8rem] h-[7rem] blur-sm absolute left-[55rem] top-[35rem] md:block hidden" 
          />


      <div ref={containerRef} className="min-h-screen md:pt-[5rem] pt-[20rem] relative">
        <div className="w-full flex items-center justify-center gap-x-1 md:text-[8rem] text-[2rem] font-bold text-white">
          {"SuperteamNG".split('').map((letter, index) => (
            <p
              key={index}
              ref={setLetterRef(index)}
            >
              {letter}
            </p>
          ))}
          <Image 
            ref={imageRef as any}
            src="/assets/nigeria-apple.png" 
            alt="nigeria" 
            width={400} 
            height={300} 
            quality={80}
            className="md:w-[8rem] md:h-[7rem] w-[2rem] h-[1.75rem]" 
          />
        </div>
        <p 
          ref={enuguRef}
          className="md:text-[8rem] text-[2rem] font-bold text-white text-center transform-gpu"
          style={{ transformOrigin: 'center center' }}
        >
          Enugu
        </p>

        {/* Next section */}
        <div 
          ref={nextSectionRef}
          className="min-h-screen w-full bg-white flex items-center justify-center absolute top-0 left-0 noise"
        >
          <h2 className="text-black text-[4rem] ">Next Section</h2>
        </div>
      </div>

      <div className="h-screen w-full"></div>
    </main>
  );
}