import React from "react";
import './summary-screen.css'
import Button from '../buttons/button'


const SummaryScreen = () => {
    return (
        <div className="d-flex jc-center">
            <div className="card d-flex">
                <div className="card__date">
                    <h2>Александр Александрович</h2>
                    <p className="card__mail">Andrii@mail.ua</p>
                    <p className="card__location">Москва, Украина</p>
                    <p className="card__social">Facebook </p>
                </div>
                <div className="card__picture">
                    <h2>ggg</h2>
                </div>
            </div>
            <Button className="d-flex jc-center" disabled = {false}>
                Пройти заново           
            </Button>
            
        </div>
    )
} 

export default SummaryScreen;