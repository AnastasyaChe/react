import React from 'react';
import ReactDom from 'react-dom'

import {script} from './script';

const element = React.createElement(
    'hi',
    {className: "element",
'Кажетсяб мы подключаем'},
);
const element2 = <h1 className = "element">Кажетсяб мы подключаем</h1>;
const content = 'I gess....';
const Component = (props) => <hi className = "element">{props.content}</hi>;
let messages = ['Hi', 'How are you'];
const MessageComponent = (props) => {
    return props.messages.map(message=> <MessageComponent text = {message} />);
};
ReactDom.render(
    [element, element2, <Component content = { content } />, <MessageField messages = {messages} />],
    document.getElementById('root'),
)