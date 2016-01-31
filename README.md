# VIN lib

This package is a great library to work with VIN numbers>
It can validate the VIN number and also break it down into smaller components for validation

## Usage

```js
var vinLib = require('vin-lib');
var isValidVin = vinLib.isValidVin('11111111111111111'); // returns true if this is a valid VIN
var vinDetail = vinLib.getVinDetails('11111111111111111'); // returns a structure with the following elements

{ wmi: 'WB',
  vds: 'AM334',
  vis: 'YFP7150',
  checkDigit: '6',
  modelYear: 2000,
  country: 'Germany',
  assemblyPlant: 'F',
  serialNumber: 'P71500',
  manufacturer: 'BMW' 
  }


```

 