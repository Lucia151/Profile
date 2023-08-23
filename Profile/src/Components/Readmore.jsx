import React from "react";
import "../App.css";

function ReadMore() {
    return (
        <div className="read-more-button" id="readMore">
            <div className="div">
                <p className="my-name-is-zizile">
                    My name is Zizile Ngcem, I&#39;m a young and motivated software developer intern with a strong desire to
                    transform innovative ideas into tangible digital solutions. Currently, I&#39;m pursuing a degree in IRM at
                    Unisa. The opportunity of embarking on this internship journey excites me as it presents a chance to refine my
                    skills and contribute to advanced projects. <br />
                    <br />
                    As a software developer intern, I am eager to take new challenges. My previous experiences have not only
                    refined my technical abilities but have also underscored the significance of teamwork, effective
                    communication, and adapting to dynamic project environments. <br /> <br />
                    The excited about the challenges and the opportunity for personal growth as a developer during this
                    internship. I firmly believe that a genuine software developer isn&#39;t limited to a single language or
                    framework; rather, our defining characteristic lies in our ability to adapt and learn.
                </p>
                <p className="technical-skills">
                Technical skills: <br />
                    Proficient in Java, Python, and JavaScript Familiar with&nbsp;&nbsp;
                    <br />
                    Agile development methodologies&nbsp;&nbsp;
                    <br />
                    Strong problem-solving and debugging skills. <br /> <br />
                    Soft skills: <br />
                    Excellent communication and interpersonal skills&nbsp;&nbsp;
                    <br />
                    Ability to work independently and as part of a team&nbsp;&nbsp;
                    <br />
                    Ability to learn new things quickly.
                </p>
                <p className="personal-touch">
                Personal Touch: <br />
                    Beyond coding, I enjoy hiking and capturing nature&#39;s beauty&nbsp;&nbsp;through photography. These
                    experiences fuel my creativity and keep me&nbsp;&nbsp;
                    <br />
                    inspired throughout my software development journey.
                </p>
                <img className="download-removebg" alt="Download removebg" src="download-1-removebg-preview-3.png" />
                <img className="img" alt="Download removebg" src="download-1-removebg-preview-4.png" />
                <img className="nav-bar" alt="Nav bar" src="nav-bar.svg" />
                <img className="logo" alt="Logo" src="logo.png" />
                <div className="text-wrapper">About</div>
                <div className="text-wrapper-2">Experience</div>
                <div className="text-wrapper-3">Projects</div>
                <div className="text-wrapper-4">Contact</div>
                <div className="rectangle" />
                <div className="text-wrapper-5">Hire me</div>

                {/* Adding the button */}
                {/* <button className="custom-button">Read More</button> */}
            </div>
        </div>
    );
}

export default ReadMore;
