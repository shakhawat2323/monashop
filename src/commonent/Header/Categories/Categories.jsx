// import { Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import "../input.css";
// import { FiMinusSquare } from "react-icons/fi";

// import { IoClose } from "react-icons/io5";
// import { useState } from "react";

// const Categories = (props) => {
//   const toggleDrawer = (newOpen) => () => {
//     props.setDraweropen(newOpen);
//   };
//   const [opensubmenus, setOpensubmenus] = useState(null);
//   const [innersubmenus, setInnersubmenus] = useState(null);
//   const openSubmenu = (index) => {
//     if (opensubmenus === index) {
//       setOpensubmenus(null);
//     } else {
//       setOpensubmenus(index);
//     }
//   };
//   const innerSubmenu = (index) => {
//     if (innersubmenus === index) {
//       setInnersubmenus(null);
//     } else {
//       setInnersubmenus(index);
//     }
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <div className="flex items-center justify-between">
//         <h1 className="text-xl  px-2 py-3">Shop By Categories</h1>
//         <button
//           onClick={toggleDrawer(false)}
//           className="text-3xl  cursor-pointer p-2 "
//         >
//           <IoClose />
//         </button>
//       </div>

//       <div className="scrol w-full">
//         <ul className="px-3">
//           <li className="flex items-center w-full relative ">
//             <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//               Fashion
//             </Button>

//             {opensubmenus === 0 ? (
//               <FiMinusSquare
//                 className="absolute right-1 cursor-pointer"
//                 onClick={() => openSubmenu(0)}
//               />
//             ) : (
//               <FaRegSquarePlus
//                 className="absolute right-1 cursor-pointer"
//                 onClick={() => openSubmenu(0)}
//               />
//             )}
//             {opensubmenus === 0 && (
//               <ul className="submenu  absolute top-[100%] left-0 w-full pl-2">
//                 <li className="list-none flex items-center reletive ">
//                   <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left   !justify-start !text-[rgba(0,0,0,0.8)]">
//                     Apparel
//                   </Button>

//                   {innersubmenus === 0 ? (
//                     <FiMinusSquare
//                       className="absolute right-1 cursor-pointer"
//                       onClick={() => innerSubmenu(0)}
//                     />
//                   ) : (
//                     <FaRegSquarePlus
//                       className="absolute right-1 cursor-pointer"
//                       onClick={() => innerSubmenu(0)}
//                     />
//                   )}
//                 </li>

//                 {innersubmenus === 0 && (
//                   <ul>
// <li className="list-none flex items-center pl-2">
//   {" "}
//   <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//     Smart Tablet
//   </Button>
// </li>
//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Crepe T-shirt
//                       </Button>
//                     </li>

//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Leathar Watch
//                       </Button>
//                     </li>
//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Rolling Diamond
//                       </Button>
//                     </li>
//                   </ul>
//                 )}
//               </ul>
//             )}
//           </li>
//           <li className="flex items-center w-full relative  flex-col ">
//             <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//               Computer
//             </Button>

//             {opensubmenus === 1 ? (
//               <FiMinusSquare
//                 className="absolute right-1 cursor-pointer"
//                 onClick={() => openSubmenu(1)}
//               />
//             ) : (
//               <FaRegSquarePlus
//                 className="absolute right-1 cursor-pointer"
//                 onClick={() => openSubmenu(1)}
//               />
//             )}
//             {opensubmenus === 1 && (
//               <ul className="submenu   w-full pl-2">
//                 <li className="list-none flex items-center reletive">
//                   <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                     Apparel
//                   </Button>

//                   {innersubmenus === 1 ? (
//                     <FiMinusSquare
//                       className="absolute right-1 cursor-pointer"
//                       onClick={() => innerSubmenu(1)}
//                     />
//                   ) : (
//                     <FaRegSquarePlus
//                       className="absolute right-1 cursor-pointer"
//                       onClick={() => innerSubmenu(1)}
//                     />
//                   )}
//                 </li>

//                 {innersubmenus === 1 && (
//                   <ul>
//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Smart Tablet
//                       </Button>
//                     </li>
//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Crepe T-shirt
//                       </Button>
//                     </li>

//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Leathar Watch
//                       </Button>
//                     </li>
//                     <li className="list-none flex items-center pl-2">
//                       {" "}
//                       <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
//                         Rolling Diamond
//                       </Button>
//                     </li>
//                   </ul>
//                 )}
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer open={props.idDraweropen} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// };

// export default Categories;

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "../input.css"; // Ensure your CSS is correctly linked

const Categories = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setDraweropen(newOpen);
  };

  const [opensubmenus, setOpensubmenus] = useState(null);
  const [innersubmenus, setInnersubmenus] = useState(null);

  const openSubmenu = (index) => {
    setOpensubmenus(opensubmenus === index ? null : index);
  };

  const innerSubmenu = (index) => {
    setInnersubmenus(innersubmenus === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Shop By Categories</h1>
        <button
          onClick={toggleDrawer(false)}
          className="text-2xl cursor-pointer p-2 hover:text-red-500 transition"
        >
          <IoClose />
        </button>
      </div>

      {/* Category List */}
      <div className="w-full py-2">
        <ul className="px-3">
          {/* Fashion Category */}
          <li className="relative  py-2">
            <div className="flex justify-between items-center">
              <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
              {opensubmenus === 0 ? (
                <FiMinusSquare
                  className="text-xl cursor-pointer hover:text-red-500 transition"
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-xl cursor-pointer hover:text-green-500 transition"
                  onClick={() => openSubmenu(0)}
                />
              )}
            </div>

            {opensubmenus === 0 && (
              <ul className="submenu bg-gray-100 rounded-lg mt-2 p-2">
                <li className="relative flex justify-between items-center">
                  <Button className="text-lg !text-left !text-gray-700">
                    Apparel
                  </Button>
                  {innersubmenus === 0 ? (
                    <FiMinusSquare
                      className="text-xl cursor-pointer hover:text-red-500 transition"
                      onClick={() => innerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="text-xl cursor-pointer hover:text-green-500 transition"
                      onClick={() => innerSubmenu(0)}
                    />
                  )}
                </li>

                {innersubmenus === 0 && (
                  <ul className="pl-4 mt-2">
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Smart Tablet
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Crepe T-shirt
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Leathar Watch
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Rolling Diamond
                      </Button>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Computer Category */}
          <li className="relative py-2">
            <div className="flex justify-between items-center">
              <Button className="text-lg w-full !text-left !text-gray-700">
                Computer
              </Button>
              {opensubmenus === 1 ? (
                <FiMinusSquare
                  className="text-xl cursor-pointer hover:text-red-500 transition"
                  onClick={() => openSubmenu(1)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-xl cursor-pointer hover:text-green-500 transition"
                  onClick={() => openSubmenu(1)}
                />
              )}
            </div>

            {opensubmenus === 1 && (
              <ul className="submenu bg-gray-100 rounded-lg mt-2 p-2">
                <li className="relative flex justify-between items-center">
                  <Button className="text-lg !text-left !text-gray-700">
                    Accessories
                  </Button>
                  {innersubmenus === 1 ? (
                    <FiMinusSquare
                      className="text-xl cursor-pointer hover:text-red-500 transition"
                      onClick={() => innerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="text-xl cursor-pointer hover:text-green-500 transition"
                      onClick={() => innerSubmenu(1)}
                    />
                  )}
                </li>

                {innersubmenus === 1 && (
                  <ul className="pl-4 mt-2">
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Smart Tablet
                      </Button>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.idDraweropen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default Categories;
