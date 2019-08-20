var expect = require('chai').expect;

//var vinLib = require('../index');
// var vinLib = require('../index');
var vinLib = require('../lib/index');




// describe('Generate a random VIN', function() {
//     var vin = vinLib.generateVin();

//     valid = vinLib.isValidVin(vin);

//     it('It should be valid: ' + vin, function() {
//         expect(valid).to.be.true;
//     });
// });

describe('Given a 16 digit VIN', function() {
    var vin = 'WVWUK63B92P54681';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() {
            valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 18 digit VIN', function() {
    var vin = 'WVWUK63B92P5468188';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an i', function() {
    var vin = 'WVWUK63B92P54681i';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an I', function() {
    var vin = 'WVWUK63B92P54681I';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an o', function() {
    var vin = 'WVWUK63B92P54681o';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an O', function() {
    var vin = 'WVWUK63B92P54681O';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an q', function() {
    var vin = 'WVWUK63B92P54681q';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a 17 digit VIN with an Q', function() {
    var vin = 'WVWUK63B92P54681Q';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a valid VIN with lowercase letters', function() {
    var vin = 'wvwuk63b92p546818';

    describe('When the VIN is isValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should pass', function() {
            expect(valid).to.be.true;
        });
    });
});

describe('Given a VIN with an incorrect check digit', function() {
    var vin = 'WVWUK63B82P546818';

    describe('When the VIN is inValid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should fail', function() {
            expect(valid).to.be.false;
        });
    });
});

describe('Given a VIN with a correct check digit', function() {
    var vin = '11111111111111111';

    describe('When the VIN is Valid', function() {
        var valid;
        beforeEach(function() { valid = vinLib.isValidVin(vin); })

        it('Then it should pass', function() {
            expect(valid).to.be.true;
        });
    });
});

describe('Given a VIN with a ', function() {
    var vin = 'WBAAM3346YFP71500';

    describe('When the VIN is Valid', function() {

        var validManufacturer;
        var validWMI;
        var validVDS;
        var validVIS;
        var validCheckDigit;
        var validModelYear;
        var validCountry;
        var validSerialNumber;

        beforeEach(function() {
            details = vinLib.getVinDetails(vin);
            validWMI = details.wmi === 'WB';
            validVDS = details.vds === 'AM334';
            validVIS = details.vis === 'YFP7150';
            validCheckDigit = details.checkDigit === '6';
            validModelYear = details.modelYear === 2000;
            validCountry = details.country === 'Germany';
            validSerialNumber = details.serialNumber === 'P71500';
            validManufacturer = details.manufacturer === 'BMW';

        })
        it('Then it should pass wmi: WB', function() {
            expect(validWMI).to.be.true;
        });
        it('Then it should pass VDS:  AM334', function() {
            expect(validVDS).to.be.true;
        });
        it('Then it should pass VIS: YFP7150', function() {
            expect(validVIS).to.be.true;
        });
        it('Then it should pass validCheckDigit 6', function() {
            expect(validCheckDigit).to.be.true;
        });
        it('Then it should pass modelYear 2000', function() {
            expect(validModelYear).to.be.true;
        });
        it('Then it should pass country Germany', function() {
            expect(validCountry).to.be.true;
        });
        it('Then it should pass Serial Number P71500', function() {
            expect(validSerialNumber).to.be.true;
        });
        it('Then it should pass manufacturer BMW', function() {
            expect(validManufacturer).to.be.true;
        });


    });
});

