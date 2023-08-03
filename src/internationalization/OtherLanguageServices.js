
//Language
class OtherLanguageServices{

    //Language Flag Button
    headerAccessLanguage(languageButtonTrigger){
        axios.defaults.headers["accept-language"]=languageButtonTrigger;
    }
    
}

export default new OtherLanguageServices();