import { ButtonOutline } from "./Button";

const Header = () => {
    return (
        <header className="flex flex-col mt-16">
            <h1 className="font-serif text-2xl">Carshare service</h1>
            <div>
                <span className="font-serif text-5xl font-extrabold">
                    feel like the owner of
                    <br />
                    a premium auto
                </span>
                <p className="text-xl mt-8 mb-12 ">
                    DriveTime - carsharing in Moscow
                    <br />
                    We have 300 autos in our autopark
                    <br />
                    for any taste
                </p>
                <ButtonOutline text={"Book"} />
            </div>
        </header>
    );
};

export default Header;
