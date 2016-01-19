describe("cryptoSquare", function(){

  it("Makes string lowercase", function(){
    expect(cryptoSquare("Hi")).to.equal("hi");
  });
  it("deletes spaces", function(){
    expect(cryptoSquare(" ")).to.equal("");
  });
  it("deletes special characters", function(){
    expect(cryptoSquare("don't")).to.equal("dont");
  });
  it("takes square root of total #characters and rounds up to get the number of colums", function(){
    expect(cryptoSquare("55")).to.equal("8");
  });
});
