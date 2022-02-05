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
    name: string;
    password: string;
  };
  phone: string;
  parent_phone: string;
  year: string;
};
export type studentSearchData = {
  studentName: string;
  year: string;
  id: number;
};
