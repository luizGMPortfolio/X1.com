import "./Games.css";

import Header from "../../components/Header//Header";
import Logo from "../../components/Logo/Logo";

const Games = () => {
  return (
    <>
      <Header />
      <div className="games">
        <section className="GameHeader">
          <div className="Box1">
            <Logo />
          </div>
          <div className="Box2">
            <div className="BoxDiscription"></div>
          </div>
        </section>
        <section className="Game"></section>
        <section className="Info"></section>
      </div>
    </>
  );
};

export default Games;
