import { MapPin, Phone, Instagram, Facebook, Youtube } from "react-feather";
import { Whatsapp } from "./Icons";
import { ButtonOutline } from "./Button";
import InputForm from "./forms/InputForm";

const ContactInfo = () => {
    return (
        <div className="mt-16 mx-auto w-full">
            <div>
                <h1 className="font-serif font-bold text-4xl mb-12">
                    Contact
                </h1>
            </div>

            <div className="flex justify-between max-md:flex-col">
                <div className="pt-12  max-md:flex max-md:justify-between">
                    <div>
                        <div className="text-lg font-bold mb-3 flex">
                            <MapPin />
                            <span className="flex flex-col justify-center">
                                Moscow, st.Lenin, 8
                            </span>
                        </div>
                        <div className="text-lg font-bold mb-3 flex">
                            <Phone />
                            <span className="flex flex-col justify-center">
                                +7 (999) - 999 - 99 - 99
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between max-md:flex-col">
                        <Facebook
                            width={"32px"}
                            height={"32px"}
                            color={"#000"}
                        />
                        <Instagram
                            width={"32px"}
                            height={"32px"}
                            color={"#000"}
                        />
                        <Whatsapp size={"32px"} />
                        <Youtube
                            width={"32px"}
                            height={"32px"}
                            color={"#000"}
                        />
                    </div>
                </div>

                <div className="border border-black m-auto p-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3">
                            Have questions?
                        </h3>
                        <p className="mb-4">
                            Bring request to manager
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 border-b border-black ">
                            <InputForm placeholder={"+7(___)-___-__-__"} />
                        </div>
                        <div className="mb-5 border-b border-black">
                            <InputForm placeholder={"Name"} />
                        </div>
                        <div className="flex justify-center">
                            <ButtonOutline
                                text={"Leave a request"}
                                isOutline={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
