import { ButtonOutline } from "./Button";

const Header = () => {
    return (
        <header className="flex flex-col mt-16">
            <h1 className="font-serif text-2xl">Каршеринг в Москве</h1>
            <div>
                <span className="font-serif text-5xl font-extrabold">
                    Почувствуй себя владельцем
                    <br />
                    премиального авто
                </span>
                <p className="text-xl mt-8 mb-12 ">
                    DriveTime - сервис по каршерингу в Москве.
                    <br />
                    В нашем автопарке более 300 автомобилей
                    <br />
                    на любой вкус
                </p>
                <ButtonOutline text={"Забронировать"} />
            </div>
        </header>
    );
};

export default Header;
