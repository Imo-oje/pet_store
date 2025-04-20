import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import logo from "../assets/logo.svg";
import {
  SheetFooter,
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <header className="absolute left-0 right-0 z-10  py-4 w-[95%] md:w-[80%] mx-auto">
        <nav className="flex justify-between items-center bg-transparent">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Menu className="text-black cursor-pointer" size={30} />
            </SheetTrigger>
            <SheetContent
              side="left"
              className=" bg-primary flex justify-center"
            >
              <ul className="p-4 max-w-fit mr-auto ml-auto flex flex-col gap-8 justify-center items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.path}
                    className="text-white text-16 font-700 hover:underline"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          <div className="relative border-2 border-primary">
            <div className="w-70 aspect-square bg-secondary rounded-4xl absolute -top-50 rotate-20 -left-20"></div>
            <img src={logo} alt="Logo" className="relative" />
          </div>

          <ul className="hidden md:flex space-x-8 items-center flex-1 px-28 ">
            {navLinks.map((link) => (
              <li key={link.path} className="text-primary text-16 font-700">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Search className="text-black cursor-pointer md:hidden" size={30} />
          <Button className="rounded-2xl hover:bg-transparent hover:border hover:text-primary cursor-pointer hidden md:block">
            Join the community
          </Button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Category",
    path: "/category",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
