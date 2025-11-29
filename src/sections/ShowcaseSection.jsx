import React, { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y:50, opacity: 0
                },
                {
                    y:0, opacity:1, duration: 1, delay: (0.3)*(index+1),
                    scrollTrigger:{
                        trigger:card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })});

  return (
    <section id = "work" ref = {sectionRef} className='app-showcase '>
      <div className='w-full'>
        <div className='showcaselayout'>
        {/* LEFT */}
        <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper '>
                <img src='/images/PrepWise.png' alt='3D-Portfolio' className="w-full h-auto object-contain rounded-xl"/>
            </div>
            <div className='text-content'>
                <h2>PrepWise – AI-Powered Mock Interview & Skill Assessment Platform</h2>
                <p className='text-white-50 md:text-xl'>
                The platform evaluates responses for clarity, correctness, communication skills, and logical reasoning, then provides instant, actionable feedback.
                </p>
            </div>
        </div>
        {/* RIGHT */}
        <div className='project-list-wrapper overflow-hidden' >
            <div className='project' ref={project2Ref}>
                <div className='image-wrapper bg-[#ffefdb]'>
                    <img src='/images/3D-Dev-Portfolio.png' alt='Library Management Platform' className='rounded-xl'/>
                </div>
                <h2>3D Developer Portfolio — A Modern, Immersive Way to Present Work</h2>
            </div>

            <div className='project' ref={project3Ref}>
                <div className='image-wrapper bg-[#ffe7db]'>
                    <img src='/images/Simon-Game.png' alt='Simon Game'/>
                </div>
                <h2>Simon Web Game App – Test Your Memory Skills</h2>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
