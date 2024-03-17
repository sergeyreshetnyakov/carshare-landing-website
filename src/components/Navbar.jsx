/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonInline } from "./Button";
import { Logo } from "./Icons";
import { Menu, X } from "react-feather";
import { useState } from "react";

const NavLinks = ({ vertical }) => {
    return (
        <div
            className={
                vertical
                    ? "flex flex-col justify-between text-center h-[16vh] bg-white"
                    : "flex justify-between w-[60vh]"
            }
        >
            <a
                className="my-auto font-bold text-xs ease-in duration-150 hover:text-red-600"
                href="#"
            >
                Autopark
            </a>
            <a
                className="my-auto font-bold text-xs ease-in duration-150 hover:text-red-600"
                href="#"
            >
                Features
            </a>
            <a
                className="my-auto font-bold text-xs ease-in duration-150 hover:text-red-600"
                href="#"
            >
                Rent
            </a>
            <a
                className="my-auto font-bold text-xs ease-in duration-150 hover:text-red-600"
                href="#"
            >
                Contact
            </a>
            <div>
                <ButtonInline text={"Скачать приложение"} isOutline={true} />
            </div>
        </div>
    );
};

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={openMenu ? "flex flex-col justify-between mt-4": "flex justify-between mt-4"}>
            <div className="flex my-auto">
                <Logo size={36} />
                <h1 className="align-middle text-3xl font-serif font-black">
                    <span className="text-red-600">Crazy</span>
                    Driver
                </h1>
            </div>
            <div className="xl:hidden">
                {openMenu ? (
                    <>
                        <button onClick={() => setOpenMenu(false)}>
                            <X />
                        </button>
                        <NavLinks vertical={true} />
                    </>
                ) : (
                    <button onClick={() => setOpenMenu(true)}>
                        <Menu />
                    </button>
                )}
            </div>
            <div className="max-xl:hidden">
                <NavLinks vertical={false} />
            </div>
        </div>
    );
};

export default Navbar;
