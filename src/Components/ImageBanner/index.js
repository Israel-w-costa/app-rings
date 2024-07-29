import Assets from "../../Assets/the_unexpected_journey.png"
import ApiTheRing from "../ApiFetch"
export default function ImageBanner() {

    return (
        <div>
            <img src={Assets} />
            <ApiTheRing />
        </div>
    )
}