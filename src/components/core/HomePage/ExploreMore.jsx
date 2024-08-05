import { useState } from "react"
import HighlightedText from "./HighlightText"
import homePageExplore from "../../../data/homePageExplore";
import ExploreCard from "./ExploreCard";

const ExploreMore = () => {
    const courseTypes = ['Free', 'New to coding', 'Most popular', 'Skills paths', 'Career paths'];
    const [selectedTab, setselectedTab] = useState("Free");
    const [displayCards, setDisplayCards] = useState(homePageExplore[0]);
    const [selectedCard, setSelectedCard] = useState(0);

    const tabClicked = (courseType) => {
        setselectedTab(courseType);
        setDisplayCards(homePageExplore.filter((card) => card.tag === courseType)[0]);
        setSelectedCard(0);
    }


  return (
    <div className="w-full">
        <div className="mainContainer flex-col gap-9 items-center">
            <h1 className="text-4xl font-bold text-center">Unlock the
                <HighlightedText text={"Power of Code"}/>
            </h1>
            <p className="text-[16px] mt-3 font-semibold text-richblack-300 text-center">Learn to Build Anything You Can Imagine</p>
            
            <div className="tabs mx-auto mt-9 mb-64 w-fit flex flex-row items-center justify-center gap-9 bg-richblack-800 p-1 rounded-full drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
                {courseTypes.map((courseType, index) => {
                    return (
                        <div key={index} className={`text-base cursor-pointer rounded-full px-7 py-[7px] hover:bg-richblack-900 hover:text-richblack-50 transition-all duration-200
                        ${selectedTab === courseType ? "bg-richblack-900 text-richblack-50" :  ""}`}
                        onClick={() => tabClicked(courseType)}>
                            {courseType}
                        </div>
                    )
                })}
            </div>

            <div className="cardContainer mx-16 absolute -translate-y-[55%] flex flex-row gap-16 justify-center align-center full ">
                {displayCards.courses.map((cardData, index) => {
                    return (
                        <div key={cardData.heading} className="w-[40%]" onClick={() => setSelectedCard(index)}>
                            <ExploreCard cardData={cardData} selectedCard={selectedCard} id={index}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ExploreMore