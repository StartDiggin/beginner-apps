import React from 'react'


const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



class RandomColor extends React.Component {
    state={
        color: "red",
        hexColor:"#000",
        rgbaColor: "rgba(0,1,2,0.3)",
        hslaColor:"hsla"
    }



    // returns a random hex value 
    hexColor = () => {
        let hexC = ""
        for(let i=0; i<6;i++){
            let num = Math.floor(Math.random() * 16) 
            hexC += hex[num]
        }
        let hexNum = "#"+ hexC
        
        this.setState({
            hexColor: hexNum
        })
    }

    // returns a random rgba color 
    rgbaColor = () => {
        let rgbaC = "rgba(0,1,2,3)"
        let num1 = Math.floor(Math.random() * 256)
        let num2 = Math.floor(Math.random() * 256)
        let num3 = Math.floor(Math.random() * 256)
        let num4 = Math.random().toFixed(2)
        rgbaC = `rgba(${num1},${num2},${num3},${num4})`
        this.setState({
            rgbaColor: rgbaC
        })
    }
    
    // returns a random hsla color 
    hslaColor = () => {
        let hslaC = "";
        let num1 = Math.floor(Math.random() * 361)
        let num2 = Math.floor(Math.random().toFixed(2) * 100) + "%"
        let num3 = Math.floor(Math.random().toFixed(2) * 100) + "%"
    
        hslaC = `hsla(${num1},${num2},${num3})`
        this.setState({
            hslaColor: hslaC
        })

    }



    render(){
        const styles={
            color: this.state.hexColor
        }
        const styles1={
            color: this.state.rgbaColor
        }
        const styles2={
            color: this.state.hslaColor
        }
        return(
            <div>
                {/* hex color  */}
                <h1 style={styles}>Random Hex Color</h1>
                <h4>Hex color: {this.state.hexColor}</h4>
                <button onClick={this.hexColor}>Hex color</button>
                {/* rgba color  */}
                <h1 style={styles1}>Random RGBA Color</h1>
                <h4>RGBA color: {this.state.rgbaColor}</h4>
                <button onClick={this.rgbaColor}>RGBA color</button>
                {/* hsla color  */}
                <h1 style={styles2}>Random HSLA Color</h1>
                <h4>HSLA color: {this.state.hslaColor}</h4>
                <button onClick={this.hslaColor}>HSLA color</button>
            </div>
        )

    }
}





export default RandomColor