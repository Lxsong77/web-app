import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AControlButtons({ className = "" }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
    <div className="d-flex align-items-center">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      </div>
    </div> );}