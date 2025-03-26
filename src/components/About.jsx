import React from 'react'


const aboutItems = [
    {
      label: 'Projects done',
      number: 20
    },
    {
      label: 'Years of experience',
      number: 4
    }
  ];
  
const About = () => {
  return (
    <section id='about'
    className='section'
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[68ch]">
                 Welcome! I&apos;m Sanith, a full-stack web developer specializing in crafting visually stunning and high-performing websites. With expertise in technologies like HTML, CSS, JavaScript, React, Node.js, and database systems, I seamlessly blend creativity with technical precision to transform your vision into a digital masterpiece.

                </p>
                <div className="flex flex-wrap items-center 
                gap-4 md:gap-7
                ">
                    {aboutItems.map(({ label, number }, key) => {
                        return(
                            <div key={key}>
                                <div className="flex items-center
                                  md:mb-2
                                ">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        )
                    })}
                    <img src="/images/logo.svg" alt="Logo" 
                        width={30}
                        height={30}
                        className='ml-auto md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About