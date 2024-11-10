import { Contact } from "./_components/contact";
import { Gallery } from "./_components/gallery";
import { Results } from "./_components/results";
import { Testimonials } from "./_components/testimonials";

const Home = () => {
    return (
        <div>
            {/* front page svg */}
            <article className="pl-4 pr-4 mb-20 lg:pl-40 lg:pr-40 lg:mt-40 lg:mb-40" id="results">
                <Results />
            </article>
            <article id="workshops" className="mt-20 mb-20 pl-4 pr-4 lg:p-20 lg:pl-40 lg:pr-40 lg:mb-40 bg-black rounded-lg w-full">
                <Gallery />
            </article>
            <article className="mb-20 lg:mb-40 overflow-x-auto" id="testimonials">
                <Testimonials />
            </article>
            <article id="contact" className="rounded-t-lg rounded-b-none w-full bg-black text-white p-6 pl-4 pr-4 lg:p-20 lg:pl-40 lg:pr-40">
                <Contact />
            </article>
        </div>
    );
}
 
export default Home;