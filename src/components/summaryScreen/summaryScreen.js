import "./summaryScreen.css";
import Button from "../button/button";
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
        <Button className="Button--primary" icon="" disabled={false}>
          Пройти заново
        </Button>
        <Button className="" icon="arrow-left" disabled={false}>
          Предыдущая
        </Button>
        <Button className="" icon="arrow-right" disabled={false}>
          Следующая
        </Button>
      </div>
    </div>
  );
};

export default SummaryScreen;
