import './App.css';
import classes from './App.module.css'
import { useState, useEffect } from 'react';
import Offers from './components/Offers/Offers';
import CountrySelector from './components/CountrySelector/CountrySelector';
import OfferProvider from './store/OfferProvider';
import DataSelector from './components/DataSelector/DataSelector';
import DurationSelector from './components/DurationSelector/DurationSelector';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";


const App = () => {
  i18next.use(LanguageDetector).init({
    interpolation: { escapeValue: false },  
    // lng: 'fr',                              
    resources: {
        en: {
            common: common_en               
        },
        fr: {
            common: common_fr
        },
    },
  });

  // console.log(i18next.language)

  const [nberOfOffers, setnberOfOffers] = useState([0])
  const getNberOfOffers = (val) => {
    setnberOfOffers(val)
  }

  useEffect(() => {
    let communication = () => {
      let url = window.location != window.parent.location ? document.referrer : document.location.href;

      // console.log('messaging parent window')
      window.parent.postMessage(nberOfOffers, url);
    };
    communication();
  }, [nberOfOffers]);



  return (
    <I18nextProvider i18n={i18next}>
      <OfferProvider>
        <div className="App">
          <div className={classes.appContainer}>
            <div className={classes.inputsContainer}>
              <CountrySelector />
              <DataSelector />
              <DurationSelector />
            </div>
            <Offers onSendData={getNberOfOffers} />
          </div>
        </div>
      </OfferProvider>
    </I18nextProvider>
  );
}

export default App;
