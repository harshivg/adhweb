import { Footer } from "@/components/footer";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <header className="h-[80px] inset-y-0 w-full z-50">
                <div className="md:ml-[60px] md:mr-[60px] mb-4 md:mt-6">
                    <Navbar />
                </div>
            </header>
            <main className="pt-[20px] h-full">
                {children}
            </main>
            <footer className="bg-yellow-400">
                <Footer />
            </footer>
        </div> 
    );
}
 
export default HomeLayout;