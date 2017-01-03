import React from 'react'
import ScrollTop from './ScrollTop'
require('./main-sass.scss')


export default class ScrollPage extends React.Component {
    render() {
        const pageBody = {
            height : "1000px"
        }
        const position = {
            top: "auto",
            left: "auto",
            right: 20,
            bottom: 20
        }
        return (
            <div style={pageBody}>
                text text text
                <ScrollTop name="arrow-up" position={position} backgroundColor="blue" scrollOffset={30} />
            </div>
        )
    }
}