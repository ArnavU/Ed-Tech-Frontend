import { Link } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import Instructor from "../components/core/HomePage/Instructor"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className="relative mx-auto flex flex-col w-11/12
                 items-center text-white justify-between">

            <Link to={"/signup"}>
                <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                    <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition all duration-200 group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div className="text-center text-4xl font-semibold mt-7 text-white">
                Empower Your Future With Coding Skills
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className="mt-4 w-11/12 text-center font-bold text-lg text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className="flex flex-row gap-7 mt-8">
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className="mx-3 my-7 w-7/12 transition-all duration-200 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                <video className={"drop-shadow-[20px_20px_rgba(255,255,255)] rounded-md"} muted loop autoPlay src={Banner} type="video/mp4"/>
            </div>

            {/* Code section 1 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold text-white"> 
                            Unlock your 
                            <HighlightText text={"coding potential"} />
                            with our online courses
                        </div>
                    }
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={{
                        text: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        text: "Learn more",
                        linkto: "/login",
                        active: false,
                    }}
                    codeblock={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>This is myPage</title>\n\t</head>\n\t<body>\n\t\t<h1> <a href="/">Header</a> </h1>\n\t\t<nav>\n\t\t\t<a href="/one">One</a>\n\t\t\t<a href="/two">Two</a>\n\t\t\t<a href="/three">Three</a>\n\t\t</nav>\n\t</body>\n</html>`}
                    codeColor={"text-yellow-25"}
                    codeBlockId={"codeblock1"}
                />
            </div>

            <div>
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className="text-4xl font-semibold text-white"> 
                            Unlock your 
                            <HighlightText text={"coding potential"} />
                            with our online courses
                        </div>
                    }
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={{
                        text: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        text: "Learn more",
                        linkto: "/login",
                        active: false,
                    }}
                    codeblock={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>This is myPage</title>\n\t</head>\n\t<body>\n\t\t<h1> <a href="/">Header</a> </h1>\n\t\t<nav>\n\t\t\t<a href="/one">One</a>\n\t\t\t<a href="/two">Two</a>\n\t\t\t<a href="/three">Three</a>\n\t\t</nav>\n\t</body>\n</html>`}
                    codeColor={"text-white"}
                    codeBlockId={"codeblock1"}
                />
            </div>

            <ExploreMore />

        </div>

        {/* Section 2 */}
        <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[333px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                        <div className="h-[176px]"></div>
                        <div className="flex flex-row gap-7 text-white">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Learn More
                                    <FaArrowRight />
                                </div>
                            </CTAButton>

                        </div>
                    </div>
            </div>
            
            <div className="flex flex-col max-w-maxContent w-11/12 mt-5 md:mt-10 lg:mt-16 mx-auto gap-8 items-center justify-between">
                <div className="mt-12 mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                        <div className="w-full flex flex-row gap-5 justify-between">
                            <div className="text-4xl font-semibold w-[45%]">
                                Get the skills you need for a 
                                <HighlightText text={'Job that is in demand'} />
                            </div>
                            <div className="w-[45%] flex flex-col gap-7">
                                <p className="">
                                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </p>
                                <div className="w-fit">
                                    <CTAButton active={true} linkto={"/signup"}>
                                        Learn More
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                </div>

                <TimelineSection />

                <LearningLanguageSection />
            </div>
        </div>


        {/* Section 3 */}
        <div className="bg-richblack-900 flex flex-col justify-center items-center">
            <Instructor />
            {/* <Reviews /> */}
        </div>


        {/* Footer */}
        <Footer />


    </div>
  )
}

export default Home