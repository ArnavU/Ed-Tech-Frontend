import CTAButton from "./Button"
import HighlightedText from "./HighlightText"
import InstructorImg from "../../../assets/Images/Instructor.png"
import {FaArrowRight} from "react-icons/fa"

const Instructor = () => {
  return (
    <div className="w-11/12">
        <div className="mainDiv mt-28 mx-8 flex flex-row justify-center items-center">
            <div className="Instructor_img lg:w-[50%] drop-shadow-[-20px_-20px_rgba(255,255,255)] ">
                <img src={InstructorImg} alt="" />
            </div>
            <div className="become_instructor w-[50%] flex flex-col itme-center justify-center gap-8">
                <h1 className="text-4xl text-white font-semibold">
                    Become an <br/>
                    <HighlightedText text={"Instructor"} />
                </h1>
                <p className="font-medium text-base w-[80%] text-richblack-300">
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
                <div className="w-fit">
                    <CTAButton active={true} linkto={'/signup'}>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <div className="">Start Teaching Today</div>
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructor