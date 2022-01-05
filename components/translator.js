const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const americanDict={...americanToBritishSpelling,...americanOnly,...americanToBritishTitles};
const britishOnly = require('./british-only.js')
var revAmericanDict = {};
for(var key in americanDict){
    revAmericanDict[americanDict[key]] = key;
}
    let reply="";
    let sent=""
    let timeAm=/[0-9]{2}:[0-9]{2}/
    let timeExp=/[0-9]{2}.[0-9]{2}/
    let count=0
const britishDict={...revAmericanDict,...britishOnly};
class Translator {
  wrap(text){
    return '<span class="highlight">'+text+"</span>"
  }
  bTa(str){
    reply="";
    count=0
    sent=str.split(" ");
    sent.map((word,id)=>{
      if(britishDict[word]){
        count++
        word=this.wrap(britishDict[word])
      }
       sent[id]=word;
    })
    sent.forEach((word)=>{
      reply=reply+" "+word;
    })
     reply.trim();
    if(count==0){
    reply= "Everything looks good to me!"
    }
    console.log(str+"\ntranslated to american: "+reply)
     return reply;
  }
  aTb(str){
    reply="";
    count=0
    sent=str.split(" ");
    sent.map((word,id)=>{
     if(americanDict[word]){
        count++
        word=this.wrap(americanDict[word])
      }
       sent[id]=word;
    })
    sent.forEach((word)=>{
      reply=reply+" "+word;
    })
    reply.trim();
    if(count==0){
      reply = "Everything looks good to me!"
    }
        console.log(str+"\ntranslated to british: "+reply)

    return reply   
  }
}

module.exports = Translator;
