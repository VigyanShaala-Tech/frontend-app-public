// src/components/Team/messages.ts

import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  // ── Breadcrumbs ───────────────────────────────────────────────────────────
  'team.breadcrumb.home': {
    id: 'team.breadcrumb.home',
    defaultMessage: 'Home',
  },
  'team.breadcrumb.team': {
    id: 'team.breadcrumb.team',
    defaultMessage: 'Team',
  },

  // ── Page & Sections ───────────────────────────────────────────────────────
  'team.page.title': {
    id: 'team.page.title',
    defaultMessage: 'Meet Our Team',
  },
  'team.section.theFounders': {
    id: 'team.section.theFounders',
    defaultMessage: 'The Founders',
  },
  'team.section.boardOfTrustees': {
    id: 'team.section.boardOfTrustees',
    defaultMessage: 'Board of Trustees',
  },
  'team.section.advisoryCouncil': {
    id: 'team.section.advisoryCouncil',
    defaultMessage: 'Advisory Council',
  },
  'team.section.teamMembers': {
    id: 'team.section.teamMembers',
    defaultMessage: 'Team Members',
  },
  'team.member.defaultName': {
    id: 'team.member.defaultName',
    defaultMessage: 'Team Member',
    description: 'Fallback name when team member name is missing',
  },

  // ── Subsections ───────────────────────────────────────────────────────────
  'team.subsection.sheForStemAdvisors': {
    id: 'team.subsection.sheForStemAdvisors',
    defaultMessage: 'She for STEM Advisors',
  },
  'team.subsection.advisors': {
    id: 'team.subsection.advisors',
    defaultMessage: 'Advisors',
  },
  'team.subsection.operationsTeam': {
    id: 'team.subsection.operationsTeam',
    defaultMessage: 'Operations Team',
  },
  'team.subsection.financeFundraisingAndPartnerships': {
    id: 'team.subsection.financeFundraisingAndPartnerships',
    defaultMessage: 'Finance, Fundraising and Partnerships',
  },
  'team.subsection.productDevelopment': {
    id: 'team.subsection.productDevelopment',
    defaultMessage: 'Product Development',
  },
  'team.subsection.socialMediaAndCommunications': {
    id: 'team.subsection.socialMediaAndCommunications',
    defaultMessage: 'Social Media and Communications',
  },
  'team.subsection.stemChampionsTeam': {
    id: 'team.subsection.stemChampionsTeam',
    defaultMessage: 'STEM Champions Team',
  },

  // ── Roles ─────────────────────────────────────────────────────────────────
  'team.role.ceo':                        { id: 'team.role.ceo',                        defaultMessage: 'CEO' },
  'team.role.managingTrusteeCoo':         { id: 'team.role.managingTrusteeCoo',         defaultMessage: 'Managing Trustee, COO' },
  'team.role.executiveTrustee':           { id: 'team.role.executiveTrustee',           defaultMessage: 'Executive Trustee' },
  'team.role.nonExecutiveTrustee':        { id: 'team.role.nonExecutiveTrustee',        defaultMessage: 'Non-Executive Trustee' },
  'team.role.advisor':                    { id: 'team.role.advisor',                    defaultMessage: 'Advisor' },

  'team.role.seniorProgramManager':       { id: 'team.role.seniorProgramManager',       defaultMessage: 'Senior Program Manager' },
  'team.role.associateOperations':        { id: 'team.role.associateOperations',        defaultMessage: 'Associate – Operations' },
  'team.role.seniorExecutiveOperations':  { id: 'team.role.seniorExecutiveOperations',  defaultMessage: 'Senior Executive – Operations' },
  'team.role.educationTrainingSpecialist':{ id: 'team.role.educationTrainingSpecialist',defaultMessage: 'Associate – Education Training Specialist' },
  'team.role.curriculumSpecialist':       { id: 'team.role.curriculumSpecialist',       defaultMessage: 'Education Training Specialist – Curriculum' },
  'team.role.seniorExecutiveDataOps':     { id: 'team.role.seniorExecutiveDataOps',     defaultMessage: 'Senior Executive, Data Operations' },
  'team.role.seniorExecutiveFinance':     { id: 'team.role.seniorExecutiveFinance',     defaultMessage: 'Senior Executive, Finance and Accounts' },
  'team.role.fundraisingSeniorAssociate': { id: 'team.role.fundraisingSeniorAssociate',   defaultMessage: 'Senior Associate – Fundraising and Partnerships' },
  'team.role.financeConsultant':          { id: 'team.role.financeConsultant',          defaultMessage: 'Finance Consultant' },
  'team.role.seniorExecutive':            { id: 'team.role.seniorExecutive',            defaultMessage: 'Senior Executive' },
  'team.role.associateProductDev':        { id: 'team.role.associateProductDev',        defaultMessage: 'Associate – Product Development' },
  'team.role.chapterCoordinator':         { id: 'team.role.chapterCoordinator',         defaultMessage: 'Chapter Co-ordinator' },
  'team.role.komalDiwakar':               { id: 'team.role.komalDiwakar',                 defaultMessage: 'BI Developer, Axis Mutual Fund' },
  'team.role.aparnaManoj':                { id: 'team.role.aparnaManoj',                  defaultMessage: 'PhD candidate, Max Planck Institute' },
  'team.role.shramanaGuchhait':           { id: 'team.role.shramanaGuchhait',             defaultMessage: 'Scientist, AstraZeneca' },
  'team.role.gauriPatti':                 { id: 'team.role.gauriPatti',                   defaultMessage: 'PhD student in Astrophysics, University of Leeds' },
  'team.role.dikshaNagarkoti':            { id: 'team.role.dikshaNagarkoti',              defaultMessage: 'Master\'s student in Conservation Practice, ATREE' },
  'team.role.saeeKamat':                  { id: 'team.role.saeeKamat',                    defaultMessage: 'PhD scholar, Iowa State University, USA' },
  'team.role.ishaKabara':                 { id: 'team.role.ishaKabara',                   defaultMessage: 'Project Associate, TCG CREST (Research Institute for Sustainable Energy)' },
  'team.role.purvaJoshi':                 { id: 'team.role.purvaJoshi',                   defaultMessage: 'M.Sc. Neurophysics, Radboud University' },
  'team.role.tejaswiniVenkatramanan':     { id: 'team.role.tejaswiniVenkatramanan',       defaultMessage: 'BS-MS final-year student, IISER Tirupati. Master\'s thesis researcher, Max Delbrück Centre' },
  'team.role.abhaBharge':                 { id: 'team.role.abhaBharge',                   defaultMessage: 'Computer Engineering student. Incoming Software Development Engineering Intern, Visa' },
  'team.role.tanishaGupta':               { id: 'team.role.tanishaGupta',                 defaultMessage: 'Associate Solutions Engineer, Razorpay' },
  'team.role.muralika':                   { id: 'team.role.muralika',                     defaultMessage: 'Fully funded postgraduate student in Physics, Technion' },
  'team.role.ojaswitaPant':               { id: 'team.role.ojaswitaPant',                 defaultMessage: 'Master\'s thesis at EPFL. Kalpana alumna' },
  'team.role.ahanaGhosh':                 { id: 'team.role.ahanaGhosh',                   defaultMessage: 'Master\'s student in Life Science (Biotechnology), Christ University' },
  'team.role.lavanyaSachdev':             { id: 'team.role.lavanyaSachdev',               defaultMessage: 'Final-year B.Sc. (Hons.) Biotechnology' },
  'team.role.yashaswiniAjay':             { id: 'team.role.yashaswiniAjay',               defaultMessage: 'M.Sc. Cognitive Science, IIT Gandhinagar' },
  'team.role.arhamaShiekh':               { id: 'team.role.arhamaShiekh',                 defaultMessage: 'Kalpana fellow' },
  'team.role.hPinkyRuthChanu':            { id: 'team.role.hPinkyRuthChanu',              defaultMessage: 'PhD scholar at IIT Guwahati' },
  'team.role.kanchanBafila':              { id: 'team.role.kanchanBafila',                defaultMessage: 'Research Associate at Azim Premji University' },
  'team.role.tanuja':                     { id: 'team.role.tanuja',                       defaultMessage: 'Embedded Systems Designer, Vector Robotics' },
  'team.role.garimaUpadhyay':             { id: 'team.role.garimaUpadhyay',               defaultMessage: 'Senior Associate, Venture Center' },
  'team.role.srishtiDhillon':             { id: 'team.role.srishtiDhillon',               defaultMessage: 'Software Engineering Intern, Nokia' },
  'team.role.lRakshitha':                 { id: 'team.role.lRakshitha',                   defaultMessage: 'B.Sc. Biotechnology (Hons.) student, Christ University, Bangalore' },
  'team.role.bhumikaSingh':               { id: 'team.role.bhumikaSingh',                 defaultMessage: 'Master\'s student in Chemistry, Ramjas College, Delhi' },
  'team.role.dikshaRao':                  { id: 'team.role.dikshaRao',                    defaultMessage: 'M.Sc. Data Science student; Founder, SheBuilds Empire' },
  'team.role.devikaHC':                   { id: 'team.role.devikaHC',                     defaultMessage: 'B.Sc. Physics & Computer Science graduate, Christ College (Kerala University)' },
  'team.role.priyankaGeed':               { id: 'team.role.priyankaGeed',                 defaultMessage: 'B.Sc. (Hons.) Chemistry student, Miranda House, University of Delhi' },
  'team.role.shivaniNandakumar':          { id: 'team.role.shivaniNandakumar',            defaultMessage: 'M.Sc. Neuroscience, University of Exeter' },
  'team.role.anushkaShukla':              { id: 'team.role.anushkaShukla',                defaultMessage: 'M.Sc. Botany student, Government E.V.P.G. College, Korba' },
  'team.role.preetiBora':                 { id: 'team.role.preetiBora',                   defaultMessage: 'Enzene Biosciences Ltd' },

  // ── Names ─────────────────────────────────────────────────────────────────
  'team.name.darshanaJoshi':              { id: 'team.name.darshanaJoshi',              defaultMessage: 'Dr. Darshana Joshi, PhD' },
  'team.name.vijayVenugopalan':           { id: 'team.name.vijayVenugopalan',           defaultMessage: 'Dr. Vijay Venugopalan, PhD' },
  'team.name.archanaSharma':              { id: 'team.name.archanaSharma',              defaultMessage: 'Dr. Archana Sharma' },
  'team.name.abhishekJain':               { id: 'team.name.abhishekJain',               defaultMessage: 'Abhishek Jain' },
  'team.name.priyankHirani':              { id: 'team.name.priyankHirani',              defaultMessage: 'Priyank Hirani' },

  'team.name.pratibhaJolly':              { id: 'team.name.pratibhaJolly',              defaultMessage: 'Prof. Pratibha Jolly' },
  'team.name.shobhanaNarasimhan':         { id: 'team.name.shobhanaNarasimhan',         defaultMessage: 'Prof Shobhana Narasimhan' },
  'team.name.archanaSharmaCERN':          { id: 'team.name.archanaSharmaCERN',          defaultMessage: 'Dr Archana Sharma (CERN)' },
  'team.name.saviSharma':                 { id: 'team.name.saviSharma',                 defaultMessage: 'Savi Sharma' },
  'team.name.durgeshPant':                { id: 'team.name.durgeshPant',                defaultMessage: 'Prof Durgesh Pant' },
  'team.name.gNagarjuna':                 { id: 'team.name.gNagarjuna',                 defaultMessage: 'Prof. G Nagarjuna' },

  'team.name.vandanaTilak':               { id: 'team.name.vandanaTilak',               defaultMessage: 'Vandana Tilak' },
  'team.name.archanaPillai':              { id: 'team.name.archanaPillai',              defaultMessage: 'Dr Archana Pillai' },
  'team.name.babuJoseph':                 { id: 'team.name.babuJoseph',                 defaultMessage: 'Babu Joseph' },
  'team.name.lakshminarayanaKR':          { id: 'team.name.lakshminarayanaKR',          defaultMessage: 'Lakshminarayana K R' },
  'team.name.amitVarshneya':              { id: 'team.name.amitVarshneya',              defaultMessage: 'Amit Varshneya' },
  'team.name.anjaliHegde':                { id: 'team.name.anjaliHegde',                defaultMessage: 'Anjali Hegde' },

  'team.name.sreejithSreenivasan':        { id: 'team.name.sreejithSreenivasan',        defaultMessage: 'Sreejith Sreenivasan' },
  'team.name.bhuwanJoshi':                { id: 'team.name.bhuwanJoshi',                defaultMessage: 'Bhuwan Joshi' },
  'team.name.swathiMallarapu':            { id: 'team.name.swathiMallarapu',            defaultMessage: 'Swathi Mallarapu' },
  'team.name.saliniSenthil':              { id: 'team.name.saliniSenthil',              defaultMessage: 'Salini Senthil' },
  'team.name.titlyChakraborty':           { id: 'team.name.titlyChakraborty',           defaultMessage: 'Titly Chakraborty' },
  'team.name.muskanGupta':                { id: 'team.name.muskanGupta',                defaultMessage: 'Muskan Gupta' },
  'team.name.akshataSatpute':             { id: 'team.name.akshataSatpute',             defaultMessage: 'Akshata Satpute' },
  'team.name.nalinSharma':                { id: 'team.name.nalinSharma',                defaultMessage: 'Nalin Sharma' },
  'team.name.bharathKumarBandela':        { id: 'team.name.bharathKumarBandela',        defaultMessage: 'Bharath Kumar Bandela' },
  'team.name.shubhamJaydhaye':            { id: 'team.name.shubhamJaydhaye',            defaultMessage: 'Shubham Jaydhaye' },

  'team.name.deepakShinde':               { id: 'team.name.deepakShinde',               defaultMessage: 'Deepak Shinde' },
  'team.name.triptiJoshi':                { id: 'team.name.triptiJoshi',                defaultMessage: 'Dr. Tripti Joshi' },
  'team.name.champakalatha':              { id: 'team.name.champakalatha',              defaultMessage: 'T. V. Champakalatha' },

  'team.name.kanchanPant':                { id: 'team.name.kanchanPant',                defaultMessage: 'Kanchan Pant' },
  'team.name.arohiSrivastava':            { id: 'team.name.arohiSrivastava',            defaultMessage: 'Dr. Arohi Srivastava' },

  'team.name.sharanyaSreepad':            { id: 'team.name.sharanyaSreepad',            defaultMessage: 'Dr. Sharanya Sreepad' },
  'team.name.kevinSreenath':              { id: 'team.name.kevinSreenath',              defaultMessage: 'Kevin Sreenath' },

  'team.name.saurabhJoshi':               { id: 'team.name.saurabhJoshi',               defaultMessage: 'Saurabh Joshi' },
  'team.name.deepmalaRawal':              { id: 'team.name.deepmalaRawal',              defaultMessage: 'Deepmala Rawal' },
  'team.name.kiranBisht':                 { id: 'team.name.kiranBisht',                 defaultMessage: 'Kiran Bisht' },
  'team.name.pradeepSinghBora':           { id: 'team.name.pradeepSinghBora',           defaultMessage: 'Pradeep Singh Bora' },
  'team.name.komalDiwakar':               { id: 'team.name.komalDiwakar',                 defaultMessage: 'Komal Diwakar' },
  'team.name.aparnaManoj':                { id: 'team.name.aparnaManoj',                  defaultMessage: 'Aparna Manoj' },
  'team.name.shramanaGuchhait':           { id: 'team.name.shramanaGuchhait',             defaultMessage: 'Shramana Guchhait' },
  'team.name.gauriPatti':                 { id: 'team.name.gauriPatti',                   defaultMessage: 'Gauri Patti' },
  'team.name.dikshaNagarkoti':            { id: 'team.name.dikshaNagarkoti',              defaultMessage: 'Diksha Nagarkoti' },
  'team.name.saeeKamat':                  { id: 'team.name.saeeKamat',                    defaultMessage: 'Saee Kamat' },
  'team.name.ishaKabara':                 { id: 'team.name.ishaKabara',                   defaultMessage: 'Isha Kabara' },
  'team.name.purvaJoshi':                 { id: 'team.name.purvaJoshi',                   defaultMessage: 'Purva Joshi' },
  'team.name.tejaswiniVenkatramanan':     { id: 'team.name.tejaswiniVenkatramanan',       defaultMessage: 'Tejaswini Venkatramanan' },
  'team.name.abhaBharge':                 { id: 'team.name.abhaBharge',                   defaultMessage: 'Abha Bharge' },
  'team.name.tanishaGupta':               { id: 'team.name.tanishaGupta',                 defaultMessage: 'Tanisha Gupta' },
  'team.name.muralika':                   { id: 'team.name.muralika',                     defaultMessage: 'Muralika' },
  'team.name.ojaswitaPant':               { id: 'team.name.ojaswitaPant',                 defaultMessage: 'Ojaswita Pant' },
  'team.name.ahanaGhosh':                 { id: 'team.name.ahanaGhosh',                   defaultMessage: 'Ahana Ghosh' },
  'team.name.lavanyaSachdev':             { id: 'team.name.lavanyaSachdev',               defaultMessage: 'Lavanya Sachdev' },
  'team.name.yashaswiniAjay':             { id: 'team.name.yashaswiniAjay',               defaultMessage: 'Yashaswini Ajay' },
  'team.name.arhamaShiekh':               { id: 'team.name.arhamaShiekh',                 defaultMessage: 'Arhama Shiekh' },
  'team.name.hPinkyRuthChanu':            { id: 'team.name.hPinkyRuthChanu',              defaultMessage: 'H Pinky Ruth Chanu' },
  'team.name.kanchanBafila':              { id: 'team.name.kanchanBafila',                defaultMessage: 'Kanchan Bafila' },
  'team.name.tanuja':                     { id: 'team.name.tanuja',                       defaultMessage: 'Tanuja' },
  'team.name.hemaRani':                   { id: 'team.name.hemaRani',                     defaultMessage: 'Hema Rani' },
  'team.name.garimaUpadhyay':             { id: 'team.name.garimaUpadhyay',               defaultMessage: 'Garima Upadhyay' },
  'team.name.srishtiDhillon':             { id: 'team.name.srishtiDhillon',               defaultMessage: 'Srishti Dhillon' },
  'team.name.lRakshitha':                 { id: 'team.name.lRakshitha',                   defaultMessage: 'L. Rakshitha' },
  'team.name.bhumikaSingh':               { id: 'team.name.bhumikaSingh',                 defaultMessage: 'Bhumika Singh' },
  'team.name.dikshaRao':                  { id: 'team.name.dikshaRao',                    defaultMessage: 'Diksha Rao' },
  'team.name.devikaHC':                   { id: 'team.name.devikaHC',                     defaultMessage: 'Devika H C' },
  'team.name.priyankaGeed':               { id: 'team.name.priyankaGeed',                 defaultMessage: 'Priyanka Geed' },
  'team.name.shivaniNandakumar':          { id: 'team.name.shivaniNandakumar',            defaultMessage: 'Shivani Nandakumar' },
  'team.name.anushkaShukla':              { id: 'team.name.anushkaShukla',                defaultMessage: 'Anushka Shukla' },
  'team.name.preetiBora':                 { id: 'team.name.preetiBora',                   defaultMessage: 'Preeti Bora' },
});

export default messages;
