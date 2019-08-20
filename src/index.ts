

// import * as COUNTRIESFILE from '../data/countries.json';
// import * as MANUFACTURERSFILE from '../data/manufacturers.json';
// import * as MODELYEARSFILE from '../data/modelyears.json';
// const countries2:COUNTRYLIST = COUNTRIESFILE;
// const manufacturers2:MANUFACTURERLIST = MANUFACTURERSFILE;
// const modelyears2:MODELYEARLIST = MODELYEARSFILE;

import { COUNTRIES     } from './countries';
import { MANUFACTURERS } from './manufacturers';
import { MODELYEARS    } from './modelyears';
// import * as VINGEN from 'vin-generator';

// function Vin() {

// }

// var fs = require('fs');
// var countries = JSON.parse(fs.readFileSync(__dirname + '/data/countries.json'), 'utf8');
// var manufacturers = JSON.parse(fs.readFileSync(__dirname + '/data/manufacturers.json'), 'utf8');
// var modelyears = JSON.parse(fs.readFileSync(__dirname + '/data/modelyears.json'), 'utf8');
// let datadir = './data/';
let datadir = 'data/';
let countriesFile = 'countries.json';
let manufacturersFile = 'manufacturers.json';
let modelyearsFile = 'modelyears.json';
// var countries = require(datadir + countriesFile);
// var manufacturers = require(datadir + manufacturersFile);
// var modelyears = require(datadir + modelyearsFile);
// const countries:COUNTRYLIST = require('../data/countries.json');
// const manufacturers:MANUFACTURER[] = require('../data/manufacturers.json');
// const modelyears:MODELYEAR[] = require('../data/modelyears.json');
// const countries:COUNTRYLIST = COUNTRIESFILE;
// const manufacturers:MANUFACTURERLIST = MANUFACTURERSFILE;
// const modelyears:MODELYEARLIST = MODELYEARSFILE;
const countries:COUNTRYLIST = COUNTRIES;
const manufacturers:MANUFACTURERLIST = MANUFACTURERS;
const modelyears:MODELYEARLIST = MODELYEARS;


export type COUNTRY = {code:string|number, name:string};
export type MANUFACTURER = {code:string|number, name:string};
export type MODELYEAR = {code:string, year:number};
export type COUNTRYLIST = COUNTRY[];
export type MANUFACTURERLIST = MANUFACTURER[];
export type MODELYEARLIST = MODELYEAR[];

export type VINDATA = COUNTRY|MANUFACTURER|MODELYEAR;
export type VINDATALIST = Array<COUNTRY|MANUFACTURER|MODELYEAR>;
export type VINLOOKUPLIST = COUNTRYLIST|MANUFACTURERLIST|MODELYEARLIST;

export type VALIDCHARS = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"J"|"K"|"L"|"M"|"N"|"P"|"R"|"S"|"T"|"U"|"V"|"W"|"X"|"Y"|"Z"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"0";
export type LETTERMAP = {
  [propName in VALIDCHARS]:number;
}

export interface VINDETAILS {
  wmi:string;
  vds:string;
  vis:string;
  checkDigit:string;
  modelYear:number;
  country:string;
  assemblyPlant:string;
  serialNumber:string;
  manufacturer:string;
}

export const checkVinNumber = function(vin:string):boolean {
    let cleanedVin:string = vin.toUpperCase();

    let letterMap:LETTERMAP = {
      A : 1, B : 2, C : 3, D : 4, E : 5, F : 6, G : 7, H : 8,
      J : 1, K : 2, L : 3, M : 4, N : 5, P : 7, R : 9,
      S : 2, T : 3, U : 4, V : 5, W : 6, X : 7, Y : 8, Z : 9,
      1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 0 : 0
    };
    let digitWeights:number[] = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

    let products:number = 0;
    for(let i = 0; i < cleanedVin.length; i++) {
        products += letterMap[cleanedVin[i]] * digitWeights[i];
    }
    let checkDigitShouldBe:number|string = products % 11;
    if(checkDigitShouldBe === 10) {
        checkDigitShouldBe = 'X';
    }
    return checkDigitShouldBe == cleanedVin[8];
}

export const lookup = function(keyName:string, key:string, elements:VINDATALIST):VINDATA {
  for(let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if(element[keyName] == key) {
      return element;
    }
  }
  return null;
};

export const lookupModelYear = function(keyName:string, key:string, elements:MODELYEARLIST):MODELYEAR {
  for(let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if(element[keyName] == key) {
      return element;
    }
  }
  return null;
};

export const lookupCountry = function(keyName:string, key:string, elements:COUNTRYLIST):COUNTRY {
  for(let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if(element[keyName] == key) {
      return element;
    }
  }
  return null;
};

export const lookupManufacturer = function(keyName:string, key:string, elements:MANUFACTURERLIST):MANUFACTURER {
  for(let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if(element[keyName] === key) {
      return element;
    }
  }
  return null;
};

export const getModelYear = function(vin:string):number {
    let yearCode:string = vin.charAt(9);
    // let modelYear:MODELYEAR = lookupModelYear('code', yearCode, modelyears2);
    let modelYear:MODELYEAR = lookupModelYear('code', yearCode, modelyears);
    let swapDigit:string = vin.charAt(6);
    let year:number = 0;
    if(!IsNumeric(swapDigit)){
        year = modelYear.year + 30;
    }
    return modelYear.year;
};

export const IsNumeric = function(val:number|string):boolean {
  let testNumber = Number(val);
  if(!isNaN(testNumber)) {
    return true;
  }
  return false;
};

export const getCountry = function(countryCode:string):string {
  // let country:COUNTRY = lookupCountry('code', countryCode, countries2);
    let country:COUNTRY = lookupCountry('code', countryCode, countries);
    if(country && country.name) {
      return country.name;
    }
    return '';
};

export const getManufacturer = function(manufacturerCode:string):string {
  // let manufacturer:MANUFACTURER = lookupManufacturer('code', manufacturerCode, manufacturers2);
  let manufacturer:MANUFACTURER = lookupManufacturer('code', manufacturerCode, manufacturers);
    if(manufacturer && manufacturer.name) {
      return manufacturer.name;
    }
    return '';
};


export const isValidVin = function(vin:string):boolean {
  if(typeof vin !== 'string' || vin.length === 0 || vin.length !== 17) {
    return false;
  }
  let nonAllowedCharacters = '[a-hj-npr-z0-9]';  // Don't allow characters I,O or Q
  let matcher = new RegExp("^" + nonAllowedCharacters + "{8}[0-9xX]" + nonAllowedCharacters + "{8}$", 'i');
  // if(vin.match(matcher) == null){
  if(!vin.match(matcher)){
    return false;
  }
  // Reject base on bad check digit
  return checkVinNumber(vin);
};

export const getVinDetails = function(vin:string):VINDETAILS {
  if(!isValidVin(vin)) {
    let text = "getVinDetails(): Provided with invalid VIN";
    console.warn(text + ":", vin);
    let err = new Error(text);
    throw err;
  }
  let modelYear = getModelYear(vin);
  let country = getCountry(vin.substring(0,2))
  let mfr = getManufacturer(vin.substring(0,3))
  if(modelYear && country && mfr) {
    let details:VINDETAILS = {
      wmi: vin.substring(0, 2),
      vds: vin.substring(3, 8),
      vis: vin.substring(9, 16),
      checkDigit: vin.charAt(8),
      modelYear: modelYear,
      country: country,
      assemblyPlant: vin.charAt(10),
      serialNumber: vin.substring(11),
      manufacturer: mfr,
    };
    return details;
  } else {
    let text = "getVinDetails(): Seemingly a valid VIN, but could not find model year, country code, and manufacturer code";
    console.warn(text + ":", vin);
    let err = new Error(text);
    throw err;
  }
};

// export const generateVin = VINGEN.generateVin;

// export the class
module.exports = {
  getVinDetails: getVinDetails,
  isValidVin: isValidVin,
  // generateVin: generateVin,
};