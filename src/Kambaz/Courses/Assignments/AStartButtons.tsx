import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
export default function AStatrControlButtons({ className = "" }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
    <div className="d-flex align-items-center">
      <BsGripVertical className="fs-3 me-2" />
      <FaRegEdit className="fs-3 text-success" />
      </div>
    </div> );}