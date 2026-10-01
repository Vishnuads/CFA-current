// VP
import V1 from "./assets/place/s1.jpg";
import V2 from "./assets/place/s2.jpg";
import V3 from "./assets/place/s3.jpg";
import V4 from "./assets/place/s4.jpg";
import V5 from "./assets/place/s50.webp";
import V6 from "./assets/place/s6.jpg";

import VC1 from "./assets/place/miw.jpg"
import VC2 from "./assets/place/pb.png"
import VC3 from "./assets/place/dn.png"

// Edit
import E1 from "./assets/place/edit-ar.png"
import E2 from "./assets/place/edit-gk.png"
import WS from "./assets/place/kur.png"

// Cine
import C1 from "./assets/place/cine-sp.webp"
import C2 from "./assets/place/cine-ap.webp"
import C3 from "./assets/place/cine-ss.png"
import KM from "./assets/place/kmb.jpg"
import GK from "./assets/place/gk2.png"
import EN from "./assets/place/10.webp"

// Director
import D3 from "./assets/place/dir-vin.webp"
import D1 from "./assets/place/din.jpeg"
import MR from "./assets/place/mrm.jpg"
import DI from "./assets/place/di.png"
import D2 from "./assets/place/dir-pv.png"

import MS from "./assets/place/ms.jpg"
import VA from "./assets/place/va.png"
import KK from "./assets/place/kk.png"

// Acting
import A1 from "./assets/place/act-ni.png"
import A2 from "./assets/place/act-ed.png"
import A3 from "./assets/place/act-iy.png"
import A4 from "./assets/place/act-ke.png"
import A5 from "./assets/place/act-km.png"
import A6 from "./assets/place/act-su.png"
import A7 from "./assets/place/act-srk.png"
import A8 from "./assets/place/act-gu.png"
import A9 from "./assets/place/act-sur.webp"
import A10 from "./assets/place/act-go.png"
import A11 from "./assets/place/act-aps.webp"
import Nik from "./assets/place/Nik.png"
import MA from "./assets/place/ma.avif"


export const placementsData = {
  Direction: [
    {
      name: 'Dhinesh',
      role: 'Assistant Director',
      company: 'Director Mani Seyon',
      note: 'Vallan, Kattapavakanom',
      dept: 'direction',
      studentImage: D1, 
      companyLogo: MS,
      workImages: [VA, KK], 
    },
    {
      name: 'Praveen Vishal',
      role: 'Assistant Director',
      note: 'Independent Filmmaker',
      company: 'Kuruthimalai Webseries',
      dept: 'direction',
      studentImage: D2,
      companyLogo: null,
      workImages: [WS],
    },
    {
      name: 'Vineeth',
      role: 'Associate Director',
      company: 'Director M.R. Madhavan',
      note: 'Dinosaurs',
      dept: 'direction',
      studentImage: D3,
      companyLogo: MR,
      workImages: [DI],
    },
  ],

  Cinematography: [
    // {
    //   name: 'Elambaruthi',
    //   role: 'Commercial Filmmaker',
    //   company: 'Independent',
    //   note: 'Worked on films featuring Amazon products',
    //   dept: 'cinematography',
    //   studentImage: null,
    //   companyLogo: null,
    //   workImages: [],
    // },

     {
      name: 'Surya Prakash',
      role: 'Cinematographer',
      company: 'K. M. Bhaskaran',
      note: 'Cinematographer of Gatta Kusthi 2',
      dept: 'cinematography',
      studentImage: C1,
      companyLogo: KM,
      workImages: [],
    },

    {
      name: 'Arun Prasath',
      role: 'Cinematographer',
      company: 'Suresh Kumar (DOP)',
      dept: 'cinematography',
      studentImage: C2,
      companyLogo: null,
      workImages: [],
    },
    {
      name: 'Shiv Shankar',
      role: 'Cinematographer & Designer',
      company: 'Kannada Film Industry',
      dept: 'cinematography',
      studentImage: C3,
      companyLogo: null,
      workImages: [],
    },
    // {
    //   name: 'Deva Prasath',
    //   role: 'Vertical Cinema',
    //   company: 'Independent',
    //   note: 'Shot 3-min shorts to 30-episode series',
    //   dept: 'cinematography',
    //   studentImage: null,
    //   companyLogo: null,
    //   workImages: [],
    // },
    // {
    //   name: 'Mugin Jayaraj',
    //   role: 'Commercial Filmmaker',
    //   company: 'Independent',
    //   note: 'Projects for "Cavinkare"',
    //   dept: 'cinematography',
    //   studentImage: null,
    //   companyLogo: null,
    //   workImages: [],
    // },
   
  ],

  Editing: [
    {
      name: 'Aravind',
      role: 'Editor',
      company: 'Kuruthimalai Web Series',
      note: '15+ short films',
      dept: 'editing',
      studentImage: E1,
      companyLogo: null,
      workImages: [WS],
    },
    
    {
      name: 'Gokul',
      role: 'Editor',
      company: 'Kuruthimalai Web Series',
      dept: 'editing',
      studentImage: E2,
      companyLogo: null,
      workImages: [WS],
    },
  ],

  'Virtual Production': [
    {
      name: 'Jawakar Shakthi',
      role: 'Unreal Engine Environment Artist',
      company: 'Magic In White',
      dept: 'virtual-production',
      studentImage: V2,
      companyLogo: VC1,
      workImages: [],
    },
    {
      name: 'Jeeva',
      role: 'Unreal Engine Animator',
      company: 'Magic In White',
      dept: 'virtual-production',
      studentImage: V3,
      companyLogo: VC1,
      workImages: [],
    },
    {
      name: 'Shwedha',
      role: 'Unreal Engine Generalist & Motion Graphics Artist',
      company: 'Magic In White',
      dept: 'virtual-production',
      studentImage: V4,
      companyLogo: VC1,
      workImages: [],
    },
    {
      name: 'Balaji',
      role: 'Unreal Engine Previz Artist',
      company: 'Magic In White',
      dept: 'virtual-production',
      studentImage: V1,
      companyLogo: VC1,
      workImages: [],
    },
    {
      name: 'Sarumathi',
      role: 'Unreal Engine TD',
      company: 'DNEG Mumbai',
      dept: 'virtual-production',
      studentImage: V5,
      companyLogo: VC3,
      workImages: [],
    },
    {
      name: 'Joyal',
      role: 'On-Set VFX Supervisor',
      company: 'Paul Bros VFX',
      dept: 'virtual-production',
      studentImage: V6,
      companyLogo: VC2,
      workImages: [],
    },
  ],

  Acting: [
    {
      name: 'Sharuk Khan',
      role: 'Actor ',
      company: 'Kuruthimalai Web series',
      note: '1 upcoming Movie',
      dept: 'acting',
      type: '6+ Short films & 5+ Ad shoots',
      studentImage: A7,
      // companyLogo: WS,
      workImages: [],
    },
    
    {
      name: 'Gurusamy',
      role: 'Actor',
      company: 'Kuruthimalai',
      note: 'Web Series',
      dept: 'acting',
      // type: 'Web Series',
      studentImage: A8,
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Gowtham',
      role: 'Actor',
      company: 'Kuruthimalai',
      note: 'Web Series',
      dept: 'acting',
      type: '2 Theatre Plays & Short films',
      studentImage: A10,
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Suriya',
      role: 'Actor',
      company: 'Kuruthimalai',
      note: 'Web Series',
      dept: 'acting',
      // type: 'Web Series',
      studentImage: A9,
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Apsal',
      role: 'Actor',
      company: 'Kuruthimalai',
      note: 'Web Series',
      dept: 'acting',
      // type: 'Web Series',
      studentImage: A11,
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Niranjana',
      role: 'Actor & Brand Model',
      company: 'Marmelo Lipstick',
      note: 'Modelling, Album Song',
      dept: 'acting',
      // type: 'Album Song',
      studentImage: A1, // e.g. A1
      companyLogo: MA,
      workImages: [],
    },

    {
      name: 'Subasri Rajendiran',
      role: 'Actor',
      company: 'Acted Movies',
      note: 'Salliyargal • Thadai Athai Udai',
      dept: 'acting',
      // type: 'Film',
      studentImage: A6, // e.g. A6
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Karthikeya Maruthu',
      role: 'Actor',
      company: 'Kuruthimalai',
      note: 'Web Series',
      dept: 'acting',
      // type: 'Web Series',
      studentImage: A5, // e.g. A5
      companyLogo: null,
      workImages: [],
    },

    {
      name: 'Iyappan',
      role: 'Actor',
      company: 'Acting',
      note: 'Joined with Director after Odyssey stage play',
      dept: 'acting',
      // type: 'Stage Play',
      studentImage: A3, // e.g. A3
      companyLogo: null,
      workImages: [],
    },

    // {
    //   name: 'Edibert',
    //   role: 'Actor',
    //   company: 'Acting',
    //   note: 'Joined with Director after Odyssey stage play',
    //   dept: 'acting',
    //   // type: 'Stage Play',
    //   studentImage: A2, // e.g. A2
    //   companyLogo: null,
    //   workImages: [],
    // },

    {
      name: 'Keerthivasan',
      role: 'Actor',
      company: 'Acting',
      note: 'Joined with Director after Odyssey stage play',
      dept: 'acting',
      // type: 'Stage Play',
      studentImage: A4, // e.g. A4
      companyLogo: null,
      workImages: [],
    },
  ],
}

export const getDepartments = () => Object.keys(placementsData)

export const getAllPlacements = () =>
  Object.entries(placementsData).flatMap(([department, list]) =>
    list.map((p) => ({ ...p, department }))
  )

export const getPlacementStats = () => {
  const all = getAllPlacements()
  return {
    totalStudents: all.length,
    totalDepartments: getDepartments().length,
    totalCompanies: new Set(all.map((p) => p.company)).size,
  }
}