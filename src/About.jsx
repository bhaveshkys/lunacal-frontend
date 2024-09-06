import React from 'react'

const About = () => {
  return (
    <div className="bg-[#272B30] text-white font-inter h-screen flex items-center justify-center">
        <div className="w-[768px] ">
            {/* First Section */}
            <div className="bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <img className=" items-start  text-[hsl(222,8%,67%)] " height={24} width={24} src={"../public/image.png"} />
                    <div className="flex space-x-4 bg-[#171717] rounded-[18px] p-[5px] ml-2">
                        <button className=" hover:bg-[#22252B] hover:shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1)]   text-white py-2 px-4 rounded-[16px]">About Me</button>
                        <button className=" hover:bg-[#22252B] hover:shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1)]   text-white py-2 px-4 rounded-[16px]">Experiences</button>
                        <button className=" hover:bg-[#22252B] hover:shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1)]   text-white py-2 px-4 rounded-[16px]">Recommended</button>
                    </div>
                    <div className=" space-x-4  rounded-[18px] p-[5px] ml-2">
                        { 
                        // for allignment 
                        }
                    </div>
                </div>
                <div className='flex  '>
                  <div className=' self-center pb-6'>
                <img  height={40} width={40} src={"/grid.png"} />
                  </div>
                <div className="text-[#CACED8] text-sm mb-6 text-left px-4">
                    <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                    <p className="mt-4">I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...</p>
                </div>
                <div className="flex justify-end">
                    <div className="w-[5px] h-[70px] bg-[#60646F] rounded-full"></div>
                </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                <img className=" items-start  text-[hsl(222,8%,67%)] " height={24} width={24} src={"../public/image.png"} />
                    <button className="bg-[#171717] text-white  rounded-[20px] py-4 px-8">Gallery</button>
                    <button className="bg-[#616673] text-white py-2 px-6 rounded-full flex items-center space-x-2 shadow-[-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25),9px_10px_7.1px_0px_rgba(0,0,0,0.4)] shadow-inner-[0px_0px_48.91px_0px_rgba(255,255,255,0.05)] ">
                        <i className="fas fa-plus"></i>
                        
                        <span>ADD IMAGE</span>
                    </button>
                    <div className="flex space-x-2">
                        <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#303439] to-[#161718] rounded-full shadow-[-5px_-3px_30px_-10px_rgba(105,190,231,1)]">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#303439] to-[#161718] rounded-full shadow-[-5px_-3px_30px_-10px_rgba(105,190,231,1)]">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className='flex'>
                    <div className=' self-center pb-6 mr-2'>
                <img  height={20} width={20} src={"../public/grid.png"} />
                    </div>
                <div className="grid grid-cols-3 gap-4">
                    <img src="/galleryPhoto.png" alt="Gallery Image" className="rounded-lg" />
                    <img src="/galleryPhoto.png" alt="Gallery Image" className="rounded-lg" />
                    <img src="/galleryPhoto.png" alt="Gallery Image" className="rounded-lg" />
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About