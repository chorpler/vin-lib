# VIN library

A TypeScript library for working win VIN numbers.
Forked from [vin-lib](https://github.com/knodeit/vin-lib) and rewritten in TypeScript on 2019-08-19.

## Usage

```ts
import { isValidVin, getVinDetails, generateVin } from 'vin-lib-ts';

let valid = isValidVin('11111111111111111'); // returns true if this is a valid VIN
let sampleVin = generateVin(); // returns a valid random VIN
let vinDetail = vinLib.getVinDetails('11111111111111111'); // returns a structure with the following elements
{
  wmi: 'WB',
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
