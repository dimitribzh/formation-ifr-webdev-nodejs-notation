//Initialisation
const command = process.argv;
const requete = process.argv[2].toString();
import puppeteer from 'puppeteer';

//A FAIRE Quitter si aucun argument

//Déclaration des constantes de chemin
const url1 = `https://moralscore.org/search/?query=${requete}`;
const url2 = `https://fr.indeed.com/companies/search?q=${requete}&l=france`;
const src1 = 'work/src1.pdf';
const src2 = 'work/src2.pdf';

//Scraping avec la méthode Puppeteer
const getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url1);
  const result = await page.evaluate(() => {
    let note1 = document.querySelector("#app > div.container.scope-all.loading-false > section.results.count-1 > div > div > a.rating > span.all").innerText;
    return note1
  })
  await browser.close();
  let note1 = result / 5
  return note1
}

//Affichage 
getData().then(value => {
  console.log(`Score moral : ${value} / 20`)
})

//
const getData2 = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url2);
  const result = await page.evaluate(() => {
    let note = document.querySelector("#main > div > div.css-1aehwuu-Box.eu4oa1w0 > section > div:nth-child(2) > div.css-7vf1t1-Flex.e37uo190 > div > div.css-1tmuurb-Box.eu4oa1w0 > div:nth-child(2) > a > div > span").innerText;
    return note
  })
  await browser.close();
  let note = result * 4
  return note
}

getData2().then(value2 => {
  console.log(`Condition de travail : ${value2} / 20`)
})
