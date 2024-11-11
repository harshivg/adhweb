import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu size={24} color="white"/>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 bg-white">
                <SheetHeader>
                    <SheetTitle>
                    </SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <Sidebar />
            </SheetContent>
        </Sheet>
        
    );
}