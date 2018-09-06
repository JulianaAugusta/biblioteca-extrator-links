const mocha = require("mocha");
const chai = require("chai");
const text = require("../index");
const expect = chai.expect;

describe("index", function() {
  describe("#getLinksFromMd", function() {

    describe("Quando não houver parametro", function() {
      it("Deve lançar um erro", () => {
        expect(() => text.getLinksFromMd()).to.throw(Error);
        expect(() => text.getLinksFromMd("")).to.throw(Error);
      });
    });

    describe("Quando digitar no lugar do texto um numero", function() {
      it("Deve lançar um erro", () => {
        expect(() => text.getLinksFromMd(123)).to.throw(Error);
      });
    });

    describe("Quando o texto for uma string sem url", function() {
      it("Deve retornar um array vazio", () => {
        expect(text.getLinksFromMd("boa noite, bom dia!")).to.be.an("array");
        expect(text.getLinksFromMd("Olá")).to.be.empty;
      });
    });

    describe("Quando o texto é uma string com uma só URL", function() {
      it("Deve retornar um array com objeto tendo url e texto do markdown", () => {
        expect(text.getLinksFromMd("conheça o maior site de pesquisa [google](www.google.com) ?")).to.deep.equal([{href: "www.google.com", text: "google"}]);
      });
    });

    describe("Quando o texto é uma string com três urls", function() {
      it("Deve retornar um array com objetos", () => {
        expect(text.getLinksFromMd("consectetur adipiscing [google](www.google.com), sed do eiusmod tempor  incididunt [uol](www.uol.com) et [terra](www.terra.com) magna aliqua.")).to.deep.equal([{href: 'www.google.com', text: 'google'}, {href: 'www.uol.com', text: 'uol'}, {href: 'www.terra.com', text: 'terra'} ]);
      });
    });

  });
});
