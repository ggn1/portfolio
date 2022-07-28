import React from 'react'
import "./AboutContent.css"
import AboutCard from './AboutCard'

export default function AboutContent() {

    const education_details = [
        "Bachelors (Honours) in Computer Science [2018-22]. Heriot-Watt University. First Class. GPA 4.0/4.0.",
        "Grade 12 [2017-18]. St. Joseph's School, Abu Dhabi. CBSE Indian Syllabus [Biology, Mathematics, Physics, Chemistry, English, French]. 83% Overall. Physics School Topper.",
        "Grade 10 [2016-17]. St. Joseph's School, Abu Dhabi. CBSE Indian Syllabus. CGPA 10/10. School Topper."
    ];

    const language_details = [
        "English: Full Professional Proficiency",
        "Malayalam: Native",
        "Hindi: Professional Proficiency",
        "French: Elementary Proficiency"
    ]

    return (
        <div className='container'>
            <div id='about_salutation'>
                <h1>Hi! I'm Gayathri!</h1>
                <p><b>Since</b> Feb 2000. <b>Until</b> you've forgotten me.</p>
            </div>
            <div id="about_overview">
                I am a BSc. Honours Computer Science recent graduate (graduated on 05/07/2022) from Heriot-Watt University where, over the last 4 years, I've had a blast in acquiring lot's of technical / non-technical know-how that I'm now, more than ever, excited to apply to the work front for <i>your</i> benefit and that of society at large!
            </div>
            <div id="about_gallary">
                <AboutCard title="Education" content_list={education_details}/>
                <AboutCard title="Languages" content_list={language_details}/>
            </div>
        </div>
    )
}
