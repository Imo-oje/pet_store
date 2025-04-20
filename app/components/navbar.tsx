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

const Navbar = () => {
  return (
    <>
      <header className="absolute left-0 right-0 z-1  py-4 w-[95%] mx-auto">
        <nav className="flex justify-between items-center bg-transparent">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-black cursor-pointer" size={30} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <img src={logo} alt="Logo" />
          <Search className="text-black cursor-pointer" size={30} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
