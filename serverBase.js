const express = require('express')
const app = express()
const port = 8080



//express server
app.get('/', (req, res) => {
  res.send('Home page')
})
//normal request from browser is get
app.get('/test', (req, res) => {
    res.sendFile('/website.html', {root: __dirname})
})
//use .sendfile and a link to the directory for html

app.post('/test', (req, res) => {
    res.send("new test")
})
//post request: cliend side request which includes data

// html
    // sites
    app.get('/kana.html', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/françis/sites/kana.html')
      })
      
          //games
      
      
      // css
      
      app.get('/Kana.css', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/css/Kana.css')
      })
      
      
      // js
          // sites
      app.get('/kana.js', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/js/kana.js')
      })
      
          // games
      
      
      // hiragana gifs
      
      app.get('/ah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/ah.gif')
      })
        
      app.get('/chih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/chih.gif')
      })
        
      app.get('/eh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/eh.gif')
      })
        
      app.get('/fuh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/fuh.gif')
      })
        
      app.get('/hah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/hah.gif')
      })
        
      app.get('/heh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/heh.gif')
      })
        
      app.get('/hih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/hih.gif')
      })
        
      app.get('/hoh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/hoh.gif')
      })
        
      app.get('/ih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/ih.gif')
      })
        
      app.get('/kah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/kah.gif')
      })
        
      app.get('/keh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/keh.gif')
      })
        
      app.get('/kih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/kih.gif')
      })
        
      app.get('/koh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/koh.gif')
      })
        
      app.get('/kuh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/kuh.gif')
      })
        
      app.get('/mah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/mah.gif')
      })
        
      app.get('/meh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/meh.gif')
      })
        
      app.get('/mih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/mih.gif')
      })
        
      app.get('/moh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/moh.gif')
      })
        
      app.get('/muh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/muh.gif')
      })
        
      app.get('/nah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/nah.gif')
      })
        
      app.get('/neh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/neh.gif')
      })
        
      app.get('/nh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/nh.gif')
      })
        
      app.get('/nih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/nih.gif')
      })
        
      app.get('/noh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/noh.gif')
      })
        
      app.get('/nuh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/nuh.gif')
      })
        
      app.get('/oh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/oh.gif')
      })
        
      app.get('/rah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/rah.gif')
      })
        
      app.get('/reh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/reh.gif')
      })
        
      app.get('/rih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/rih.gif')
      })
        
      app.get('/roh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/roh.gif')
      })
        
      app.get('/ruh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/ruh.gif')
      })
        
      app.get('/sah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/sah.gif')
      })
        
      app.get('/seh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/seh.gif')
      })
        
      app.get('/shih.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/shih.gif')
      })
        
      app.get('/soh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/soh.gif')
      })
        
      app.get('/suh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/suh.gif')
      })
        
      app.get('/tah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/tah.gif')
      })
        
      app.get('/teh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/teh.gif')
      })
        
      app.get('/toh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/toh.gif')
      })
        
      app.get('/tsuh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/tsuh.gif')
      })
        
      app.get('/uh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/uh.gif')
      })
        
      app.get('/wah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/wah.gif')
      })
        
      app.get('/woh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/woh.gif')
      })
        
      app.get('/yah.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/yah.gif')
      })
        
      app.get('/yoh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/yoh.gif')
      })
        
      app.get('/yuh.gif', (req, res) => {
        res.sendFile('c:/Users/james/Documents/sites/japanese/LearnJapaneseStepByStep/animated_characters/hiragana/yuh.gif')
      })
      
      

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 //listen for connections

 