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

//Téléchargement des sources avec la méthode Puppeteer
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url1);
  await page.pdf({ path: src1 });
  await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url2);
    await page.pdf({ path: src2 });
    await browser.close();
  })();

//Extraction des sources


//Calcul

//Affichage

//Nettoyage