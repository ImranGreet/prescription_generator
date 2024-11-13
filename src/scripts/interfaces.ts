interface Address {
  streetName: string;
  roadNumber: string;
  district: string;
}

interface Patient {
  name: string;
  age: number;
  sex: string;
  address?: Address;
}

interface MedicineTrack {
  brandName: string;
  schedule: string;
  BeforeOrAfterMeal: string;
}

interface HospitalName {
  name: string;
}

interface HospitalDetails {
  hospitalName: string;
  hospitalAddress: string;
  hospitalPhone: string[];
}

export { HospitalName, Patient, MedicineTrack, HospitalDetails };
