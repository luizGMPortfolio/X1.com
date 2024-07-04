import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="Notification"></section>
      <section className="Games">
        <ul>
          <Card id={'Pong'}/>
          <Card Style={'CommingSoon'}/>
          <Card Style={'CommingSoon'}/>
        </ul>
      </section>
      <hr />
    </div>
  );
};

export default Home;
