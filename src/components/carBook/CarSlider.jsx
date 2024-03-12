import ArrowSVG from "../svg/ArrowSVG";
import cars from "../data/cars";
import { useSelector, useDispatch } from "react-redux";
import { next, previous, selectSlide } from "../features/carSlider/sliderSlice";
import "./CarSlider.sass";

const CarSlider = () => {
    const slide = useSelector(selectSlide);
    const dispatch = useDispatch();

    return (
        <div className="slider">
            <div className="slider-image">
                <img src={cars[slide].url} alt="" />
            </div>

            <div className="slider-indicators">
                <button
                    onClick={() => {
                        dispatch(next());
                    }}
                >
                    <ArrowSVG width={"6rem"} height={"4rem"} isLeft={true} />
                </button>
                <h2 className="slider-indicators-name">{cars[slide].name}</h2>
                <button
                    onClick={() => {
                        dispatch(previous());
                    }}
                >
                    <ArrowSVG width={"6rem"} height={"4rem"} />
                </button>
            </div>
        </div>
    );
};

export default CarSlider;
