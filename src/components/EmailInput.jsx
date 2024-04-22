import { useContext, useState } from "react";
import { EmailContext } from "../App";

function isCurrentEmailValid(currentEmail){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(currentEmail.match(validRegex)){
        console.log("valid");
    }else{
        console.log("invalid");
    }
    return currentEmail.match(validRegex);
}

function EmailInput(){
    const {isEmailValid, setIsEmailValid, globalEmail, setGlobalEmail} = useContext(EmailContext);
    const [localEmail, setlocalEmail] = useState('');
    const [isLocalEmailValid, setIsLocalEmailValid] = useState(true);


    const handleSubmit = (event) =>{
        event.preventDefault();
        if(isCurrentEmailValid(localEmail)){
            setIsEmailValid(true);
            //set global email
            setGlobalEmail(localEmail);
        }else{
            setIsLocalEmailValid(false);
        }
        
    }


    const emailChangeHandler = (event) =>{
        const email = event.target.value;
        setlocalEmail(email);
    }

    const showText = isLocalEmailValid? 'hidden' : 'text-warning_color font-semibold text-sm';
    

    let borderClass = "border rounded-lg mt-4 w-full h-11 my-2 pl-4 grow shrink max-h-14"
    borderClass = isLocalEmailValid? borderClass : borderClass+" border-warning_color"


    return(
        <form className="flex flex-col grow shrink mt-3" onSubmit={handleSubmit}>
            <div className="emailLabel flex justify-between">
                <label className="font-bold text-sm">Email address</label>
                <span className={showText}>Valid email required</span>
            </div>
            <input type="text" placeholder="email@company.com" className={borderClass}
                onChange={emailChangeHandler}
                />
            <button className="bg-button_color rounded-lg h-11 max-h-14 text-button_text grow shrink mt-5">
                Subscribe to monthly newsletter
            </button>
        </form>
    )
}

export default EmailInput;