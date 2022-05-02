'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheaperHotel = hotels.getCheaperHotel 

describe('test', function () {
  it('should return Lakewood', function () {
    expect(getCheaperHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Bridgewood', function () {
    expect(getCheaperHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheaperHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Ridgewood");
  });
})