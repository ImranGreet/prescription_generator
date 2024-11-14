interface Physician {
  name: string;
  age: number;
  registrationNumber: string;
  medicalCollege: string;
  hospitalName: string;
  phoneNumberForSerial: string;
  degree:string[],
  chamberTime: {
    startTime: string;
    endTime: string;
  };
}
