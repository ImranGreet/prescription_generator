import { HospitalName } from "./interfaces";

interface Physician {
  name: string;
  age: number;
  registrationNumber: string;
  medicalCollege: string;
  hospitalName: HospitalName;
  phoneNumberForSerial: string;
  degree:string[],
  chamberTime: {
    startTime: string;
    endTime: string;
  };
}
