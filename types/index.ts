export type leaderBoard = {
  year: string;
  firstName: string;
  secondName: string;
  thirdName: string;
};
export type contacts = {
  facebook: string;
  youtube: string;
  whatsApp: {
    Number1: string;
    Number2?: string;
  };
};
export type studentData = {
  user: {
    username: string;
    password: string;
  };
  phone: string;
  parent_phone: string;
  year: string;
};
export type studentCard = {
  id: number;
  studentName: string;
  year: string;
};
export type pagination = {
  dataLength: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
};
export type findStudent = {
  id: number;
  username: string;
  // user: { username: string };
  phone: string;
  parent_phone: string;
  year: string;
};
export type findStudentData = {
  id: number;
  username: string;
  phone: string;
  parent_phone: string;
  year: string;
}[];
export type editStudent = {
  user: {
    username: string;
  };
  phone: string;
  parent_phone: string;
  year: string;
};
