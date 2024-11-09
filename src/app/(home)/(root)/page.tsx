import { Contact } from "./_components/contact";
import { Gallery } from "./_components/gallery";
import { Results } from "./_components/results";
import { Testimonials } from "./_components/testimonials";

const Home = () => {
    return (
        <div>
            {/* front page svg */}
            <article className="pl-40 pr-40 mt-40 mb-40">
                <Results />
            </article>
            <article className="p-20 pl-40 pr-40 bg-black rounded-lg w-full mb-40">
                <Gallery />   
            </article>
            <article className="mb-40">
                <Testimonials />
            </article>
            <article className="rounded-t-lg rouneded-b-none w-full bg-black text-white p-20 pl-40 pr-40">
                <Contact />
            </article>
        </div>
    );
}
 
export default Home;