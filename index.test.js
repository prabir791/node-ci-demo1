/* global test, expect */

const add = require("./index");

test ("Adds 5+10",()=>{
    expect(add(5,10)).toBe(15)
});