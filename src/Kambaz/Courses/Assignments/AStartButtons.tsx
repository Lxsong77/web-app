
import { IoIosPaper } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
export default function AStatrControlButtons({ className = "" }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
    <div className="d-flex align-items-center">
      <BsGripVertical className="fs-3 me-2" />
      <IoIosPaper className="fs-3 text-muted" />
      </div>
    </div> );}