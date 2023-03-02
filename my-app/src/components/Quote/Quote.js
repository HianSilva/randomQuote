import React from "react"
import styles from "./quoteStyle.module.css" 

function AnchorButton(props) {
  return(
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className={styles.actionButton} style={{backgroundColor: props.color}} >{props.value}</button>
    </a>
  )
}

export class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayQuote: {}, quoteOpacity: 1}

    this.setDisplayQuote = this.setDisplayQuote.bind(this);
    this.encodeUrl = this.encodeUrl.bind(this);
  }
  setDisplayQuote() {
    const quotes = this.props.quotes
    let newQuote = quotes[Math.floor(Math.random()*quotes.length)]

    if(newQuote === this.state.displayQuote){
      do{
        newQuote = quotes[Math.floor(Math.random()*quotes.length)]
      }
      while(newQuote === this.state.displayQuote)
    }

    this.setState({quoteOpacity: 0})
    
    setTimeout(() => {
      this.setState({displayQuote: newQuote})
    }, '900')

    setTimeout(() => {
      this.setState({quoteOpacity: 1})
    }, '1000')
  }

  encodeUrl(author, quote){
    const tweetIntent = 'https://twitter.com/intent/tweet?text='
    const tweetContent = `"${quote}"
- ${author}
    
    
PiranFrases`
    const url = encodeURI(tweetIntent + tweetContent)

    return url
  }

  componentDidMount() {
    this.setDisplayQuote()
  }

  render() {
    const twitterImg = <img alt='Twitter logo' src={process.env.PUBLIC_URL + 'twitter-logo.png'} className={styles.buttonImage}/>
    const author = this.state.displayQuote.author
    const quote = this.state.displayQuote.quote
    const quoteOpacity = this.state.quoteOpacity
    const color = this.props.color

    return (
      <div>
        <div className={styles.container}>
          <div id={styles.quoteContainer} style={{color: color, opacity: quoteOpacity}}>
            <p id='quoteText'>
              "{this.state.displayQuote.quote}"
            </p>
            <span id={styles.quoteAuthor}>
              - {author}
            </span>
          </div>
          <div id={styles.actionContainer}>
            <AnchorButton color={color} href={this.encodeUrl(author, quote)} value={twitterImg}/>
            <button id={styles.newQuoteButton} style={{backgroundColor: color}} onClick={()=>{this.setDisplayQuote(); this.props.setRandomBackgroundColor()}}>Nova Frase!</button>
          </div>
        </div>
        <p id={styles.devName}>por Hian Silva</p>
      </div>
    )
  }
}