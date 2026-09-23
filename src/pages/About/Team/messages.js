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
  'team.role.hPinkyRuthChanu':            { id: 'team.role.hPinkyRuthChanu',              defaultMessage: 'She for STEM fellow' },
  'team.role.kanchanBafila':              { id: 'team.role.kanchanBafila',                defaultMessage: 'She for STEM fellow' },
  'team.role.tanuja':                     { id: 'team.role.tanuja',                       defaultMessage: 'Embedded Systems Designer, Vector Robotics' },
  'team.role.hemaRani':                   { id: 'team.role.hemaRani',                     defaultMessage: 'She for STEM fellow' },
  'team.role.prathushya':                 { id: 'team.role.prathushya',                   defaultMessage: 'M.Sc. Chemistry, IIT Tirupati' },
  'team.role.garimaVentureCenter':        { id: 'team.role.garimaVentureCenter',          defaultMessage: 'Senior Associate, Centre for BioPharma Analysis (CBA), Venture Center' },
  'team.role.himaniUpadhyay':             { id: 'team.role.himaniUpadhyay',               defaultMessage: 'Master\'s in Environmental Science and Resource Management, TERI. Awareness Program Officer, The Corbett Foundation' },
  'team.role.jessi':                      { id: 'team.role.jessi',                        defaultMessage: 'M.Sc. Computer Science student, Central University of Tamil Nadu' },
  'team.role.nampallyMadhuri':            { id: 'team.role.nampallyMadhuri',              defaultMessage: 'M.Sc. Marine Biology, Andaman and Nicobar Islands campus' },
  'team.role.srijanVerma':                { id: 'team.role.srijanVerma',                  defaultMessage: 'Hindustan Olympiad district topper. Fabulous 50 scholar from Uttarakhand' },
  'team.role.theaCollinson':              { id: 'team.role.theaCollinson',                defaultMessage: 'Final-year B.Sc. in Biotechnology, Chemistry and Botany' },
  'team.role.nikitaTiwari':               { id: 'team.role.nikitaTiwari',                 defaultMessage: 'M.Sc.(Tech) Engineering Physics student, National Institute of Technology, Warangal' },
  'team.role.garimaEnzene':               { id: 'team.role.garimaEnzene',                 defaultMessage: 'Researcher, Enzene Biosciences' },
  'team.role.gangaRawat':                 { id: 'team.role.gangaRawat',                   defaultMessage: 'M.Sc. Biochemistry student. Co-author, Fungal Systematics and Evolution' },

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
  'team.name.prathushya':                 { id: 'team.name.prathushya',                   defaultMessage: 'Prathushya' },
  'team.name.garimaVentureCenter':        { id: 'team.name.garimaVentureCenter',          defaultMessage: 'Garima' },
  'team.name.himaniUpadhyay':             { id: 'team.name.himaniUpadhyay',               defaultMessage: 'Himani Upadhyay' },
  'team.name.jessi':                      { id: 'team.name.jessi',                        defaultMessage: 'Jessi' },
  'team.name.nampallyMadhuri':            { id: 'team.name.nampallyMadhuri',              defaultMessage: 'Nampally Madhuri' },
  'team.name.srijanVerma':                { id: 'team.name.srijanVerma',                  defaultMessage: 'Srijan Verma' },
  'team.name.theaCollinson':              { id: 'team.name.theaCollinson',                defaultMessage: 'Thea Collinson' },
  'team.name.nikitaTiwari':               { id: 'team.name.nikitaTiwari',                 defaultMessage: 'Nikita Tiwari' },
  'team.name.garimaEnzene':               { id: 'team.name.garimaEnzene',                 defaultMessage: 'Garima' },
  'team.name.gangaRawat':                 { id: 'team.name.gangaRawat',                   defaultMessage: 'Ganga Rawat' },
});

export default messages;