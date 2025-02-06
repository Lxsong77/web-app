import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


export default function AssignmentsControlButtons({ className = "" }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
    <div className="float-end">
      <FaPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
      </div>
    </div> );}