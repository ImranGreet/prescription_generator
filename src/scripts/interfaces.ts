interface Physician {
    name: string;
    age: number;
    registrationNumber: string;
    medicalCollege: string;
    hospitalName:HospitalName,
    phoneNumberForSerial:string,
    chamberTime: {
      startTime: string; 
      endTime: string;   
    };
  }
  
interface Address {
    streetName:string,
    roadNumber:string,
    district:string,
  }

interface Patient {
    name:string,
    age:number,
    sex:string,
    address?:Address,
  }

interface MedicineTrack {
    brandName:string,
    schedule:string,
    BeforeOrAfterMeal:string
  }

interface HospitalName {
    name:string
  }
  
  export {
    Physician,
    Patient,
    MedicineTrack
  }

