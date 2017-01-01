import React from 'react'
import FontAwesome from 'react-fontawesome'
require('./main-sass.scss')


export default class ScrollTop extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: "none"
        }
    }

    scrollToTop(){
        window.scrollTo(0,0);
    }

    scrollHandle(){
        if(window.scrollY >= this.props.scrollOffset){
            this.setState({
                display : "block"
            })
        } else {
            this.setState({
                display : "none"
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandle.bind(this))
    }

    render() {
        let {position, backgroundColor} = this.props;
        const style = {
            backgroundColor : backgroundColor,
            top : position.top,
            right : position.right,
            bottom : position.bottom,
            left : position.left,
            display : this.state.display
        }
        return (
            <div>
                <FontAwesome className="icon" style={style} name={this.props.name} onClick={this.scrollToTop.bind(this)} />
            </div>
        )
    }
}

ScrollTop.propTypes = {
    backgroundColor : React.PropTypes.string,
    position : React.PropTypes.shape({
        top : React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
        right : React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
        bottom : React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
        left : React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number])
    }),
    scrollOffset : React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number])
}