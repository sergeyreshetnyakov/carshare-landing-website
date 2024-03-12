import SelectForm from "../forms/SelectForm";
import Button from "../Button";
import tariffs from "../data/tariffs";
import cars from "../data/cars";
import "./CarForm.sass";

const CarForm = () => {
    return (
        <div className="form">
            <div>
                <div className="form-element">
                    <div>
                        <h3 className="form-header">Автомобили</h3>
                    </div>
                    <div>
                        <SelectForm formList={cars}/>
                    </div>
                </div>
                <div className="form-button">
                    <Button text={"Забронировать"} />
                </div>
            </div>

            <div>
                <div className="form-element">
                    <div>
                        <h3 className="form-header">Тарифы</h3>
                    </div>
                    <div>
                        <SelectForm formList={tariffs} />
                    </div>
                </div>
                <div className="form-button">
                    <Button text={"Подробнее о тарифах"} isOutline={true} />
                </div>
            </div>
        </div>
    );
};
export default CarForm;
