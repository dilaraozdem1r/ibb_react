//rfc

import React from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

import tr_flag from "../assist/flag/tr.png";
import en_flag from "../assist/flag/en.png";

import 

//funciton
 function OtherLanguageReusability(props) {
    //bayraklar datalar
    const internationalizationLanguageService= (languageButtonTrigger)=>{
        const {i18n}=props;
        i18n.changeLanguage(languageButtonTrigger);
        OtherLanguageServices.headerAccessLanguageServices(languageButtonTrigger)
    }
    //return
  return (
    <React.Fragment>
        <ul class="list-group list-group-numbered">
            <li class="list-group-item active">
                <Link className='btn btn-primary' onClick={()=>('tr')}>
                    <img src={tr_flag} />
                </Link>
            </li>
            <li class="list-group-item active">
            <Link className='btn btn-primary' onClick={()=>internationalizationLanguageService('en')}>
                <img src={en_flag} />
            </Link>
        </li>
          
        </ul>
    </React.Fragment>
  )
}
import OtherLanguageServices from './OtherLanguageServices';

export default withTranslation()(OtherLanguageReusability);