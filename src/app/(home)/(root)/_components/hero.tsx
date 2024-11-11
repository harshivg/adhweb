import Image from "next/image"

export const Hero = () => {
    return (
        <>
            <div className="flex justify-end mr-4 md:mr-64 md:mt-32">
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
                India&apos;s first learning revolution starts with <b>HOW</b>, not <b>WHAT</b>. At Adhyayan, we empower students with game-changing study techniques backed by cognitive psychology that boost grades and save time. Because life&apos;s too short for endless studying.
                </p>
            </div>
            <div className="flex justify-start md:ml-64">
                <Image
                    src="/hero/bottom-left-planet.svg"
                    alt="hero"
                    height={150}
                    width={150}
                />
            </div>
        </>
    )
}