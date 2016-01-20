describe("stripText", function(){

  it("Makes string lowercase", function(){
    expect(stripText("Hi")).to.equal("hi");
  });
  it("deletes spaces", function(){
    expect(stripText(" ")).to.equal("");
  });
  it("deletes special characters", function(){
    expect(stripText("don't")).to.equal("dont");
  });
});

describe("columnCount", function(){
  it("takes square root of total #characters and rounds up to get the number of colums", function(){
    expect(columnCount(stripText("This isn't some message"))).to.equal(5);
  });
});

describe("makeColumn", function(){
  it("takes columCount and arranges message into that number of colums", function(){
    expect(makeColumn(stripText("This isn't some message"))).to.eql(["thisi","sntso","memes","sage"]);
  });
});

describe("cryptoSquare", function(){
  it("reads down columns from left to right and writes characters into groups of 5", function(){
    expect(cryptoSquare("This isn't some message")).to.equal("tsmsh neait mgsse eios");
  });
});
