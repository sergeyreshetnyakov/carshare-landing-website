export const ButtonOutline = ({ text }) => {
    return (
        <div className="inline-block py-4 px-5 duration-300 ease-out font-bold border-2 border-black hover:bg-black hover:text-white">
            <a href="#">{text}</a>
        </div>
    );
};

export const ButtonInline = ({ text }) => {
    return (
        <div className="inline-block py-4 px-5 duration-300 ease-out font-bold bg-black text-white hover:bg-red-600">
            <a href="#">{text}</a>
        </div>
    );
};
