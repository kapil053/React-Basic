import React from 'react'
import ScrollTop from './ScrollTop'
require('./main-sass.scss')


export default class ScrollPage extends React.Component {
    render() {
        const pageBody = {
            height : "1000px"
        }
        return (
            <div style={pageBody}>
                text text text
                <ScrollTop name="arrow-up" position={{top: "auto",left: "auto", right: 20, bottom: 20}} backgroundColor="blue" scrollOffset={30} />
            </div>
        )
    }
}