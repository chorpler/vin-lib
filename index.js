/**
 * Created by Peter van de Put LPG Labs
 */
'use strict';

exports.VinLib= require('./lib');
/*
function Vin() {

}

var fs = require('fs');
var countries = JSON.parse(fs.readFileSync(__dirname + '/data/countries.json'), 'utf8');
var manufacturers = JSON.parse(fs.readFileSync(__dirname + '/data/manufacturers.json'), 'utf8');
var modelyears = JSON.parse(fs.readFileSync(__dirname + '/data/modelyears.json'), 'utf8');


var checkVinNumber = function(vin) {
    var cleanedVin = vin.toUpperCase();
    var letterMap = {A : 1, B : 2, C : 3, D : 4, E : 5, F : 6, G : 7, H : 8,
        J : 1, K : 2, L : 3, M : 4, N : 5,        P : 7,        R : 9,
        S : 2, T : 3, U : 4, V : 5, W : 6, X : 7, Y : 8, Z : 9,
        1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 0 : 0
    };
    var digitWeights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

    var products = 0;
    for(var i = 0; i < cleanedVin.length; i++) {
        products += letterMap[cleanedVin[i]] * digitWeights[i];
    }
    var checkDigitShouldBe = products % 11;
    if(checkDigitShouldBe == 10){
        checkDigitShouldBe = 'X';
    }
    return checkDigitShouldBe == cleanedVin[8];
}

var lookup = function(keyName, key, elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element[keyName] == key){
            return element;
        }
    }
    return '';
};

var getModelYear = function (vin) {
    var yearCode = vin.charAt(9);
    var modelYear = lookup('code', yearCode, modelyears);
    var swapDigit = vin.charAt(6);
    if (!IsNumeric(swapDigit)){
        return modelYear = modelYear.year + 30;
    }
    return modelYear.year;
};

function IsNumeric(val) {
    return Number(parseFloat(val))==val;
}

var getCountry = function (countryCode) {
    var country = lookup('code', countryCode, countries);
    return country.name;
};

var getManufacturer = function (manufacturerCode) {
    console.log('manufacturerCode', manufacturerCode);
    var manufacturer = lookup('code', manufacturerCode, manufacturers);
    return manufacturer.name;
};


var peter = function () {
    console.log('version 1');
  return 1;
};


var isValidVin = function (vin) {
    if (vin.length === 0 || vin.length !== 17) {
        return false;
    }
    var nonAllowedCharacters = '[a-hj-npr-z0-9]';  // Don't allow characters I,O or Q
    var matcher = new RegExp("^" + nonAllowedCharacters + "{8}[0-9xX]" + nonAllowedCharacters + "{8}$", 'i');
    if(vin.match(matcher) == null){
        return false;
    }
    // Reject base on bad check digit
    return checkVinNumber(vin);
};

var getVinDetails = function (vin) {
    var details = {
        wmi:vin.substring(0, 2),
        vds:vin.substring(3, 8),
        vis:vin.substring(9, 16),
        checkDigit:vin.charAt(8),
        modelYear: getModelYear(vin),
        country: getCountry(vin.substring(0,2)),
        assemblyPlant:vin.charAt(10),
        serialNumber: vin.substring(11),
        manufacturer: getManufacturer(vin.substring(0,3))
    };
    return details;
};

// export the class
module.exports = {
    getVinDetails: getVinDetails,
    isValidVin: isValidVin,
    peter: peter
};

    */