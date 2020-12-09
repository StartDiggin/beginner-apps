import React from 'react'
import img1 from './Data/img1.jpg'
import img2 from './Data/img2.jpg'
import img3 from './Data/img3.jpg'
import navPrev from './Data/nav_prev.svg'
import navNext from './Data/nav_next.svg'


class SlideShowApp extends React.Component {



    handleNext = () => {
       let imgDivs = [...document.querySelectorAll(".ssImg")]
       
        // check id if id is 1 add class to id 2 or 
       if(imgDivs[0].classList.contains("active")){
            imgDivs[0].classList.remove("active")
            imgDivs[1].classList.add("active")
       };
    }

    render(){
        return(
            <div className="section">
                <h1>Slide Show App</h1>
                <div className="ssContainer">
                    <div className="imgContainer">
                        <div id="1" className="ssImg active">
                            <img src={img1} className="imgs" alt="img"/>
                        </div>
                        <div id="2" className="ssImg ">
                            <img src={img2} className="imgs" alt="img"/>
                        </div>
                        <div id="3" className="ssImg ">
                            <img src={img3} className="imgs" alt="img"/>
                        </div>
                        <img src={navPrev} className="navPrev" alt="prev"/>
                        <img src={navNext} onClick={this.handleNext} className="navNext" alt="next"/>
                    </div>
                </div>
            </div>
        )

    }

}

export default SlideShowApp