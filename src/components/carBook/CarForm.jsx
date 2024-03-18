import { ButtonInline, ButtonOutline } from "../Button";
import SelectForm from "../forms/SelectForm";
import tariffs from "../data/tariffs";
import cars from "../data/cars";

const CarForm = () => {
    return (
        <div className="flex flex-col justify-between border border-black rounded-sm px-12 py-10 m-auto">
            <div>
                <div className="my-3">
                    <div>
                        <h3 className="font-sans font-bold text-xl mb-2">
                            Auto
                        </h3>
                    </div>
                    <div>
                        <SelectForm formList={cars} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonOutline text={"Book"} />
                </div>
            </div>

            <div>
                <div className="my-3">
                    <div>
                        <h3 className="font-sans font-bold text-xl mb-2">
                            Tariffs
                        </h3>
                    </div>
                    <div>
                        <SelectForm formList={tariffs} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonInline
                        text={"About"}
                        isOutline={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default CarForm;