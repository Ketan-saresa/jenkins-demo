var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      
      res.status.should.equal(200);
      done();
    });
  });

});