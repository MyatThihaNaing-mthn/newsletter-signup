import { useContext } from "react";
import { EmailContext } from "../App";
import { getImageUrl } from "../utils";

function Success() {
    const { globalEmail, setIsEmailValid, setGlobalEmail } = useContext(EmailContext);
    const tickIcon = getImageUrl("icon-list.svg");

    const handleClick = () =>{
        setIsEmailValid(false);
        setGlobalEmail('');
    }
    return (
        <div className="w-full h-full flex items-center justify-center lg:bg-success_bg">
            <div className="w-full h-full flex flex-col px-10 xs:pt-8 lg:w-5/12 lg:h-2/4 lg:px-5 lg:pt-0 lg: rounded-3xl shadow-lg bg-success_second_bg">
            <div className="flex flex-col space-y-9  lg:space-y-4 lg:text-sm grow xs:mt-32 lg:mt-4">
                <img src={tickIcon} alt="tick icon" className="w-14 h-14"/>
                <h1 className="text-4xl font-extrabold leading-none ">Thanks for Subscribing! </h1>
                <p className="font-medium">A confirmation email has been sent to 
                    <span className="font-bold">
                    {" "+globalEmail}
                    </span> . 
                    Please open it and click the button inside to confirm you subscription.
                </p>
            </div>
            <div className="flex flex-col xs:justify-end grow xs:mb-12 lg:mb-6">
                <button className="dismiss-btn bg-button_color w-full h-14 text-button_text rounded-lg"
                    onClick={handleClick}>
                    Dismiss message
                </button>
            </div>
        </div>
        </div>
    )
}

export default Success;