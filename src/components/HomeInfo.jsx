import React from 'react'
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text , link , btnText}) =>(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center text-black">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn ">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-black mx-5">
            Hi ,I AM <span className="font-semibold">Kudzi</span> 
            <br/>
            A Software Engineer from Zimbabwe
        </h1>
    ),
    2:(
        <InfoBox 
        text="Worked with many companies and picked up many skills 
        along the way"
        link="/about"
        btnText="Learn more ......."/>
    ),
    3:(
        <InfoBox
        text="Lead multi projects into success over the years.
        Curious about the impact ?"
        link="/projects"
        btnText="Visit My portfolio ......."/>
    ),
    4:(
        <InfoBox
        text="Need a project done or looking for a dev ? I'm a few clicks away 
        "
        link="/contact"
        btnText="Lets Talk ......."/>
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo

