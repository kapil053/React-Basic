/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import BasicPageHeader from './BasicPage-Header'
import BasicPageBody from './BasicPage-Body'
import BasicPageFooter from './BasicPage-Footer'

export default class BasicPage extends React.Component {
    render(){
        return (
            <div>
                <BasicPageHeader />
                <BasicPageBody />
                <BasicPageFooter />
            </div>
        )
    }
}









