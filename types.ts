
export interface Student {
  id: number;
  name: string;
  parent: string;
  quote: string;
  photo: string;
  isDev: boolean;
}

export interface Official {
  name: string;
  role: string;
}

export interface Settings {
  className: string;
  schoolName: string;
  academicYear: string;
  classLogo: string;
  schoolLogo: string;
  schoolPhoto: string;
  developer: {
    name: string;
    url: string;
    vipId: number;
  };
  externalLinks: {
    xte: string;
    depstore: string;
    school: string;
  };
  structure: {
    waliKelas: Official;
    ketuaKelas: Official;
    wakilKetua: Official;
    sekretaris: Official;
    bendahara: Official;
  };
  students: Student[];
  gallery: {
    fotoKelas: string[];
    fotoAib: string[];
    fotoKenangan: string[];
  };
}
