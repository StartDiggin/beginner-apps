import React from 'react'


class RandomMeme extends React.Component{
    state={
        topText: "",
        btmText: "",
        randImg: "https://i.imgflip.com/3si4.jpg",
        imgs: []
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data
            this.setState({
                imgs: memes
            })
        })
    }

    // handle change 
    handleChange = (e) => {
        const {name, value } = e.target 
        this.setState({
            [name]:value
        })
    }

    // handle submit 
    handleSubmit = (e) => {
        e.preventDefault()
        let imgsLen = this.state.imgs.length 
        let num = Math.floor(Math.random() * imgsLen)
        let img =   this.state.imgs[num].url 
        this.setState(
            {
                
                randImg: img
            }
        )
        e.target.topText.value =""
        e.target.btmText.value =""
      
    
    }



    render(){
        return(
            <div className="section">
                <div className="randomMemes">
                    <h1 className="pageHeading">Random Memes</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Top text:</label>
                        <input 
                            type="text"
                            name="topText"
                            // value={this.state.topText}
                            onChange={this.handleChange}
                        /> <br />
                        <label>Bottom text:</label>
                        <input 
                            type="text"
                            name="btmText"
                            onChange={this.handleChange}
                        />
                        <button>Meme</button>
                    </form>
                    {/* display div  */}
                    <div>
                        <img className="randImg" src={this.state.randImg} alt="meme img"/>
                        <h3 className="topText">{this.state.topText}</h3>
                        <h3 className="btmText">{this.state.btmText}</h3>
                    </div>
                </div>
            </div>
        )

    }


}

export default RandomMeme;