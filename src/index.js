import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import App from './components/App.js';
import NoMatchExample from './components/NoMatchExample.js';
import AuthExample from './components/AuthExample.js';
import LoginApp from './components/LoginApp.js';

//i18n
import { IntlProvider, addLocaleData } from 'react-intl';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

addLocaleData([...locale_en, ...locale_de]);

import messages_de from "./locales/de.json";
import messages_en from "./locales/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

const Index = () => {
  return <div className='btn btn-primary'>Hello!
    <div>
        <FormattedMessage
            id='app.title'
            description='{app.title}'
            defaultMessage='Hello, {name}!'
            values={{
                name: <b>Eric</b>
            }}
        />
    </div>
  </div>;
};

ReactDOM.render(
    <BrowserRouter>
        <IntlProvider locale={language} messages={messages.en}>
              {/* <App />*/}
              {/* <NoMatchExample />*/}
             {/* }<AuthExample /> */}
             <LoginApp />
         </IntlProvider>
     </BrowserRouter>,
  document.getElementById("index")
);
