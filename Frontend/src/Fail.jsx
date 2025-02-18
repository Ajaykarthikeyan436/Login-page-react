import { FaCircleXmark } from "react-icons/fa6";

function Fail() {
    return (
        <div className="fail_wrapper">
            <div className="flex gap-2 items-center">
                <FaCircleXmark className="text-3xl text-red-700"></FaCircleXmark>
                <h1 className="text-4xl font-medium">Login Failed</h1>
            </div>
        </div>
    )
}

export default Fail