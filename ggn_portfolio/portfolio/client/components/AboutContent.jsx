import React, { useEffect } from 'react'
import "./AboutContent.css"
import AboutCard from './AboutCard'
import Tag from "./Tag"
import Button from './Button'

export default function AboutContent() {

    const education_details = <div style={{textAlign:"left"}}>
        <b>Bachelors (Honours) in Computer Science [2018-22]:</b>
        <br/>&emsp;◉ Heriot-Watt University.
        <br/>&emsp;◉ First Class, GPA 4.0/4.0.
        <br/><br/>

        <b>Grade 12 [2017-18]:</b>
        <br/>&emsp;◉ St. Joseph's School, Abu Dhabi.
        <br/>&emsp;◉ CBSE Indian Syllabus [Biology, Mathematics, Physics, Chemistry, English, French].
        <br/>&emsp;◉ 83% Overall. Physics School Topper.
        <br/><br/>

        <b>Grade 10 [2016-17]:</b>
        <br/>&emsp;◉ St. Joseph's School, Abu Dhabi.
        <br/>&emsp;◉ CBSE Indian Syllabus.
        <br/>&emsp;◉ CGPA 10/10. School Topper.        
    </div>;

    const language_details = <div style={{textAlign:"left"}}>
        <b>English:</b> Full Professional Proficiency.
        <br/><b>Malayalam:</b> Native.
        <br/><b>Hindi:</b> Fluent.
        <br/><b>French:</b> Elementary.
    </div>

    const hard_skill_details = <div style={{textAlign:"left"}}>
        <Tag text="Artificial Intelligence"/>
        <Tag text="Machine Learning"/>
        <Tag text="Deep Neural Networks"/>
        <Tag text="Convolutional Neural Networks"/>
        <Tag text="Natural Landguage Processing"/>
        <Tag text="Data Science" />
        <Tag text="Explorative Data Analysis"/>
        <Tag text="Data Visualization"/>
        <Tag text="Python" />
        <Tag text="PyTorch" /><Tag text="TensorFlow" />
        <Tag text="NumPy" /><Tag text="Pandas" /><Tag text="Scikit-Learn" />
        <Tag text="OpenCV" /><Tag text="PIL" />
        <Tag text="Jupyter Notebook" />
        <Tag text="Git" /><Tag text="GitHub" /><Tag text="GitLab" />
        <Tag text="Google Collaboratory" />
        <Tag text="MSExcel" /><Tag text="MSPowerPoint" /><Tag text="MSWord" />
        <Tag text="Java" />
        <Tag text="C" /><Tag text="C++" />
        <Tag text="SQL" /><Tag text="Database Schema Design" />
        <Tag text="Maya" /><Tag text="Blender" /><Tag text="Unreal Engine 4" /><Tag text="OpenGL" />
        <Tag text="HTML" /><Tag text="CSS" /><Tag text="JS" />
        <Tag text="D3.js" /><Tag text="ReactJS" /><Tag text="JQuery" />
        <Tag text="WeBots Robot Simulator" />
        <Tag text="Design patterns (like MVC)" />
        <Tag text="Object Oriented Programming" />
        <Tag text="UML" />
        <Tag text="ER diagrams" />
        <Tag text="Project Management" />
        <Tag text="Professional Writing" />
        <Tag text="Google FireBase" />
        <Tag text="Prolog" />
        <Tag text="OCaml" />
        <Tag text="PDDL" />
        <Tag text="Linux" />
    </div>

    const soft_skill_details = <div style={{textAlign:"left"}}>
        <Tag text="Communication" />
        <Tag text="Collaboration" />
        <Tag text="Adaptability" />
        <Tag text="Leadership" />
        <Tag text="Self Motivation" />
        <Tag text="Time Management" />
        <Tag text="Empathy" />
        <Tag text="Growth Mindset" />
        <Tag text="Ability and Desire to Learn" />
        <Tag text="Diligence" />
    </div>

    const recognition_details = <div style={{textAlign:"left"}}>
        <b>[ 2018 - 2022 ]</b> 
        <br/>&emsp;◉ Graduated ( 05 July 2022 ) Heriot-Watt University's "Bachelors in Computer Science Honours (4 years) program with 1st Class and GPA 4.0/4.0 (A grade for all subjects across all 4 years).
        <br/><br/>

        <b>[ 2022 ]</b>
            <br/>&emsp;◉ "Watt Club Medal" for the School of Mathematics and Computing Sciences (Heriot-Watt's highest award bestowed on 1 student per School).
            <br/>&emsp;◉ "Systems Consultants Ltd. Prize" on behalf of the Department of Computer Science.
            <br/>&emsp;◉ Completed dissertation "Gaze Estimation using Machine Learning" which recieved top grade from project supervisor as well as 2nd reader. This project was an individual reasearch based technical project. 
                <br/>&emsp;&emsp;<i>Broadly, the project</i>:
                    <br/>&emsp;&emsp;&emsp;1. Proposes, documents, implements and tests a novel way of image input.
                    <br/>&emsp;&emsp;&emsp;2. Proposes, documents, implements and tests, a new variation of a CNN based deep neural network which regresses human gaze point on a device screen from face/eye images of the human user.
                    <br/>&emsp;&emsp;&emsp;3. Performed inter and intra-model experiments where the proposed model was compared against variations of itself and against 3 other published state of the art models.
                    <br/>&emsp;&emsp;&emsp;4. Works using data from the largest existing benchmark dataset for gaze estimation tasks, "GazeCapture". Over 14 million images and associated meta data was managed, processed, analyzed, organized and optimized as part of the project.
                <br/>&emsp;<i>Key Achievement</i>:
                    <br/>The proposed model predicted output values with average Euclidian distance loss less than that of 2 published models. The model delivers this good perfromance while working with smaller than conventional (usually at least 100x100px) image sizes (this project worked with 80x80px images).
        <br/><br/>

        <b>[ 2021 ]</b>
            <br/>&emsp;◉ Hosted an episode of "Talking Tech - Women and Girls in ICT", a UN undertaking. Please find at: https://www.youtube.com/watch?v=k2RINGo8gbM&t=969s.
            <br/>&emsp;◉ Developed in a team of 8, a Social Media Inspired photo sharing app with gamified aspects to meet requirements set by a real client as organized by Heriot-Watt University. Our app recieved top grade. The experience granted lessons in agile project management, collaboration, technical documentation, various stages of the software development life cycle, and fast paced multi-stage project delivery under tight deadlines.
            <br/>&emsp;◉ Completed online 45 hrs course, "Beginning C++ Programming - From Beginning to Beyond" from Udemy.com.
            <br/>&emsp;◉ Was amongst few individuals to be selected from university to join the "Expo University Program" as "Student Champion".
        <br/><br/>

        <b>[ 2020 ]</b> 
            <br/>&emsp;◉ Completed online courses, "PH125.1x: Data Science: R Basics" and "PH125.2x: Data Science: Visualization" offered by "HarvardX" from edx.org.
            <br/>&emsp;◉ Completed online course "QMB1: Data Science: R Basics" offered by "HarvardX" from edx.org.
            <br/>&emsp;◉ Completed online course "Pet Psychology Certificate" from newskillsacademy.co.uk.
        <br/><br/>

        <b>[ 2019 ]</b>
            <br/>&emsp;◉ Was part of "UAE AI CAMP 2019".
        <br/><br/>
        
        <b>[ 2018 ]</b>
            <br/>&emsp;◉ Graduated high school CBSE Grade 12 with 83% overall (Mathematics, Biology, Physics, Chemistry, English, French) from St. Joseph's School, Abu Dhabi. Was school topper for Physics (95%).
            <br/>&emsp;◉ Completed online 7 hrs course, "Acting 101 for Adults" from Udemy.com.
        <br/><br/>

        <b>[ 2016 ]</b>
            <br/>&emsp;◉ Graduated high school CBSE Grade 10 with CGPA 10/10 from St. Joseph's School. Was school topper.
            <br/>&emsp;◉ Received "Sheikh Zayed Memorial Educational Award" in recognition of top performance in grade 10.
            <br/>&emsp;◉ Won 1st place at "Teens India UAE" talent competition for "Best Short Film" conceived, created and performed by me.
        <br/><br/>

        <b>[ 2016 - 2018 ]</b>
            <br/>&emsp;◉ ( High School ) Won prizes for talent shows, creative writing, art, elocution, cooking, photography, etc. Volunteered for work related to Health & Safety, Sales and as university fair advertising assistant.
        <br/><br/>

        <b>[ throughout life ]</b>
            <br/>&emsp;◉ Participated in several stage shows, film endeavors, sports, speaking/debate competitions, English writing and art competitions.
    </div>

    const interests_details = <div style={{textAlign:"left"}}>
        <Tag text="Acting" />
        <Tag text="Dance" />
        <Tag text="Animal Care" />
        <Tag text="Art and Craft" />
        <Tag text="Filmmaking" />
        <Tag text="Video Editing" />
        <Tag text="Digital Art" />
        <Tag text="Cooking" />
        <Tag text="Reading" />
        <Tag text="Watching TV / Movies" />
        <Tag text="Animation" />
        <Tag text="Roller Blading" />
        <Tag text="Swimming" />
        <Tag text="Meeting People" />
    </div>

    return (
        <>
            <div className='container'>
                <div id='about_salutation'>
                    <h1>Hi! I'm Gayathri!</h1>
                    <p className='typewriter'><b>Since</b> Feb 2000. <b>Until</b> you've forgotten me.</p>
                    <div id="about_buttons">
                        <Button img_src={"../assets/linkedin.png"} on_click={() => window.open("//www.linkedin.com/in/gayathrigirishnair")}/>
                        <Button img_src={"../assets/instagram.png"} on_click={() => window.open("https://www.instagram.com/gayathri_girish_nair/")}/>
                        <a href="../assets/ggn_cv.pdf" download="cv_gayathri_girish_nair"><Button img_src={"../assets/download.png"}/></a>
                    </div>
                </div>
                <div id="about_overview">
                    <div>I am a BSc. Honours Computer Science recent graduate (graduated on 05/07/2022) from Heriot-Watt University where, over the last 4 years, I've had a blast in acquiring lot's of technical / non-technical know-how that I'm now, more than ever, excited to apply to the work front for <i>your</i> benefit and that of society at large!</div>
                </div>
                <div id="about_gallary">
                    <AboutCard title="Education" content={education_details} color="#383278"/>
                    <AboutCard title="Languages" content={language_details} color="#4C57A6"/>
                    <AboutCard title="Hard Skills" content={hard_skill_details} color="#6087B8"/>
                    <AboutCard title="Soft Skills" content={soft_skill_details} color="#6DA9A3"/>
                    <AboutCard title="Hobbies and Interests" content={interests_details} color="#4B8A8F"/>
                    <AboutCard title="Recognitions" content={recognition_details} color="#3C6979"/>
                </div>
            </div>
        </>
    )
}
