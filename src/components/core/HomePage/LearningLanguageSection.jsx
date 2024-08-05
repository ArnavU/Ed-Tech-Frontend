import React from 'react'
import HighlightedText from './HighlightText'
import CTAButton from './Button'
import Know_your_progress from '../../../assets/Images/Know_your_progress.png'
import Compare_with_others from '../../../assets/Images/Compare_with_others.png'
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'

const LearningLanguageSection = () => {
  return (
    <div>
        <div className='learningLanguageSection mt-6 mb-14 flex flex-col items-center justify-center gap-3'>
            <div className='text-4xl'>
                Your swiss knife for 
                <HighlightedText text={"learning any language"}/>
            </div>
            <div className='text-md font-bold text-richblack-600 w-[70%] text-center'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row'>
                <div className='-mr-32'>
                    <img src={Know_your_progress} alt="" />
                </div>
                <div>
                    <img src={Compare_with_others} alt="" />
                </div>
                <div className='-ml-36'>
                    <img src={Plan_your_lessons} alt="" />
                </div>
            </div>
            <div className='w-fit'>
                <CTAButton active={true}>
                    Learn More
                </CTAButton>
            </div>
        </div>
    </div>
  )
}

export default LearningLanguageSection