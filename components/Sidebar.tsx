import { MenuIcon } from "lucide-react";
import NewDocument from "./NewDocument";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  const menuOptions = (
    <>
      <NewDocument></NewDocument>
    </>
  );
  return (
    <div className="p-2 md:p-5 relative bg-gray-200">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-4 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div> {menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" hidden md:inline">{menuOptions}</div>
    </div>
  );
}
export default Sidebar;
