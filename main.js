const express = require('/usr/local/lib/node_modules/'+'express');
const app = express();
const port = 3010;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/diagram', (req, res) => {
    res.sendFile(__dirname+'/diagram.html');
});

app.listen(port, () => {
    console.log(`listening at port:${port}`);
});

const {Builder, By, Key, until} = require('/usr/local/lib/node_modules/'+'selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
      await driver.get("localhost:"+port+"/diagram");
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})();