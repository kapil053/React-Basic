import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

//export default function renderPage(component) {
//    return mount(
//        <div>
//            {component}
//        </div>
//    )
//}

export default function renderPage(component) {
    return mount(
        <div>
            {component}
        </div>
    )
}