import React from 'react';
import Type from "./Typewriter";

function About() {

    return(
        <section className="container">
            <h2 class="top-title">
                <div>
                    <Type />
                </div>
            </h2>
            <hr></hr>
            <div className='aboutMe'>
                <img class="mb-5" id="avatar" src="https://media-exp2.licdn.com/dms/image/C4E03AQHGRbuSjdHQ7w/profile-displayphoto-shrink_400_400/0/1657639070662?e=1663804800&v=beta&t=sqtWlab9hBb4Yk9vFNdkp4eZAd2hABGMbhdOrb7Y_WM" alt="Me" />

                <p>
                I am a full-stack web developer with a passion for everything tech! I enjoy working on wide variety of different projects. I attended Rutger's University Bootcamp, where I learned a wide variey of front-end and back-end skills such as JavaScript, HTML, CSS, React, MongoDB, MySQL, Node.js and other important technologies.
                </p>
                <p>
                I've worked closely with other developers in group settings to develop interesting applications that include both front and back end technology. I am comfortable working with a team and individually to build inituitve and resposive applications. 
                </p>
                <p>
                I find challenging work and projects exciting! Web development has become passion because my ability to continually explore new ideas and technologies will follow me throughout my career.
                </p>
            </div>
        </section>
    )
}

export default About;