import { HiUsers } from 'react-icons/hi';
import { ImTree } from 'react-icons/im';

const ExploreCard = ({cardData, selectedCard, id}) => {
    
  return (
    <div className={`card flex flex-col bg-richblack-800 gap-3 py-6 font-medium text-richblack-300 
    ${selectedCard===id ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50" : ''}`}>
        <div className={`heading text-2xl px-6  font-inter font-semibold ${selectedCard===id ? "text-richblack-600" : "text-richblack-25"}`}>
            {cardData.heading}
        </div>

        <div className="description h-[170px] px-6">
            {cardData.description}
        </div>

        <div className={`bottom-box flex flex-row justify-between items-center border-t-[3px] border-richblack-600 border-dashed px-6 pt-4 font-semibold 
            ${selectedCard==id ? "text-blue-300" : ""}`}>
            <div className='flex flex-row items-center gap-2 text-base'>
                <HiUsers />
                {cardData.level}
            </div>
            <div className='flex flex-row items-center gap-2 text-base' >
                <ImTree />
                {cardData.lessionNumber}
            </div>
        </div>
    </div>
  )
}

export default ExploreCard