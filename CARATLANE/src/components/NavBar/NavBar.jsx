// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
// import {SearchIcon} from "./SearchIcon.jsx";

// const NavBar = () => {
//   return (
//      <Navbar isBordered>
//        <NavbarContent justify="start">
//          <NavbarBrand className="mr-4">
//             <AcmeLogo />
//            <p className="hidden sm:block font-bold text-inherit">ACME</p>
//          </NavbarBrand>
//          <NavbarContent className="hidden sm:flex gap-3">
//             <NavbarItem>
//               <Link color="foreground" href="#">
//                 Rings
//               </Link>
//             </NavbarItem>
//             <NavbarItem isActive>
//               <Link href="#" aria-current="page" color="secondary">
//                 Earings
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Link color="foreground" href="#">
//                 Integrations
//               </Link>
//             </NavbarItem>
//           </NavbarContent>
//         </NavbarContent>

//         <NavbarContent as="div" className="items-center" justify="end">
//           <Input
//             classNames={{
//               base: "max-w-full sm:max-w-[10rem] h-10",
//               mainWrapper: "h-full",
//               input: "text-small",
//               inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
//             }}
//             placeholder="Type className="page" to search..."
//             size="sm"
//             startContent={<SearchIcon size={18} />}
//             type="search"
//           />
//           <Dropdown placement="bottom-end">
//             <DropdownTrigger>
//               <Avatar
//                 isBordered
//                 as="button"
//                 className="transition-transform"
//                 color="secondary"
//                 name="Jason Hughes"
//                 size="sm"
//                 src="https:i.pravatar.cc/150?u=a042581f4e29026704d"
//               />
//             </DropdownTrigger>
//             <DropdownMenu aria-label="Profile Actions" variant="flat">
//               <DropdownItem key="profile" className="h-14 gap-2">
//                 <p className="font-semibold">Signed in as</p>
//                 <p className="font-semibold">zoey@example.com</p>
//               </DropdownItem>
//               <DropdownItem key="settings">My Settings</DropdownItem>
//               <DropdownItem key="team_settings">Team Settings</DropdownItem>
//               <DropdownItem key="analytics">Analytics</DropdownItem>
//               <DropdownItem key="system">System</DropdownItem>
//               <DropdownItem key="configurations">Configurations</DropdownItem>
//               <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//               <DropdownItem key="logout" color="danger">
//                 Log Out
//               </DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         </NavbarContent>
//       </Navbar>
//     // <nav>
//     //   <Link>>Rings</Link>
//     //   <Link>>Earrings</Link>

//     // </nav>
//   );
// }

// export default NavBar
import React from "react";
import './NavBar.css'
// // import Login from "../Login&SignUp/Login.jsx";
import {
  FaSearch,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { CIcon } from '@coreui/icons-react';
import { cifIn } from '@coreui/icons';
import { FaCartShopping } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
      <svg width="30" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="IconLogoImage-Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="IconLogoImage-CL-Logo" transform="translate(1)" fill="#8E1A86" fill-rule="nonzero"><path d="M10.217 23.029l2.04.971 2.029-.954-2.04-2.052-2.029 2.035zm4.869-3.812L13.6 20.84l2.577 1.091 1.097-2.588-2.194-.126h.006zm-5.652 0l-2.194.12 1.08 2.589 2.583-1.075-1.474-1.628.005-.006zm8.989 2.126l2.148-.772.766-2.137H18.43l-.006 2.909zM3.206 18.429l.748 2.142 2.132.76v-2.897h-2.88v-.005zm9.063-.863l-1.578.72 1.572 1.577 1.571-1.566-1.571-.748.006.017zM16 16l-.571 1.657h2.222V15.43L16 16zm-9.143 1.651h2.229l-.572-1.645-1.64-.572-.017 2.217zm-3.154-4.04L2.61 16.19 5.2 17.28l.131-2.194L3.71 13.6l-.006.011zm.954-1.342l1.566 1.571.754-1.577-.748-1.572-1.572 1.578zm-4.126 0l.972 2.017 2.051-2.046-2.04-2.023-.983 2.052zM2.63 8.326l1.08 2.577 1.628-1.48-.126-2.194L2.63 8.326zm12.8-1.435L16 8.537l1.64.572V6.897h-2.211v-.006zM6.89 9.103l1.64-.572.572-1.64H6.874l.017 2.212zm3.818-2.857l1.571.748 1.577-.743-1.577-1.588-1.571 1.583zm7.737-.115h2.891L20.571 4l-2.12-.777-.005 2.908zM4 3.96l-.783 2.137h2.897V3.206L4 3.96zm9.663-.251l1.474 1.628 2.194-.12-1.108-2.583-2.56 1.075zM7.263 5.2l2.194.131 1.486-1.622L8.37 2.623 7.263 5.2zM12.286.531l-2.046.972 2.04 2.051 2.046-2.034-2.04-.989z" id="IconLogoImage-Shape">
      </path>
      </g>
      </g>
      </svg>
      </div>
      <Link className="page" to={"/"}>Rings</Link>
      <Link className="page" to={"/"}>Earrings</Link>
      <Link className="page" to={"/"}>Bracelets & Bangles</Link>
      <Link className="page" to={"/"}>Solitaires</Link>
      <Link className="page" to={"/"}>Mangalsutras</Link>
      <Link className="page" to={"/"}>Necklaces</Link>
      <div className="SearchBar">
        <input type="text" placeholder="Search..." style={{ border: "none", backgroundColor: "rgb(210, 212, 213)", width: "100%", height: "100%", textAlign: "left", borderRadius: "8px 0px 0px 8px", }} />
        <buttom /*style={{backgroundColor: "#aa5af1",
                      borderRadius: "0px 5px 5px 0px",
                      padding: "10px 10px",
                      marginTop: "5px",}}*/ type="submit" className="button">
          <FaSearch />
        </buttom>
      </div>
      <span>
        <p style={{ fontSize: "10px", }}> Delivery & Stores</p>
        <p style={{ fontSize: "11px", color: "rgb(193, 81, 231)", fontWeight: "bold" }}>Enter Pincode</p>
      </span>
      <Link style={{ size: "14px" }} className="page" to="">
        <CIcon icon={cifIn} size="xl"/>
      </Link>
      <Menu >
        <MenuButton as={Button} rightIcon={<BsChevronDown />} w="4.8%" m="1%" style={{padding:"0.4%", display: "flex", alignSelf: "center"}}>
          <Icon boxSize="25px" as={CgProfile} />
        </MenuButton>
        <MenuList>
          <h3 style={{
            fontWeight: "bold", textAlign: "center",
          }}>
            Your Account
          </h3>
          {/* <br /> */}
          <p style={{
            fontSize: "70%", padding: "5%",
          }}>
            Access account & manage your orders.
          </p>

          <div className="SUL">
          <Button className="bSignUp">
            <Link to="/signUp">
            <span style={{
              padding: "10%",
            }}>Sign Up</span>
            </Link>
            </Button>
          <Button className="bLogin"><Link to="/login"><span>Login</span></Link></Button>
          </div>
          
        </MenuList>
      </Menu>
      {/* <ImLocation /> */}
      <FaCartShopping className="cartLogo"/>
    </nav>
  );
}
