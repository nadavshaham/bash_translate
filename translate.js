const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const english = /^[A-Za-z0-9]*$/;
const arr = [];
const firstChar = process.argv[2];
let vgmUrl = "https://www.morfix.co.il/en/";
for (let i = 2; i < process.argv.length; i++) {
  arr.push(process.argv[i]);
  vgmUrl += process.argv[i];
  if (i != process.argv.length - 1) {
    vgmUrl += "%20";
  }
}
got(vgmUrl)
  .then((response) => {
    let raw;

    if (process.argv.length >= 4) {
      // if more than one word different class is needed
      if (english.test(firstChar)) {
        // if english different class is needed
        raw = new JSDOM(response.body).window.document.getElementsByClassName(
          "MachineTranslation_divfootertop_enTohe"
        );
      } else {
        raw = new JSDOM(response.body).window.document.getElementsByClassName(
          "MachineTranslation_divfootertop_heToen"
        );
      }
    } else if (process.argv.length <= 3) {
      raw = new JSDOM(response.body).window.document.getElementsByClassName(
        "normal_translation_div"
      );
    } else {
      error("too little args");
    }
    const trimmed = raw.item(0).innerHTML.replace(/<span.*<\/span>/, " ");
    console.log(trimmed.trim());
  })
  .catch((err) => {
    if (
      err
        .toString()
        .includes("TypeError: Cannot read property 'innerHTML' of null")
    ) {
      console.log(`couldent find translation for the word ${wordToTranslate}`);
    } else {
      console.log(err);
    }
  });
