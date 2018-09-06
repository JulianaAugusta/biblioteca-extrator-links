module.exports.getLinksFromMd = function getLinksFromMd(links) {
  if (links === undefined || links === "") {
    throw new Error("Entre com um parametro");
  }

  if (typeof links === "number" || typeof links !== "string") {
    throw new Error("Insira apenas textos");
  }

  var result = [];
  let regexUrl = new RegExp (/(https?:\/\/)?(www\.)?(\w+)(\.*\w*)*(\/*\w*)*(?=\))/gi);
  let regexMarkdown = new RegExp (/(?<=\[)(.*?)(?=\])/gi);
  let urls = links.match(regexUrl);
  let textMd = links.match(regexMarkdown);
  if (urls !== null && textMd !== null) {
    result = urls.map((url, i) => ({
      "href": url,
      "text": textMd[i]
    }));
  }
  return urls ? result : [];

};
