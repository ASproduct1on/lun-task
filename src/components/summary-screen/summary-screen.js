import React from "react";
import './summary-screen.css'
import Button from '../buttons/button'


const SummaryScreen = () => {
    return (
        <div>
            <div className="card d-flex">
                <div className="card__date d-flex flex-dir-column">
                    <h2>Александр Александрович</h2>
                    <p className="card__mail ">Andrii@mail.ua</p>
                    <p className="card__location ">Москва, Украина</p>
                    <p className="card__social">Facebook </p>
                </div>
                <div className="card__picture">
                    <h2>picture</h2>
                </div>
            </div>
            <div className="d-flex jc-center">
                <Button className="d-flex" disabled = {false}>
                    Пройти заново           
                </Button>
            </div>
        </div>
    )
} 

export default SummaryScreen;