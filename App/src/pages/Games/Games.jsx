import "./Games.css";

import { useEffect, useState } from "react";

import Header from "../../components/Header//Header";
import Logo from "../../components/Logo/Logo";
import Paddle from "../../components/Pong/Paddle";
import Ball from "../../components/Pong/Ball";



const Games = () => {

  const [leftPaddleY, setLeftPaddleY] = useState(30);
  const [rightPaddleY, setRightPaddleY] = useState(30);



  const paddleSpeed = 28;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "w":
          setLeftPaddleY((prevY) => Math.max(prevY - paddleSpeed));
          break;
        case "s":
          setLeftPaddleY((prevY) => Math.min(prevY + paddleSpeed));
          break;
        case "ArrowUp":
          setRightPaddleY((prevY) => Math.max(prevY - paddleSpeed, 0));
          break;
        case "ArrowDown":
          setRightPaddleY((prevY) => Math.min(prevY + paddleSpeed));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Remove o event listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="games">
        <section className="GameHeader">
          <div className="Box1">
            <Logo />
            <div className="BoxDiscription">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                accusamus delectus voluptatibus quasi reiciendis explicabo quas
                ipsum temporibus itaque laudantium! Tenetur rem quia omnis
                itaque repellat, laudantium esse repudiandae doloremque.
              </p>
            </div>
          </div>
          <div className="Box2"></div>
        </section>
        <section className="Game" id="Game"> 
          <div className="GameScreen">
            <div className="LeftSide">
              <Paddle
                x={30}
                y={leftPaddleY}
                width={20}
                height={120}
                side={"left"}
              />
            </div>
            <div className="line"></div>
            <div className="RightSide">
              <Paddle
                x={30}
                y={rightPaddleY}
                width={20}
                height={120}
                side={"right"}
              />
            </div>
             <div className="BallContainer">
              <Ball x={windowDimensions.width/2} y={80/2 -3} size={3} />
            </div>
          </div>
          <div className="GameFooter"></div>
        </section>
        <section className="Configs"></section>
        <section className="LeaderBoard"></section>
      </div>
    </>
  );
};

export default Games;
