export declare type COUNTRY = {
    code: string | number;
    name: string;
};
export declare type MANUFACTURER = {
    code: string | number;
    name: string;
};
export declare type MODELYEAR = {
    code: string;
    year: number;
};
export declare type COUNTRYLIST = COUNTRY[];
export declare type MANUFACTURERLIST = MANUFACTURER[];
export declare type MODELYEARLIST = MODELYEAR[];
export declare type VINDATA = COUNTRY | MANUFACTURER | MODELYEAR;
export declare type VINDATALIST = Array<COUNTRY | MANUFACTURER | MODELYEAR>;
export declare type VINLOOKUPLIST = COUNTRYLIST | MANUFACTURERLIST | MODELYEARLIST;
export declare type VALIDCHARS = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "J" | "K" | "L" | "M" | "N" | "P" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";
export declare type LETTERMAP = {
    [propName in VALIDCHARS]: number;
};
export interface VINDETAILS {
    wmi: string;
    vds: string;
    vis: string;
    checkDigit: string;
    modelYear: number;
    country: string;
    assemblyPlant: string;
    serialNumber: string;
    manufacturer: string;
}
export declare const checkVinNumber: (vin: string) => boolean;
export declare const lookup: (keyName: string, key: string, elements: (COUNTRY | MANUFACTURER | MODELYEAR)[]) => COUNTRY | MANUFACTURER | MODELYEAR;
export declare const lookupModelYear: (keyName: string, key: string, elements: MODELYEAR[]) => MODELYEAR;
export declare const lookupCountry: (keyName: string, key: string, elements: COUNTRY[]) => COUNTRY;
export declare const lookupManufacturer: (keyName: string, key: string, elements: MANUFACTURER[]) => MANUFACTURER;
export declare const getModelYear: (vin: string) => number;
export declare const IsNumeric: (val: string | number) => boolean;
export declare const getCountry: (countryCode: string) => string;
export declare const getManufacturer: (manufacturerCode: string) => string;
export declare const isValidVin: (vin: string) => boolean;
export declare const getVinDetails: (vin: string) => VINDETAILS;
