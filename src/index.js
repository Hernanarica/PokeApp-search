import React from 'react';
import ReactDOM from 'react-dom';
import '@themesberg/flowbite';

import './css/index.css';
import 'pure-css-loader';
import 'animate.css';
import { PokeApp } from "./PokeApp";

ReactDOM.render(<PokeApp />, document.getElementById('root'));