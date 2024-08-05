import HighlightedText from "./HighlightText"
import CTAButton from "./Button"
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({position, heading, subHeading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor, codeBlockId}) => {
  return (
    <div className={`flex ${position} my-20 justify-between`}>
        {/* Section 1 */}
        <div className={`w-[50%] flex flex-col gap-8`}>
            {heading}
            <div className="text-richblack-300 font-bold">
                {subHeading}
            </div>

            <div className={`flex gap-7 mt-7`}>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className="flex gap-2 items-center">
                        {ctabtn1.text}
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    <div className="flex gap-2 items-center">
                        {ctabtn2.text}
                    </div>
                </CTAButton>
            </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-row py-3 lg:w-[470px] border-2 border-richblack-600 h-fit text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative ">
            {/* hw bg-gradient */}

            <div className={`absolute ${codeBlockId}`}>
                {/* This is background gradient */}
            </div>

            <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
            <TypeAnimation
                sequence={[codeblock, 2000, '']}
                omitDeletionAnimation={true}
                repeat={Infinity}
                style={{
                whiteSpace: 'pre-wrap',
                display: 'block',
                fontWeight: 'bold',
                }}
          />
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks