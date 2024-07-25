import React, { useEffect } from "react";

import "./Home.css";
import { useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

import Typed from "typed.js";

const Home = () => {
  const [showPopupMenu, setPopupMenu] = useState(false);
  const [skill, setSkill] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    let circularProgressEL1 = document.getElementById("circular-progress-id1");
    let progressValueEL1 = document.getElementById("progress-value-id1");
    let progressStartValue1 = 0,
      progressEndValue1 = 75,
      speed1 = 40;

    let progress1 = setInterval(() => {
      progressStartValue1++;
      progressValueEL1.textContent = `${progressStartValue1}%`;
      circularProgressEL1.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue1 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue1 === progressEndValue1) {
        clearInterval(progress1);
      }
    }, speed1);
  }, [skill]);

  useEffect(() => {
    let circularProgressEL2 = document.getElementById("circular-progress-id2");
    let progressValueEL2 = document.getElementById("progress-value-id2");
    let progressStartValue2 = 0,
      progressEndValue2 = 75,
      speed2 = 40;

    let progress2 = setInterval(() => {
      progressStartValue2++;
      progressValueEL2.textContent = `${progressStartValue2}%`;
      circularProgressEL2.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue2 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue2 === progressEndValue2) {
        clearInterval(progress2);
      }
    }, speed2);
  }, [skill]);

  useEffect(() => {
    let circularProgressEL3 = document.getElementById("circular-progress-id3");
    let progressValueEL3 = document.getElementById("progress-value-id3");
    let progressStartValue3 = 0,
      progressEndValue3 = 80,
      speed3 = 37;

    let progress3 = setInterval(() => {
      progressStartValue3++;
      progressValueEL3.textContent = `${progressStartValue3}%`;
      circularProgressEL3.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue3 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue3 === progressEndValue3) {
        clearInterval(progress3);
      }
    }, speed3);
  }, [skill]);

  useEffect(() => {
    let circularProgressEL4 = document.getElementById("circular-progress-id4");
    let progressValueEL4 = document.getElementById("progress-value-id4");
    let progressStartValue4 = 0,
      progressEndValue4 = 85,
      speed4 = 35;

    let progress4 = setInterval(() => {
      progressStartValue4++;
      progressValueEL4.textContent = `${progressStartValue4}%`;
      circularProgressEL4.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue4 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue4 === progressEndValue4) {
        clearInterval(progress4);
      }
    }, speed4);
  }, [skill]);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer"], // Array of strings to type
      typeSpeed: 100, // Speed of typing
      backSpeed: 100, // Speed of backspacing
      backDelay: 1000, // Delay before starting to backspace
      loop: true, // Whether to loop the animation
    };
    const typed = new Typed(".text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const onClickMenu = () => {
    setPopupMenu((pre) => !pre);
  };

  const onClickPopUp = () => {
    setPopupMenu((pre) => !pre);
  };

  const onClickSkill = () => {
    let circularProgressEL1 = document.getElementById("circular-progress-id1");
    let progressValueEL1 = document.getElementById("progress-value-id1");
    let progressStartValue1 = 0,
      progressEndValue1 = 75,
      speed1 = 40;

    let progress1 = setInterval(() => {
      progressStartValue1++;
      progressValueEL1.textContent = `${progressStartValue1}%`;
      circularProgressEL1.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue1 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue1 === progressEndValue1) {
        clearInterval(progress1);
      }
    }, speed1);

    let circularProgressEL2 = document.getElementById("circular-progress-id2");
    let progressValueEL2 = document.getElementById("progress-value-id2");
    let progressStartValue2 = 0,
      progressEndValue2 = 75,
      speed2 = 40;

    let progress2 = setInterval(() => {
      progressStartValue2++;
      progressValueEL2.textContent = `${progressStartValue2}%`;
      circularProgressEL2.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue2 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue2 === progressEndValue2) {
        clearInterval(progress2);
      }
    }, speed2);

    let circularProgressEL3 = document.getElementById("circular-progress-id3");
    let progressValueEL3 = document.getElementById("progress-value-id3");
    let progressStartValue3 = 0,
      progressEndValue3 = 80,
      speed3 = 37;

    let progress3 = setInterval(() => {
      progressStartValue3++;
      progressValueEL3.textContent = `${progressStartValue3}%`;
      circularProgressEL3.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue3 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue3 === progressEndValue3) {
        clearInterval(progress3);
      }
    }, speed3);

    let circularProgressEL4 = document.getElementById("circular-progress-id4");
    let progressValueEL4 = document.getElementById("progress-value-id4");
    let progressStartValue4 = 0,
      progressEndValue4 = 85,
      speed4 = 35;

    let progress4 = setInterval(() => {
      progressStartValue4++;
      progressValueEL4.textContent = `${progressStartValue4}%`;
      circularProgressEL4.style.background = `conic-gradient( rgb(255, 189, 57) ${
        progressStartValue4 * 3.6
      }deg, rgb(25, 25, 25) 0deg)`;
      if (progressStartValue4 === progressEndValue4) {
        clearInterval(progress4);
      }
    }, speed4);
  };
  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangeNumber = (e) => {
    setNumberValue(e.target.value);
  };
  const onChangeText = (e) => {
    setTextValue(e.target.value);
  };

  const onClickSubmit = () => {
    setNameValue("");
    setEmailValue("");
    setNumberValue("");
    setTextValue("");
  };

  return (
    <div className="main">
      <div className="Nav-main-container">
        <div className="nav-logo-container">
          <a href="#Home" className="name-a">
            <h1 className="logo-heading">
              V<span className="text-span">ignesh.</span>
            </h1>
          </a>
        </div>
        <ul className="nav-menu-container">
          <a href="#Home">
            <li className="menu-name">Home</li>
          </a>
          <a href="#About">
            <li className="menu-name">About</li>
          </a>
          <a href="#Skills">
            <li className="menu-name" onClick={onClickSkill}>
              Skills
            </li>
          </a>
          <a href="#Projects">
            <li className="menu-name">Projects</li>
          </a>
          <a href="#Contact">
            <li className="menu-name">Contact</li>
          </a>
        </ul>
        <div className="button-container">
          <div>
            {showPopupMenu ? (
              <button
                onClick={onClickMenu}
                className="menu-button"
                type="button"
              >
                <RiCloseLine className="dots-menu" />
              </button>
            ) : (
              <button
                onClick={onClickMenu}
                className="menu-button"
                type="button"
              >
                <HiMenu className="dots-menu" />
              </button>
            )}
          </div>
        </div>
      </div>
      {showPopupMenu && (
        <div className="popup-container">
          <ul className="popup-menu-container">
            <a href="#Home" onClick={onClickPopUp}>
              <li className="menu-name">Home</li>
            </a>
            <a href="#About" onClick={onClickPopUp}>
              <li className="menu-name">About</li>
            </a>
            <a href="#Skills" onClick={onClickPopUp}>
              <li className="menu-name">Skills</li>
            </a>
            <a href="#Projects" onClick={onClickPopUp}>
              <li className="menu-name">Projects</li>
            </a>
            <a href="#Contact" onClick={onClickPopUp}>
              <li className="menu-name">Contact</li>
            </a>
          </ul>
        </div>
      )}
      <div id="Home" className="home-main-container">
        <div className="profile-info-container">
          <h3>Hello I'm</h3>
          <h1>Vignesh Koduru</h1>
          <h2>
            And I'm a <span className="text"></span>
          </h2>
          <p>
            I am passionate about creating responsive interfaces. I'm eager to
            create user-friendly and visually appealing web experiences.
          </p>
          <a href="#About">
            <button className="more-abt-btn">More About Me</button>
          </a>
        </div>
        <div className="profile-pic-container">
          <div>
            <img
              className="profile-pic"
              src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1721830211/vignesh_bfmfuy.jpg"
              alt="profile-pic"
            />
          </div>
        </div>
      </div>

      <div id="About" className="about-main-container">
        <div className="profile-pic-container2">
          <img
            className="profile-pic2"
            src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1721830211/vignesh_bfmfuy.jpg"
            alt="profile-pic"
          />
        </div>
        <div className="profile-info-container2">
          <h1 id="abt-me-id">About Me</h1>
          <h2 id="dev-id">Frontend Developer!</h2>
          <p>
            Hello! My name is Koduru Vignesh, and I am a passionate and
            enthusiastic frontend developer. I have a solid understanding of
            HTML, CSS, and JavaScript, which I used to build and design
            responsive, user-friendly websites. During my coursework and
            personal projects, I've worked with various frontend technologies
            and modern frameworks like React Js. I'm also committed to
            continuous learning and staying updated with the latest industry
            trends and best practices.{" "}
          </p>
        </div>
      </div>

      <div id="Skills" className="skills-main-container">
        <div className="techskills-container">
          <h1 className="tech-heading">
            Technical <span className="v-span">Skills</span>
          </h1>

          <div className="percentage-main-container">
            <FaHtml5 class="html-logo" />
            <p>HTML 90%</p>
            <div className="percentage-bar">
              <div className="bar html-bar"></div>
            </div>
          </div>

          <div className="percentage-main-container">
            <FaCss3Alt class="css-logo" />
            <p>CSS 65%</p>
            <div className="percentage-bar">
              <div className="bar css-bar"></div>
            </div>
          </div>

          <div className="percentage-main-container">
            <IoLogoJavascript class="js-logo" />
            <p>JAVASCRIPT 75%</p>
            <div className="percentage-bar">
              <div className="bar js-bar"></div>
            </div>
          </div>

          <div className="percentage-main-container">
            <FaReact class="react-logo" />
            <p>REACT 75%</p>
            <div className="percentage-bar">
              <div className="bar react-bar"></div>
            </div>
          </div>
        </div>

        <div className="proffionalskills-container">
          <div class="heading-container">
            <h1 className="proffisional-heading">
              Proffisional <span className="v-span">Skills</span>
            </h1>
          </div>
          <div className="main-container">
            <div className="container">
              <div id="circular-progress-id1" className="circular-progress">
                <span id="progress-value-id1" className="progress-value">
                  0%
                </span>
              </div>
              <span className="text-p">Communication</span>
            </div>

            <div className="container">
              <div id="circular-progress-id2" className="circular-progress">
                <span id="progress-value-id2" className="progress-value">
                  0%
                </span>
              </div>
              <span className="text-p">Problem solving</span>
            </div>

            <div className="container">
              <div id="circular-progress-id3" className="circular-progress">
                <span id="progress-value-id3" className="progress-value">
                  0%
                </span>
              </div>
              <span className="text-p">Teamwork</span>
            </div>

            <div className="container">
              <div id="circular-progress-id4" className="circular-progress">
                <span id="progress-value-id4" className="progress-value">
                  0%
                </span>
              </div>
              <span className="text-p">Creativity</span>
            </div>
          </div>
        </div>
      </div>

      <div id="Projects" className="flex-col projects-main-container">
        <div className="flex-col projects-heading-container">
          <h1>Projects</h1>
          <p>Below are the sample projects on JavaScript, React, Html, CSS.</p>
        </div>
        <div className="flex-row projects-container">
          <a href="https://vigneshproject.ccbp.tech/" target="_blank">
            <div className="projects">
              <img
                className="project-img"
                src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1721219265/nxtwatch-img_ozd6zg.png"
              />
              <p>Nxtwatch</p>
            </div>
          </a>
          <a href="https://vignesh-gemini-clone.netlify.app/" target="_blank">
            <div className="projects">
              <img
                className="project-img"
                src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1721829542/gemini-ss_uoe5rb.png"
              />
              <p>Gemini clone</p>
            </div>
          </a>
          <a href="https://vigneshtodosapp.ccbp.tech/" target="_blank">
            <div className="projects">
              <img
                className="project-img"
                src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1721219264/todo-img_jyoiam.png"
              />
              <p>To Do </p>
            </div>
          </a>
        </div>
      </div>

      <div id="Contact" className="contact-main-container">
        <div className="contact-container">
          <div className="div">
            <h1 className="contactme-heading">
              Contact <span className="v-span">Me</span>
            </h1>
            <div className="mail-container">
              <TfiEmail className="contact-logo" />
              <p>vigneshkoduru321@gmail.com</p>
            </div>
            <div className="mail-container">
              <FaPhoneSquareAlt className="contact-logo" />
              <p>9676621475</p>
            </div>
            <div className="socialmedia-container">
              <a className="s-logo-a">
                <FaLinkedin className="s-logo" />
              </a>
              <a className="s-logo-a">
                <FaWhatsapp className="s-logo" />
              </a>
              <a className="s-logo-a">
                <FaFacebookSquare className="s-logo" />
              </a>
              <a className="s-logo-a">
                <LuInstagram className="s-logo" />
              </a>
            </div>
            <a href="https://drive.google.com/file/d/14tfCz_z_ExEXw9b9pcQPcZ-AAAi9Je5t/view?usp=sharing">
              <button className="download-button">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="mail-msg-container">
          <form
            className="form-container"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h1>
              GET IN <span className="v-span">TOUCH</span>
            </h1>

            <input
              type="hidden"
              name="access_key"
              value="1f5e626b-eedb-41b6-902d-96e808741990"
            ></input>
            <input
              className="name"
              type="text"
              name="name"
              value={nameValue}
              onChange={onChangeName}
              placeholder="Your Name"
              id="Name"
              required
            />
            <input
              className="email"
              type="email"
              name="email"
              value={emailValue}
              onChange={onChangeEmail}
              placeholder="Email id"
              id="Email-ID"
              required
            />
            <input
              className="number"
              type="number"
              name="number"
              value={numberValue}
              onChange={onChangeNumber}
              placeholder="Phone no."
              id="Number"
              required
            />
            <input
              id="textarea"
              placeholder="How can i help you?"
              rows="4"
              value={textValue}
              onChange={onChangeText}
              required
            />
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>

          <button className="up-button">
            <a href="#Home">
              <FaArrowAltCircleUp className="up-button-logo" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
