"use strict";

const insertion = require('../insertion');



describe("Insertion Sort", () => {

  it("Can successfully sort an array", () => {
    expect(insertion([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  it("Can successfully sort a Reverse-sorted array", () => {
    expect(insertion([20,18,12,8,5,-2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("Can successfully sort a Few uniques array", () => {
    expect(insertion([5,12,7,5,5,7])).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it("Can successfully sort a Nearly-sorted array", () => {
    expect(insertion([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });

});
