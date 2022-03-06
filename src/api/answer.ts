const puppeteer = require("puppeteer")

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
  const browser = await puppeteer.launch({
    headless: true,
    ignoreDefaultArgs: ["--disable-extensions"], // this made it work for now
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()

  await page.setViewport({
    width: 540,
    height: 800,
  })

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