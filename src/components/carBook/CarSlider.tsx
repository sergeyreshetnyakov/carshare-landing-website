import { next, previous } from "../features/carSlider/sliderSlice";
import { useAppSelector, useAppDispatch } from "../../hook";
import { ArrowLeft, ArrowRight } from "react-feather";
import cars from "../data/cars";

const CarSlider = () => {
    const slide = useAppSelector((state) => state.slider.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col justify-center mx-auto my-8 w-96">
            <img
                className="transform -scale-x-100 h-[25vh] min-w-[25vw] "
                src={cars[slide].url}
                alt=""
            />
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => {
                        dispatch(next());
                    }}
                >
                    <ArrowLeft />
                </button>
                <h2 className="my-auto font-bold">{cars[slide].name}</h2>
                <button
                    onClick={() => {
                        dispatch(previous());
                    }}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default CarSlider;
