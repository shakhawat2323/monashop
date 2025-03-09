import { IoMdTime } from "react-icons/io";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";
const Blogcard = (props) => {
  return (
    <div>
      <div className="card bg-base-100 border-1 border-[rgba(0,0,0,0.1)] w-96 shadow-sm">
        <figure className="relative group ">
          <img
            className="w-full transition-all  group-hover:scale-125 group-hover:rotate-1"
            src={props.img}
            alt="Shoes"
          />
          <span className="absolute top-52 right-5 bg-[#ff5252] flex items-center gap-2 p-1 z-50 rounded-2xl text-white ">
            <IoMdTime className="text-xl font-lg" /> 5 APRIL , 2023
          </span>
        </figure>
        <div className="card-body">
          <h2 className="card-title hover:text-[#ff5252]">
            Integer suspendisse dolor veritatis inventore
          </h2>
          <p className="text-base">
            A card component has a figure, a body part, and inside body there
            are title and actions parts....
          </p>
          <Link className="text-lg hover:text-[#ff5252] inline-flex items-center gap-2">
            Read More <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
