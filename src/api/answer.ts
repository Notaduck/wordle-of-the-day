// const puppeteer = require("puppeteer")
const chromium = require('chrome-aws-lambda');

const asyncTimeout = timeout =>
  new Promise(resolve => setTimeout(() => resolve(), timeout))

const clickModalCloseButton = async page => {
  await page.evaluate(_ => {
    document
      .querySelector("game-app")
      .shadowRoot.querySelector("game-modal")
      .shadowRoot.querySelector('game-icon[icon="close"]')
      .click()
  })

  await asyncTimeout(500)
}

export default async function answer({ req, res }) {
<<<<<<< HEAD
  // const browser = await puppeteer.launch({
  //   headless: true,
  //   executablePath: process.env.CHROMIUM_PATH,
  //   ignoreDefaultArgs: ["--disable-extensions"], // this made it work for now
  //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
  // })

  // const browser = await chromium.puppeteer.launch({
  //   executablePath: await chromium.executablePath,
  // })
  // const executablePath = await chromium.executablePath

  // PUPPETEER_EXECUTABLE_PATH is set from my Dockerfile to /usr/bin/chromium-browser
  // for development.
  // const browser = await chromium.puppeteer.launch({
  //   args: await chromium.args,
  //   executablePath: executablePath || process.env.PUPPETEER_EXECUTABLE_PATH,
  //   headless: true,
  // })
    const browser = await chromium.puppeteer.launch({
        executablePath: await chromium.executablePath,
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        headless: chromium.headless,
    });
    

=======
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || null,
    args: ['--no-sandbox', '--headless', '--disable-gpu', "--disable-setuid-sandbox"],
    headless: true,
    ignoreDefaultArgs: ["--disable-extensions"], // this made it work for now
  })
>>>>>>> 777233555abfb9a08f5dfa7794ef0b4db07565d8
  const page = await browser.newPage()

  // await page.setViewport({
  //   width: 540,
  //   height: 800,
  // })

  await page.emulateTimezone("GMT")

  await page.goto("https://www.powerlanguage.co.uk/wordle/", {
    waitUntil: "networkidle2",
  })
  await clickModalCloseButton(page)

  const localStorage = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.localStorage))
  )

  let solution = JSON.parse(localStorage["nyt-wordle-state"]).solution
  res.status(200).json({ solution })
  await browser.close()
}
