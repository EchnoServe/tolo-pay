/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import image from "./img/bot_image.jpg";
import {messageIconSVG} from "../../Assets";
import { userSVG } from "../../Assets";

import './Chatbot.css';

import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

function Chatbot() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }






{/*CHATBOT VARIABLES AND FUNCTION START HERE*/}


const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2023") {
      //if the dateTime is Thursday, 13 Aug 2023, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".ai-status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;
  


    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; // display the message
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".ai-status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }



    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }



    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Tolopay";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of tolopay|who is the owner of tolopay|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this tolopay is Echnoserve";
        inputRef.value = ""; // clear the input
      }, 2000);
    }



    let owner2 = [
      "Who's echnoserve|who's echnoserve|Who is echnoserve|who is echnoserve",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Echnoserve is a multidisciplinary solution provider delivering services through rigorous analytical research, tailored consultancy, and capacity building.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }



    let purpose = [
      "What's tolopay|what is tolopay",
    ]; //adding the age-question
    let words11 = new RegExp(purpose);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "its online wallet platform";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value; // display the message
  };






{/*CHATBOT VARIABLES AND FUNCTION ENDS  HERE*/}

  return (
    <div className="dropdown-menus2">
      <div className='menu-container2' ref={menuRef}>
        <div className='menu-trigger2' onClick={()=>{setOpen(!open)}}>
          <img src={messageIconSVG}></img>
        </div>

        <div className={`dropdown-menu2 ${open? 'active' : 'inactive'}`} >
          <div className="chatbox-header">
          <div className="logo-cont">
              <p>ToloPay</p>
               <div class="welcome-cont">
                  <span class="bold">Hi</span>
                  <span>we offer the best service</span>
                  <span>fast response</span>
               </div>
          </div>
        </div>
            <div className="message-cont">
          <p>Start a conversation</p>
          <ul>
            <li className="responder-img" >
                <div className="ai-img">
                      <img src={image} alt="" />
               </div>
            </li>
            <li>
              <p>Our usual reply time</p>
              <p className="t-bold">A few minutes </p>
            </li>
          </ul>
          <button className="btn"onClick={toggleModal}><i class="fa fa-home"></i>Send us a message</button>
          
              {/*MESSAGE US MODAL START*/}

                



               {modal && (
                      <div className="modal">
                        <div  className="overlay">

                            <div className="botAi"onLoad={checkStatus}>
                              
                              <div className="Ai-wrapper">
                                
                                <div className="ai-content">
                                     <div className="a-header">
                                          
                                          <div className="ai-img">
                                                <img src={image} alt="" />
                                          </div>
                                          <div className="ai-right">
                                              <div className="ai-name">ToloPayBot</div>
                                                <div className="ai-status">Active</div>
                                            </div>
                                      </div> 

                                      <div className="ai-main">
                                         <div className="main_content">
                                               <div className="messages">
                                                    <div className="bot-message"
                                                        id="message1"
                                                        ref={botmessage}>
                                                        
                                                      </div>
                                                       <div className="human-message"
                                                            id="message2"
                                                            ref={humanMessage}>
                                                            
                                                          </div>
                                               </div>
                                         </div>

                                      </div> 
                                      <div className="bottom">
                                            <div className="btm">
                                                  <div className="input">
                                                   
                                                     
                                                       <input
                                                          type="text"
                                                          id="input"
                                                          placeholder="Enter your message"
                                                          ref={input}
                                                        />
                                                  </div>
                                                  <div className="btns">
                                                        <button onClick={handleInput}>
                                                              <i className="fas fa-paper-plane"></i>Send
                                                         </button>
                                                  </div>
                                            </div>
                                      </div>  

                                </div>
                              </div>
                              </div>



                          <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                          </button>


                        </div>
                        <div className="modal-content">
                         
                                
                        </div>
                      </div>
                  )}




               {/*MESSAGE US END*/}

        </div>
        <div className="search-help">
         <p>Search for help</p>
         <input type="text" name="search" placeholder="Search help articles"></input>
         <p class="article-title">Suggested articles</p>
         <ul>
           <li >how to create account</li>
           <li>how to transfer money</li>
           <li>how to split bill</li>
           <li>how to change user profile</li>

         </ul>
        </div>
          
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem2'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Chatbot;
