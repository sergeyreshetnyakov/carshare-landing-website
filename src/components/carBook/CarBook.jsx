import CarForm from "./CarForm";
import CarSlider from "./CarSlider";

const CarBook = () => {
    return (
        <div className="mt-72">
            <h1 className="font-serif font-bold text-4xl">Наш автопарк</h1>
            <div className="flex justify-between">
                <CarSlider />
                <CarForm />
            </div>
        </div>
    );
};

export default CarBook;
