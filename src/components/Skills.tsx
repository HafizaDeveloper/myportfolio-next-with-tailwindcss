import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-22'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-3'>
                I have a solid foundation in programming with C++ and C, along with web development skills in HTML, CSS, and Java. I am also experienced in TypeScript and have worked with Flutter for mobile applications, along with proficiency in MS Office tools. Currently, I'm learning Next.js, Tailwind CSS, and JavaScript to further enhance my abilities in building dynamic, responsive applications. I am excited to keep expanding my skills as I grow in the tech field.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-blue-300 text-2xl sm:text-2xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">C, C++</h2>
                        <h2 data-aos="zoom-in-up">HTML, CSS</h2>
                        <h2 data-aos="zoom-in-up">Flutter</h2>
                        <h2 data-aos="zoom-in-up">Java, Typescript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">MS Office</h2>
                        <h2 data-aos="zoom-in-up">Tailwind(under learning)</h2>
                        <h2 data-aos="zoom-in-up">NextJS(under learning)</h2>
                        <h2 data-aos="zoom-in-up">Javascript(under learning)</h2>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Skills
