import { FaCheckCircle } from "react-icons/fa";

function Success() {
    return (
        <div className="success_wrapper">
            <div className="flex gap-2 items-center">
                <FaCheckCircle className="text-3xl"></FaCheckCircle>
                <h1 className="text-4xl font-medium">Login Success</h1>
            </div>
        </div>
    )
}

export default Success