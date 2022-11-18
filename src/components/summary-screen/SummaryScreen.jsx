import "./summary-screen.css";
import Button from "../button/Button";

// import cat2 from "./assets/cat2.jpg";

const SummaryScreen = () => {
  return (
    <div>
      {/* <div className="card">
        <div className="card__date">
          <h2>Александр Александрович</h2>
          <p className="card__mail ">Andrii@mail.ua</p>
          <p className="card__location ">Москва, Украина</p>
          <p className="card__social">Facebook </p>
        </div>
        <div className="card__picture">
          <img src={cat2} className="last-img" alt="gg wp" />
        </div>
      </div> */}
      <div className="card__button">
        <Button
          onClick={() => {
            console.log("URA");
          }}
          disabled
        >
          Пройти заново
        </Button>
        <Button
          className="Button--primary"
          onClick={() => {
            console.log("URA");
          }}
        >
          Предыдущая
        </Button>
        <Button className="">Следующая</Button>
      </div>
    </div>
  );
};

export default SummaryScreen;
