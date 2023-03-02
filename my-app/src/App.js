import React from "react"
import { Quote } from './components/Quote/Quote'



const quotes = [
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: 'Lorem'},
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere quis urna ut sagittis.", author: "Ipsum"}
]
const colors = ['#0A7373', '#B7BF99', '#EDAA25', '#C43302']

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: ''}

    this.setRandomBackgroundColor = this.setRandomBackgroundColor.bind(this)
  }
  setRandomBackgroundColor() {
    let randomColor = colors[Math.floor(Math.random()*colors.length)]

    this.setState({backgroundColor: randomColor})
  }
  componentDidMount() {
    this.setRandomBackgroundColor()
  }


  render() {
    const mainStyle = {
      backgroundColor: this.state.backgroundColor, 
      height: '100vh ', 
      width: '100vw', 
      overflowX: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent:'center',
      transition: 'background-color 1s'
    }

    return (
      <div id="main" style={mainStyle}>
        <Quote quotes={quotes} setRandomBackgroundColor={this.setRandomBackgroundColor} color={this.state.backgroundColor}/>
      </div>
    )
  }
}