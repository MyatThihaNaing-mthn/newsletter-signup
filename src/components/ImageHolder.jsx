import { getImageUrl } from "../utils";

function ImageHolder() {
    const bg_image = getImageUrl("signup_mobile.svg")
    return (
        <div className="xs:w-full lg:w-2/4 lg:h-full lg:object-center lg:p-4 xs:h-1/3">
            <img src={bg_image} alt="background image" className="w-full h-full object-cover  lg:object-center lg:rounded-xl rounded-b-xl" />
        </div>
    )
}


export default ImageHolder;