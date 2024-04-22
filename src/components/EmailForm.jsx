import EmailInput from "./EmailInput";
import ListItem from "./ListItem";
const listItems = [
    {
        "id" : 0,
        "listText": "Product discovery and bulding what matters"
    },
    {
        "id" : 1,
        "listText": "Measuring to ensure updates are a success"
    },
    {
        "id" : 2,
        "listText": "And much more!"
    }

];
function EmailForm() {
    const list = listItems.map(list => <li key={list.id} className="grow shrink"><ListItem listText={list.listText} /></li>)
    return (
        <div className="emailForm px-8 my-4 flex flex-col grow shrink lg:mt-32">
            <div className="h-1/4 flex flex-col">
                <h1 className="text-3xl font-extrabold shrink lg:text-5xl">Stay Updated!</h1>
                <p className="my-3 shrink">Join 60,000+ project managers receiving monthly updates on:</p>
            </div>
            <div className="h-3/4 flex shrink flex-col">
                <ul className="flex flex-col grow shrink">
                    {list}
                </ul>
                <EmailInput />
            </div>
        </div>
    )
}


export default EmailForm;