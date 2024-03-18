import CarSlider from "./CarSlider";
import CarForm from "./CarForm";

const CarBook = () => {
    return (
        <div className="mt-32">
            <h1 className="font-serif font-bold text-4xl">Our Autopark</h1>
            <div className="flex max-md:flex-col md:flex-row md:justify-between">
                <CarSlider />
                <CarForm />
            </div>
        </div>
    );
};

export default CarBook;
