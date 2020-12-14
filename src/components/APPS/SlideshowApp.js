import React from 'react'
import img1 from './Data/img1.jpg'
import img2 from './Data/img2.jpg'
import img3 from './Data/img3.jpg'
import navPrev from './Data/nav_prev.svg'
import navNext from './Data/nav_next.svg'


class SlideShowApp extends React.Component {
    state={
        slideIndex: 2,
        lines: 0
    }

    showSlides = () => {
        let slides = document.querySelectorAll('.myslides')
        this.setState({lines: slides.length})
        for(let i=0;i<slides.length;i++){
            slides[i].classList.remove('activeImg')
        }
        let num = this.state.slideIndex
        slides[num-1].classList.add('activeImg')
    }   

    changeSlide = (n) => {
        let slides = document.querySelectorAll('.myslides')
        let len = slides.length
        let index = this.state.slideIndex
        index += n

        index < 1 ? this.setState({slideIndex:len}) : index > len ? this.setState({slideIndex: 1}) : this.setState({slideIndex:index})

        this.showSlides()
        this.handleFill()
        
    }

    // fill indicator color 
    handleFill = () => {
        let index = this.state.slideIndex -1
        let lines = document.querySelectorAll(".indicator")

        for(let i=0;i<lines.length;i++){
            lines[i].classList.remove('fill')
        }

        for(let i=0;i<lines.length;i++){
            if(i === index){
                lines[i].classList.add('fill')
            }
        }
    }

    render(){
        return(
            <div className="section">
                <h1>Slide Show App</h1>
                <div className="imgContainer">
                    {/* image 1 */}
                    <div className="myslides fade activeImg">
                        <img src={img1} alt="img"/>
                    </div>
                    {/* image 2  */}
                    <div className="myslides fade">
                        <img src={img2} alt="img"/>
                    </div>
                    {/* image 3 */}
                    <div className="myslides fade">
                        <img src={img3} alt="img"/>
                    </div>

                    <img src={navPrev} onClick={() => this.changeSlide(-1)} className="prev" alt="prev"/>
                    <img src={navNext} onClick={() => this.changeSlide(1)} className="next" alt="next"/>
                    
                </div>
                <div className="lines">
                    <span className="indicator fill"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                </div>
            </div>
        )

    }

}

export default SlideShowApp