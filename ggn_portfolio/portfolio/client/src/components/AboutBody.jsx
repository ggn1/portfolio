import React, { useState, useContext } from 'react'
import Button from './Button'
import Tag from "./Tag"
import Gallery from "./Gallery"
import Axios from "axios"
import { gallery_context } from "../Context"
import "./AboutBody.css"

export default function AboutBody() {

    const fetch_gallery_items = async (category) => {
        let window_location = window.location.href;
        let url = window_location.replace( // heroku
            window_location.slice(0, window_location.lastIndexOf("/")),
            "https://ggn-portfolio-website.herokuapp.com"
        );
        url += "/gallery/get?category=" + category;
        Axios.get(url).then(response => {
            set_gallery({data: response.data});
        }).catch(error => console.error("ERROR:", error));
    }

    const personal_details = <div>
        <h1>Personal Details</h1>
        <p>
            I'm a Computer Scientist with special interest in Artificial Intelligence and Data Science. I've had a blast in honing technical and non-technical know-how from experience gained at both my current workplace, as well as 4 years under Heriot-Watt University's BSc. Honours in Computer Science program. I'm excited as ever, to apply my skills at work front for <i>your</i> benefit and that of society at large!
        </p><br/>
        <p>Hailing from <b>India</b>, languages I've acquired include, <b>Malayalam</b> (Native), <b>English</b> (Full Fluency), <b>Hindi</b> (Fluent) and French (Elementary)</p>
    </div>

    const work_experience = <div>
        <h1>Work Experience</h1>
        <b>September 2022 to Present:</b> Machine Learning Engineer at <a 
            href="https://commtelnetworks.com/"
            target="_blank" 
            style={{"color":"blue"}}
        >Commtel Networks</a>.       
    </div>;

    const education = <div>
        <div className='about_plus'>
            <h1>Education</h1>
            <Button img_src="../../plus.png" on_click={() => fetch_gallery_items("education")}/>
        </div>
        <b>Bachelors (Honours) in Computer Science [2018-22]:</b>
        <br/>◉ Heriot-Watt University.
        <br/>◉ First Class, GPA 4.0/4.0.
        <br/><br/>

        <b>Grade 12 [2017-18]:</b>
        <br/>◉ St. Joseph's School, Abu Dhabi.
        <br/>◉ CBSE Indian Syllabus [Biology, Mathematics, Physics, Chemistry, English, French].
        <br/>◉ 83% Overall. Physics School Topper.
        <br/><br/>

        <b>Grade 10 [2016-17]:</b>
        <br/>◉ St. Joseph's School, Abu Dhabi.
        <br/>◉ CBSE Indian Syllabus.
        <br/>◉ CGPA 10/10. School Topper.        
    </div>;

    const skills = <div>
        <h1>Skills</h1>
        <div className="about_tag_container">
            <div>
                <div style={{textAlign: "center"}}><b>Hard</b></div>
                <div>
                    <Tag text="Artificial Intelligence"/>
                    <Tag text="Machine Learning"/>
                    <Tag text="Deep Neural Networks"/>
                    <Tag text="Convolutional Neural Networks"/>
                    <Tag text="Natural Language Processing"/>
                    <Tag text="Data Science" />
                    <Tag text="Explorative Data Analysis"/>
                    <Tag text="Data Visualization"/>
                    <Tag text="Python" />
                    <Tag text="PyTorch" />
                    <Tag text="TensorFlow" />
                    <Tag text="NumPy" />
                    <Tag text="Pandas" />
                    <Tag text="Scikit-Learn" />
                    <Tag text="OpenCV" />
                    <Tag text="PIL" />
                    <Tag text="Jupyter Notebook" />
                    <Tag text="Git" />
                    <Tag text="GitHub" />
                    <Tag text="GitLab" />
                    <Tag text="Google Collaboratory" />
                    <Tag text="MSExcel" />
                    <Tag text="MSPowerPoint" />
                    <Tag text="MSWord" />
                    <Tag text="Java" />
                    <Tag text="C++" />
                    <Tag text="SQL" />
                    <Tag text="Database Schema Design" />
                    <Tag text="Maya" />
                    <Tag text="Blender" />
                    <Tag text="Unreal Engine 4" />
                    <Tag text="HTML" /><Tag text="CSS" /><Tag text="JS" />
                    <Tag text="D3.js" /><Tag text="ReactJS" />
                    <Tag text="WeBots Robot Simulator" />
                    <Tag text="Design patterns (like MVC)" />
                    <Tag text="Object Oriented Programming" />
                    <Tag text="UML" />
                    <Tag text="ER diagrams" />
                    <Tag text="Google FireBase" />
                </div>
            </div>
            <div>
            <div style={{textAlign: "center"}}><b>Soft</b></div>
            <div>
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
                <Tag text="Project Management" />
                <Tag text="Professional Writing" />
            </div>
        </div>
        </div>
    </div>

    const achievements = <div>
        <div className='about_plus'>
            <h1>Achievements</h1>
            <Button img_src="../../plus.png" on_click={() => fetch_gallery_items("achievements")}/>
        </div>
        <b>[ 2018 - 2022 ]</b> 
        <br/>◉ Graduated ( 05 July 2022 ) Heriot-Watt University's "Bachelors in Computer Science Honours (4 years) program with 1st Class and GPA 4.0/4.0 (A grade for all subjects across all 4 years).
        <br/><br/>

        <b>[ 2022 ]</b>
            <br/>◉ "Watt Club Medal" for the School of Mathematics and Computing Sciences (Heriot-Watt's highest award bestowed on 1 student per School).
            <br/>◉ "Systems Consultants Ltd. Prize" on behalf of the Department of Computer Science.
            <br/>◉ Completed dissertation "Gaze Estimation using Machine Learning" which recieved top grade from project supervisor as well as 2nd reader. This project was an individual reasearch based technical project. 
                <br/><i>Broadly, the project</i>:
                    <br/>1. Proposes, documents, implements and tests a novel way of image input.
                    <br/>2. Proposes, documents, implements and tests, a new variation of a CNN based deep neural network which regresses human gaze point on a device screen from face/eye images of the human user.
                    <br/>3. Performed inter and intra-model experiments where the proposed model was compared against variations of itself and against 3 other published state of the art models.
                    <br/>4. Works using data from the largest existing benchmark dataset for gaze estimation tasks, "GazeCapture". Over 14 million images and associated meta data was managed, processed, analyzed, organized and optimized as part of the project.
                <br/><i>Key Achievement</i>:
                    <br/>The proposed model predicted output values with average Euclidian distance loss less than that of 2 published models. The model delivers this good perfromance while working with smaller than conventional (usually at least 100x100px) image sizes (this project worked with 80x80px images).
        <br/><br/>

        <b>[ 2021 ]</b>
            <br/>◉ Hosted an episode of "Talking Tech - Women and Girls in ICT", a UN undertaking. Please find at: https://www.youtube.com/watch?v=k2RINGo8gbM&t=969s.
            <br/>◉ Developed in a team of 8, a Social Media Inspired photo sharing app with gamified aspects to meet requirements set by a real client as organized by Heriot-Watt University. Our app recieved top grade. The experience granted lessons in agile project management, collaboration, technical documentation, various stages of the software development life cycle, and fast paced multi-stage project delivery under tight deadlines.
            <br/>◉ Completed online 45 hrs course, "Beginning C++ Programming - From Beginning to Beyond" from Udemy.com.
            <br/>◉ Was amongst few individuals to be selected from university to join the "Expo University Program" as "Student Champion".
        <br/><br/>

        <b>[ 2020 ]</b> 
            <br/>◉ Completed online courses, "PH125.1x: Data Science: R Basics" and "PH125.2x: Data Science: Visualization" offered by "HarvardX" from edx.org.
            <br/>◉ Completed online course "QMB1: Data Science: R Basics" offered by "HarvardX" from edx.org.
            <br/>◉ Completed online course "Pet Psychology Certificate" from newskillsacademy.co.uk.
        <br/><br/>

        <b>[ 2019 ]</b>
            <br/>◉ Was part of "UAE AI CAMP 2019".
        <br/><br/>

        <b>[ 2018 ]</b>
            <br/>◉ Graduated high school CBSE Grade 12 with 83% overall (Mathematics, Biology, Physics, Chemistry, English, French) from St. Joseph's School, Abu Dhabi. Was school topper for Physics (95%).
            <br/>◉ Completed online 7 hrs course, "Acting 101 for Adults" from Udemy.com.
        <br/><br/>

        <b>[ 2016 ]</b>
            <br/>◉ Graduated high school CBSE Grade 10 with CGPA 10/10 from St. Joseph's School. Was school topper.
            <br/>◉ Received "Sheikh Zayed Memorial Educational Award" in recognition of top performance in grade 10.
            <br/>◉ Won 1st place at "Teens India UAE" talent competition for "Best Short Film" conceived, created and performed by me.
        <br/><br/>

        <b>[ 2016 - 2018 ]</b>
            <br/>◉ ( High School ) Won prizes for talent shows, creative writing, art, elocution, cooking, photography, etc. Volunteered for work related to Health & Safety, Sales and as university fair advertising assistant.
        <br/><br/>

        <b>[ throughout life ]</b>
            <br/>◉ Participated in several stage shows, film endeavors, sports, speaking/debate competitions, English writing and art competitions.
    </div>

    const hobbies_interests = <div className='about_tag_container'>
        <div className='about_plus'>
            <h1>Hobbies & Interests</h1>
            <Button img_src="../../plus.png" on_click={() => fetch_gallery_items("hobbies_interests")}/>
        </div>
        <div>
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
    </div>

    const [display_content, set_display_content] = useState(personal_details);
    const [gallery, set_gallery] = useState(null);

    return (
        <div id="about_body">
            <div id="about_salutation">
                <h1>Hi! I'm Gayathri!</h1>
                <p><b>Since</b> 15 Feb 2000. <b>Until</b> you've forgotten me.</p>
                <div id="about_buttons">
                    <Button img_src={"../../linkedin.png"} on_click={() => window.open("//www.linkedin.com/in/gayathrigirishnair")}/>
                    <Button img_src={"../../instagram.png"} on_click={() => window.open("https://www.instagram.com/gayathri_girish_nair/")}/>
                    <a href="../../ggn_cv.pdf" download="cv_gayathri_girish_nair"><Button img_src={"../../download.png"}/></a>
                </div>
            </div>
            <div id="about_icon_box">
                <Button img_src="../../personal_details.png" on_click={() => {
                    set_display_content(personal_details);
                    set_gallery(null);
                }} />
                <Button img_src="../../work_experience.png" on_click={() => {
                    set_display_content(work_experience);
                    set_gallery(null);
                }} />
                <Button img_src="../../education.png" on_click={() => {
                    set_display_content(education);
                    set_gallery(null);
                 }} />
                <Button img_src="../../skills.png" on_click={() => {
                    set_display_content(skills);
                    set_gallery(null);
                }} />
                <Button img_src="../../hobbies_interests.png" on_click={() => {
                    set_display_content(hobbies_interests);
                    set_gallery(null);
                }} />
                <Button img_src="../../achievements.png" on_click={() => {
                    set_display_content(achievements);
                    set_gallery(null);
                }} />
            </div>
            <gallery_context.Provider value={{set_gallery}}>
                <div id="about_content">
                    {gallery ? <Gallery data={gallery.data} /> : display_content}
                </div>
            </gallery_context.Provider>
        </div>
    )
}
