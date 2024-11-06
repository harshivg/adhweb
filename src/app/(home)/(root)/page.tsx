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
            <article className="bg-gradient-to-b from-yellow-50 to-white mb-40">
                <Gallery />   
            </article>
            <article className="mb-40">
                <Testimonials />
            </article>
        </div>
    );
}
 
export default Home;