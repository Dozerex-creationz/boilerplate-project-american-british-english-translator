'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();
  
  app.route('/api/translate')
    .post((req, res) => {
      const locale=req.body.locale;
      const text=req.body.text;
      let ans="";
      let trans=""
      if(!text || !locale){
        ans={ error: 'Required field(s) missing' }
      }
      if(text==''){
        ans={ error: 'No text to translate' }
      }
      else if(locale!="american-to-british" && locale!="british-to-american"){
        ans={ error: 'Invalid value for locale field' }
      }
      else{      
      switch(locale){
        case "american-to-british":
        {
          trans=translator.aTb(text)
          ans={text:text,translation:trans}
        }
        case "british-to-american":
        {
          trans=translator.bTa(text)
          ans={text:text,translation:trans}
        }
        default:
        {
          ans={ error: 'Invalid value for locale field' }
        }
      }}
      res.json(ans);        
    });
};
