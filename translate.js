const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const wordToTranslate = process.argv[2];
const vgmUrl = "https://www.morfix.co.il/en/" + wordToTranslate;
got(vgmUrl)
  .then((response) => {
    console.log(
      new JSDOM(response.body).window.document
        .getElementsByClassName("normal_translation_div")
        .item(0)
        .innerHTML.replace(/<span.*<\/span>/, " ")
    );
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
