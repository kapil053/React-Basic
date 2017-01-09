import React from 'react';
import ReactDOM from 'react-dom';
import renderPage from '../tools/render-page';
import AddTweet from '../../src/components/addTweet';
import { expect } from 'chai';


describe('Test for name', function(){
    before(function(){
        this.page = renderPage(<AddTweet />)
    })
    after(function(){
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    it('should render name component', function(){
        expect (this.page.find('.name').at(0).length).eq(1)
    })
    it('should render name component text', function(){
        expect (this.page.find('.name').at(0).text()).eq('Kapil')
    })
})