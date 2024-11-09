import { Footer } from "@/components/footer";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <header className="h-[80px] inset-y-0 w-full z-50">
                <div className="ml-8 mr-8 mb-4 mt-6 ">
                    <Navbar />
                </div>
            </header>
            <main className="pt-[140px] h-full">
                {children}
            </main>
            <footer className="bg-yellow-400">
                <Footer />
            </footer>
        </div> 
    );
}
 
export default HomeLayout;