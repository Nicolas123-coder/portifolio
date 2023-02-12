import React from "react";
import monstersRolodex from "../images/monster_rolodex.png";
import todoList from "../images/todo-list.png";
import ecommerce from "../images/ecommerce.png";
import chatGPT from "../images/chatGPT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={() => window.open("https://nicolas123-coder.github.io/monster-encyclopedia/", "_blank")}>
            <img className="portfolio-image" src={monstersRolodex} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p>Monsters Encyclopedia</p>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={() => window.open("https://github.com/Nicolas123-coder/TODO-List-React-TS", "_blank")}>
            <img className="portfolio-image" src={todoList} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p>Todo List</p>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={() => window.open("https://nico-e-commerce.netlify.app/", "_blank")}>
            <img className="portfolio-image" src={ecommerce} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p>Ecommerce</p>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={() => window.open("https://gpt-codex-six.vercel.app/", "_blank")}>
            <img className="portfolio-image" src={chatGPT} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p>ChatGPT Clone</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
