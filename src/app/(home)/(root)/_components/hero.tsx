import Image from "next/image"

export const Hero = () => {
    return (
        <>
            <div className="flex justify-end mr-4 md:mr-16">
                <Image
                    src="/hero/upper-right-planet.svg"
                    alt="hero"
                    height={100}
                    width={100}
                />
            </div>
            <div className="flex items-center flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-center uppercase">
                    adhyayan
                </h1>
                <p className="text-center mt-4 lowercase">
                    we help you
                </p>
                <div className="text-center mt-4 max-w-[400px] flex gap-4 items-center">
                    <div className="flex flex-col">
                        <div className="text-xl md:text-3xl font-bold">Score</div> 
                        <div className="text-xl md:text-3xl font-bold">high</div> 
                    </div>
                    <Image 
                        src="/hero/book.svg"
                        alt="book"
                        height={23}
                        width={23}
                    />
                    <div className="flex flex-col text-[#4D6EFF]">
                        <div className="text-xl md:text-3xl font-bold">Unlock</div> 
                        <div className="text-xl md:text-3xl font-bold">time</div> 
                    </div>
                    <Image 
                        src="/hero/surfing.svg"
                        alt="book"
                        height={23}
                        width={23}
                    />
                    <div className="flex flex-col">
                        <div className="text-xl md:text-3xl font-bold">Play</div> 
                        <div className="text-xl md:text-3xl font-bold">more</div> 
                    </div>
                </div>
                <p className="text-center mt-8 max-w-[500px] mb-8">
                    Adhyayan is India&apos;s <b>first</b> educational outfit that helps students learn better. Focusing on the <b>HOW</b> of study helps students learn better themselves, therefore saves time. We teach students technique and hacks that <b>JUST WORK</b>. Our main aim is for students to gain the time to do what it is their heart desires, while reducing scrutiny around them by improving their scores.
                </p>
            </div>
            <div className="flex justify-start md:mr-16">
                <Image
                    src="/hero/bottom-left-planet.svg"
                    alt="hero"
                    height={100}
                    width={100}
                />
            </div>
        </>
    )
}