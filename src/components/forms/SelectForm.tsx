import { useState } from "react";

type FormList = {
    name: string;
}

type SelectProp = {
    formList: FormList[]
}

const SelectForm = ({ formList }: SelectProp) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [activeElement, setActiveElement] = useState<string>(formList?.[0].name);

    return (
        <>
            <button onClick={() => setIsActive(!isActive)}>
                <h1 className="border-b border-black mb-3 ease-in-out duration-150 hover:text-red-600">{activeElement}</h1>
            </button>
            <ul>
                {isActive ? (
                    formList.map((id) => (
                        <ol className="text-sm font-bold text-neutral-700 bg-neutral-300 rounded-sm border-b border-neutral-500 p-1 ease-in-out duration-150 hover:text-[#c12628]">
                            <button
                                onClick={() => {
                                    setActiveElement(id.name);
                                    setIsActive(!isActive);
                                }}
                            >
                                <li>{id.name}</li>
                            </button>
                        </ol>
                    ))
                ) : (
                    <> </>
                )}
            </ul>
        </>
    );
};

export default SelectForm;
