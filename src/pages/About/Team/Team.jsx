// src/components/Team/Team.tsx

import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Link } from 'react-router-dom';

import messages from './messages';
import './Team.scss';

// ────────────────────────────────────────────────
//  ALL IMAGES IMPORTED FROM SAME FOLDER
// ────────────────────────────────────────────────
import darshanaJ         from '../../../assets/image/Team-images/darshana-j.jpg';
import vijayV            from '../../../assets/image/Team-images/vijay-v.jpg';
import archanaS          from '../../../assets/image/Team-images/archana-s.jpg';
import abhishekJain      from '../../../assets/image/Team-images/abhishek-jain.jpg';
import priyankHirani     from '../../../assets/image/Team-images/priyank-hirani.jpg';

import pratibhaJolly     from '../../../assets/image/Team-images/team_prathibha-jolly.jpg';
import shobhanaN         from '../../../assets/image/Team-images/team_shobhana.jpg';
import archanaCERN       from '../../../assets/image/Team-images/team_archana-sharma.jpg';
import saviSharma        from '../../../assets/image/Team-images/team_savi-sharma.jpg';
import durgeshPant       from '../../../assets/image/Team-images/team_durgesh-pant.jpg';
import nagarjunaG        from '../../../assets/image/Team-images/team_g-nagarjuna.jpg';

import vandanaTilak      from '../../../assets/image/Team-images/team_vandana-tilak.jpg';
import archanaPillai     from '../../../assets/image/Team-images/team_archana-pillai.jpg';
import amitVarshneya     from '../../../assets/image/Team-images/team_amit-varshneya.jpg';
import anjaliHegde       from '../../../assets/image/Team-images/team_anjali-hegde.jpg';

import sreejith          from '../../../assets/image/Team-images/team-sreejith.jpg';
import bhuwanJoshi       from '../../../assets/image/Team-images/team-bhuwan.jpg';
import swathiMallarapu   from '../../../assets/image/Team-images/team_swathi-malarappu.jpg';
import saliniS           from '../../../assets/image/Team-images/team_salini-s.jpg';
import titlyChakraborty  from '../../../assets/image/Team-images/team_titly-chakraborty.jpg';
import muskanGupta       from '../../../assets/image/Team-images/team_muskan-g.jpg';
import akshataSatpute    from '../../../assets/image/Team-images/team-akshata.jpg';
import nalinSharma       from '../../../assets/image/Team-images/team_nalin-sharma.jpg';
import bharathKumar      from '../../../assets/image/Team-images/team-bharath.jpg';
import shubhamJaydhaye   from '../../../assets/image/Team-images/team_shublam-jaybhaye.jpg';

import deepakShinde      from '../../../assets/image/Team-images/team_deepak-shinde.jpg';
import triptiJoshi       from '../../../assets/image/Team-images/team_tripti-joshi.jpg';
import champakalatha     from '../../../assets/image/Team-images/TV-Champaklatha.jpg';

import kanchanPant       from '../../../assets/image/Team-images/team_kanchan-pant.jpg';
import arohiSrivastava   from '../../../assets/image/Team-images/team_arohi-s.jpg';

import sharanyaSreepad   from '../../../assets/image/Team-images/team-sharanya-s.jpg';
import kevinSreenath     from '../../../assets/image/Team-images/team-kevin-s.jpg';

import saurabhJoshi      from '../../../assets/image/Team-images/team_saurabh-joshi.jpg';
import deepmalaRawal     from '../../../assets/image/Team-images/team_deepmala-rawal.jpg';
import kiranBisht        from '../../../assets/image/Team-images/team_kiran-bisht.jpg';
import pradeepBora       from '../../../assets/image/Team-images/Pradeep.jpg';
import komalDiwakar      from '../../../assets/image/Team-images/Komal Diwakar.png';
import shramanaGuchhait  from '../../../assets/image/Team-images/Shramana Guchhait.png';
import gauriPatti        from '../../../assets/image/Team-images/Gauri Patti.png';
import dikshaNagarkoti   from '../../../assets/image/Team-images/Diksha Nagarkoti.png';
import saeeKamat         from '../../../assets/image/Team-images/Saee Kamat.png';
import ishaKabara        from '../../../assets/image/Team-images/Isha Kabara.png';
import purvaJoshi        from '../../../assets/image/Team-images/Purva Joshi.png';
import tejaswiniVenkatramanan from '../../../assets/image/Team-images/Tejaswini Venkatramanan.png';
import abhaBharge        from '../../../assets/image/Team-images/Abha Bharge.png';
import tanishaGupta      from '../../../assets/image/Team-images/Tanisha Gupta.png';
import muralika          from '../../../assets/image/Team-images/Muralika.png';
import aparnaManoj        from '../../../assets/image/Team-images/Aparna Manoj.png';
import ojaswitaPant      from '../../../assets/image/Team-images/Ojaswita Pant.png';
import ahanaGhosh        from '../../../assets/image/Team-images/Ahana Ghosh.png';
import lavanyaSachdev    from '../../../assets/image/Team-images/Lavanya Sachdev.png';
import yashaswiniAjay    from '../../../assets/image/Team-images/Yashaswini Ajay.png';
import arhamaShiekh      from '../../../assets/image/Team-images/Arhama Shiekh.png';
import hPinkyRuthChanu   from '../../../assets/image/Team-images/H Pinky Ruth Chanu.png';
import kanchanBafila     from '../../../assets/image/Team-images/Kanchan Bafila.png';
import tanuja            from '../../../assets/image/Team-images/Tanuja.png';
import garimaUpadhyay    from '../../../assets/image/Team-images/Garima Upadhyay.png';
import srishtiDhillon    from '../../../assets/image/Team-images/Srishti Dhillon.png';
import lRakshitha        from '../../../assets/image/Team-images/L. Rakshitha.png';
import bhumikaSingh      from '../../../assets/image/Team-images/Bhumika Singh.png';
import dikshaRao         from '../../../assets/image/Team-images/Diksha Rao.png';
import devikaHC          from '../../../assets/image/Team-images/Devika H C.png';
import priyankaGeed      from '../../../assets/image/Team-images/Priyanka Geed.png';
import shivaniNandakumar from '../../../assets/image/Team-images/Shivani Nandakumar.png';
import anushkaShukla     from '../../../assets/image/Team-images/Anushka Shukla.png';
import preetiBora        from '../../../assets/image/Team-images/Preeti Bora.png';
import placeholderAvatar from '../../../assets/image/Team-images/team-placeholder.jpg';

const teamData = {
  founders: [
    {
      nameMsg: 'team.name.darshanaJoshi',
      roleMsg: 'team.role.ceo',
      image: darshanaJ,
      linkedin: 'https://www.linkedin.com/in/darshana-joshi1210/',
    },
    {
      nameMsg: 'team.name.vijayVenugopalan',
      roleMsg: 'team.role.managingTrusteeCoo',
      image: vijayV,
      linkedin: 'https://www.linkedin.com/in/vijay-venugopalan/',
    },
  ],

  boardOfTrustees: [
    {
      nameMsg: 'team.name.darshanaJoshi',
      roleMsg: 'team.role.executiveTrustee',
      image: darshanaJ,
      linkedin: 'https://www.linkedin.com/in/darshana-joshi1210/',
    },
    {
      nameMsg: 'team.name.vijayVenugopalan',
      roleMsg: 'team.role.executiveTrustee',
      image: vijayV,
      linkedin: 'https://www.linkedin.com/in/vijay-venugopalan/',
    },
    { nameMsg: 'team.name.archanaSharma', roleMsg: 'team.role.nonExecutiveTrustee', image: archanaS },
    { nameMsg: 'team.name.abhishekJain',   roleMsg: 'team.role.nonExecutiveTrustee', image: abhishekJain },
    { nameMsg: 'team.name.priyankHirani',  roleMsg: 'team.role.nonExecutiveTrustee', image: priyankHirani },
  ],

  sheForStemAdvisors: [
    { nameMsg: 'team.name.pratibhaJolly',     roleMsg: 'team.role.advisor', image: pratibhaJolly },
    { nameMsg: 'team.name.shobhanaNarasimhan',roleMsg: 'team.role.advisor', image: shobhanaN },
    { nameMsg: 'team.name.archanaSharmaCERN', roleMsg: 'team.role.advisor', image: archanaCERN },
    { nameMsg: 'team.name.saviSharma',        roleMsg: 'team.role.advisor', image: saviSharma },
    { nameMsg: 'team.name.durgeshPant',       roleMsg: 'team.role.advisor', image: durgeshPant },
    { nameMsg: 'team.name.gNagarjuna',        roleMsg: 'team.role.advisor', image: nagarjunaG },
  ],

  advisors: [
    { nameMsg: 'team.name.vandanaTilak',      roleMsg: 'team.role.advisor', image: vandanaTilak },
    { nameMsg: 'team.name.archanaPillai',     roleMsg: 'team.role.advisor', image: archanaPillai },
    { nameMsg: 'team.name.babuJoseph',        roleMsg: 'team.role.advisor', image: placeholderAvatar },
    { nameMsg: 'team.name.lakshminarayanaKR', roleMsg: 'team.role.advisor', image: placeholderAvatar },
    { nameMsg: 'team.name.amitVarshneya',     roleMsg: 'team.role.advisor', image: amitVarshneya },
    { nameMsg: 'team.name.anjaliHegde',       roleMsg: 'team.role.advisor', image: anjaliHegde },
  ],

  operationsTeam: [
    { nameMsg: 'team.name.sreejithSreenivasan', roleMsg: 'team.role.associateOperations', image: sreejith, linkedin: 'https://www.linkedin.com/in/sreejithsreenivasan2147' },
    { nameMsg: 'team.name.bhuwanJoshi',         roleMsg: 'team.role.seniorProgramManager', image: bhuwanJoshi, linkedin: 'https://www.linkedin.com/in/bhuwan-joshi31' },
    { nameMsg: 'team.name.swathiMallarapu',     roleMsg: 'team.role.seniorExecutiveOperations', image: swathiMallarapu, linkedin: 'https://www.linkedin.com/in/mallarapu-swathi-3a3265276' },
    { nameMsg: 'team.name.saliniSenthil',       roleMsg: 'team.role.educationTrainingSpecialist', image: saliniS, linkedin: 'https://www.linkedin.com/in/salini-senthil/' },
    { nameMsg: 'team.name.titlyChakraborty',    roleMsg: 'team.role.curriculumSpecialist', image: titlyChakraborty, linkedin: 'https://www.linkedin.com/in/titly-chakraborty-353b6419a/' },
    { nameMsg: 'team.name.muskanGupta',         roleMsg: 'team.role.seniorExecutiveOperations', image: muskanGupta, linkedin: 'https://www.linkedin.com/in/muskan-gupta-89138817a' },
    { nameMsg: 'team.name.akshataSatpute',      roleMsg: 'team.role.seniorExecutiveDataOps', image: akshataSatpute, linkedin: 'https://www.linkedin.com/in/akshata-satpute-7aa82b250' },
    { nameMsg: 'team.name.nalinSharma',         roleMsg: 'team.role.associateOperations', image: nalinSharma, linkedin: 'http://www.linkedin.com/in/nalin-sharma-0627b7141' },
    { nameMsg: 'team.name.bharathKumarBandela', roleMsg: 'team.role.associateOperations', image: bharathKumar, linkedin: 'https://www.linkedin.com/in/bharath-kumar-bandela-67a185137' },
    { nameMsg: 'team.name.shubhamJaydhaye',     roleMsg: 'team.role.seniorExecutiveDataOps', image: shubhamJaydhaye, linkedin: 'https://www.linkedin.com/in/shubhamjaybhaye' },
  ],

  financeFundraising: [
    { nameMsg: 'team.name.deepakShinde',        roleMsg: 'team.role.seniorExecutiveFinance', image: deepakShinde, linkedin: 'https://www.linkedin.com/in/dkshinde16' },
    { nameMsg: 'team.name.triptiJoshi',         roleMsg: 'team.role.fundraisingSeniorAssociate', image: triptiJoshi, linkedin: 'https://www.linkedin.com/in/-tripti-joshi/' },
    { nameMsg: 'team.name.champakalatha',       roleMsg: 'team.role.financeConsultant', image: champakalatha },
  ],

  productDevelopment: [
    { nameMsg: 'team.name.kanchanPant',         roleMsg: 'team.role.seniorExecutive', image: kanchanPant, linkedin: 'https://www.linkedin.com/in/kanchan-pant' },
    { nameMsg: 'team.name.arohiSrivastava',     roleMsg: 'team.role.associateProductDev', image: arohiSrivastava, linkedin: 'https://www.linkedin.com/in/arohi-srivastava-phd-9605701b' },
  ],

  socialMediaCommunications: [
    { nameMsg: 'team.name.sharanyaSreepad',     roleMsg: '', image: sharanyaSreepad },
    { nameMsg: 'team.name.kevinSreenath',       roleMsg: '', image: kevinSreenath },
  ],

  stemChampionsTeam: [
    { nameMsg: 'team.name.saurabhJoshi',        roleMsg: 'team.role.chapterCoordinator', location: 'Champawat',   image: saurabhJoshi,  linkedin: 'http://www.linkedin.com/in/saurabh-joshi-b28a1a243' },
    { nameMsg: 'team.name.deepmalaRawal',       roleMsg: 'team.role.chapterCoordinator', location: 'Berinag',     image: deepmalaRawal, linkedin: 'https://www.linkedin.com/in/deepmala-rawal-941a99293' },
    { nameMsg: 'team.name.kiranBisht',          roleMsg: 'team.role.chapterCoordinator', location: 'Pithoragarh', image: kiranBisht,    linkedin: 'https://www.linkedin.com/in/kiran-bisht-83b6a22b3' },
    { nameMsg: 'team.name.pradeepSinghBora',    roleMsg: 'team.role.chapterCoordinator', location: 'Haldwani',    image: pradeepBora },
    { nameMsg: 'team.name.komalDiwakar',          roleMsg: 'team.role.komalDiwakar', image: komalDiwakar, linkedin: 'https://www.linkedin.com/in/komal-diwakar-/' },
    { nameMsg: 'team.name.aparnaManoj',           roleMsg: 'team.role.aparnaManoj', image: aparnaManoj, linkedin: 'https://www.linkedin.com/in/aparna-manoj' },
    { nameMsg: 'team.name.shramanaGuchhait',      roleMsg: 'team.role.shramanaGuchhait', image: shramanaGuchhait, linkedin: 'https://www.linkedin.com/in/shramana-guchhait/' },
    { nameMsg: 'team.name.gauriPatti',            roleMsg: 'team.role.gauriPatti', image: gauriPatti, linkedin: 'https://www.linkedin.com/in/gauri-patti/' },
    { nameMsg: 'team.name.dikshaNagarkoti',       roleMsg: 'team.role.dikshaNagarkoti', image: dikshaNagarkoti, linkedin: 'https://www.linkedin.com/in/dikshanagarkoti/' },
    { nameMsg: 'team.name.saeeKamat',             roleMsg: 'team.role.saeeKamat', image: saeeKamat, linkedin: 'https://www.linkedin.com/in/saee-kamat-03b733234/' },
    { nameMsg: 'team.name.ishaKabara',            roleMsg: 'team.role.ishaKabara', image: ishaKabara, linkedin: 'https://www.linkedin.com/in/isha-kabara/' },
    { nameMsg: 'team.name.purvaJoshi',            roleMsg: 'team.role.purvaJoshi', image: purvaJoshi, linkedin: 'https://www.linkedin.com/in/purva-joshi-2001ppj/' },
    { nameMsg: 'team.name.tejaswiniVenkatramanan',roleMsg: 'team.role.tejaswiniVenkatramanan', image: tejaswiniVenkatramanan, linkedin: 'https://www.linkedin.com/in/tejaswini-venkatramanan' },
    { nameMsg: 'team.name.abhaBharge',            roleMsg: 'team.role.abhaBharge', image: abhaBharge, linkedin: 'https://www.linkedin.com/in/abha-bharge' },
    { nameMsg: 'team.name.tanishaGupta',          roleMsg: 'team.role.tanishaGupta', image: tanishaGupta, linkedin: 'https://www.linkedin.com/in/tanisha-gupta-a81158210/' },
    { nameMsg: 'team.name.muralika',              roleMsg: 'team.role.muralika', image: muralika, linkedin: 'https://www.linkedin.com/in/muralika-m-821217145/' },
    { nameMsg: 'team.name.ojaswitaPant',          roleMsg: 'team.role.ojaswitaPant', image: ojaswitaPant, linkedin: 'https://www.linkedin.com/in/ojaswita-pant/' },
    { nameMsg: 'team.name.ahanaGhosh',            roleMsg: 'team.role.ahanaGhosh', image: ahanaGhosh, linkedin: 'https://www.linkedin.com/in/ahana-ghosh21' },
    { nameMsg: 'team.name.lavanyaSachdev',        roleMsg: 'team.role.lavanyaSachdev', image: lavanyaSachdev, linkedin: 'https://www.linkedin.com/in/lavanya-sachdev' },
    { nameMsg: 'team.name.yashaswiniAjay',        roleMsg: 'team.role.yashaswiniAjay', image: yashaswiniAjay, linkedin: 'https://www.linkedin.com/in/yashaswini-ajay-196004232' },
    { nameMsg: 'team.name.arhamaShiekh',          roleMsg: 'team.role.arhamaShiekh', image: arhamaShiekh, linkedin: 'https://www.linkedin.com/in/arhama-shaikh-930017228/' },
    { nameMsg: 'team.name.hPinkyRuthChanu',       roleMsg: 'team.role.hPinkyRuthChanu', image: hPinkyRuthChanu, linkedin: 'https://www.linkedin.com/in/h-pinky-ruth-chanu-326a73215/' },
    { nameMsg: 'team.name.kanchanBafila',         roleMsg: 'team.role.kanchanBafila', image: kanchanBafila, linkedin: 'https://www.linkedin.com/in/kanchan-bafila/' },
    { nameMsg: 'team.name.tanuja',                roleMsg: 'team.role.tanuja', image: tanuja, linkedin: 'https://www.linkedin.com/in/tanuja-pant-44a165222/' },
    { nameMsg: 'team.name.garimaUpadhyay',        roleMsg: 'team.role.garimaUpadhyay', image: garimaUpadhyay, linkedin: 'https://www.linkedin.com/in/garima-upadhyay/' },
    { nameMsg: 'team.name.srishtiDhillon',        roleMsg: 'team.role.srishtiDhillon', image: srishtiDhillon, linkedin: 'https://www.linkedin.com/in/srishti-dhillon-180921243/' },
    { nameMsg: 'team.name.lRakshitha',            roleMsg: 'team.role.lRakshitha', image: lRakshitha, linkedin: 'https://www.linkedin.com/in/rakshitha-lokesh-a36653350/' },
    { nameMsg: 'team.name.bhumikaSingh',          roleMsg: 'team.role.bhumikaSingh', image: bhumikaSingh, linkedin: 'https://www.linkedin.com/in/bhumika-singh-9b6213316/' },
    { nameMsg: 'team.name.dikshaRao',             roleMsg: 'team.role.dikshaRao', image: dikshaRao, linkedin: 'https://www.linkedin.com/in/diksharao21/' },
    { nameMsg: 'team.name.devikaHC',              roleMsg: 'team.role.devikaHC', image: devikaHC, linkedin: 'https://www.linkedin.com/in/devika-h-c-818863344/' },
    { nameMsg: 'team.name.priyankaGeed',          roleMsg: 'team.role.priyankaGeed', image: priyankaGeed, linkedin: 'https://www.linkedin.com/in/priyanka-geed-28b14437b/' },
    { nameMsg: 'team.name.shivaniNandakumar',     roleMsg: 'team.role.shivaniNandakumar', image: shivaniNandakumar, linkedin: 'https://www.linkedin.com/in/shivani-nandakumar-6871b2305/' },
    { nameMsg: 'team.name.anushkaShukla',         roleMsg: 'team.role.anushkaShukla', image: anushkaShukla, linkedin: 'https://www.linkedin.com/in/anushka-shukla-b97849196/' },
    { nameMsg: 'team.name.preetiBora',            roleMsg: 'team.role.preetiBora', image: preetiBora, linkedin: 'https://www.linkedin.com/in/preeti-bora/' },
  ],
};

const ProfileCard = ({ person }) => {
  const { formatMessage } = useIntl();

  const name = person.nameMsg
    ? formatMessage(messages[person.nameMsg])
    : (person.name || formatMessage(messages['team.member.defaultName']));

  const role = person.roleMsg
    ? formatMessage(messages[person.roleMsg])
    : (person.role || '');

  return (
    <div className="team-member-card text-center">
      <div className="member-avatar mx-auto mb-3">
        <img
          src={person.image || placeholderAvatar}
          alt={name}
          className="rounded-circle w-100 h-100 object-cover"
        />
      </div>
      <h5 className="member-name mb-1">
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-primary-hover"
          >
            {name}
          </a>
        ) : name}
      </h5>
      {role && <p className={`member-role text-muted small${person.location ? ' mb-0' : ''}`}>{role}</p>}
      {person.location && <p className="member-role member-location text-muted small">{person.location}</p>}
    </div>
  );
};

const AuthorityProfile = ({ person }) => {
  const { formatMessage } = useIntl();

  const name = person.nameMsg
    ? formatMessage(messages[person.nameMsg])
    : (person.name || formatMessage(messages['team.member.defaultName']));

  const role = person.roleMsg
    ? formatMessage(messages[person.roleMsg])
    : (person.role || '');

  return (
    <div className="authority-card text-center">
      <div className="member-avatar mx-auto mb-3">
        <img
          src={person.image || placeholderAvatar}
          alt={name}
          className="rounded-circle w-100 h-100 object-cover"
        />
      </div>
      <h5 className="member-name mb-1">
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-primary-hover"
          >
            {name}
          </a>
        ) : name}
      </h5>
      {role && <p className="member-role text-muted small">{role}</p>}
    </div>
  );
};

export default function Team() {
  const { formatMessage } = useIntl();

  return (
    <div className="team-page">
      <section className="py-5">
        <div className="container">
          <h1 className="team-page-heading mb-5 text-start">
            {formatMessage(messages['team.page.title'])}
          </h1>

          {/* Founders */}
          <section className="mb-5 text-center founders-section">
            <h2 className="section-title mb-5">
              {formatMessage(messages['team.section.theFounders'])}
            </h2>
            <div className="founders-container">
              {teamData.founders.map((person, idx) => (
                <AuthorityProfile key={idx} person={person} />
              ))}
            </div>
          </section>

          {/* Board of Trustees */}
          <section className="board-section mb-5 p-4 p-md-5">
            <h2 className="section-title text-center mb-5">
              {formatMessage(messages['team.section.boardOfTrustees'])}
            </h2>
            <div className="trusty">
              {teamData.boardOfTrustees.map((person, idx) => (
                <AuthorityProfile key={idx} person={person} />
              ))}
            </div>
          </section>

          {/* Advisory Council */}
          <section className="team-section-card mb-5 p-4 p-md-5">
            <h2 className="section-title text-center mb-5">
              {formatMessage(messages['team.section.advisoryCouncil'])}
            </h2>

            <h3 className="subsection-title mb-4 text-start">
              {formatMessage(messages['team.subsection.sheForStemAdvisors'])}
            </h3>
            <div className="team-grid mb-5">
              {teamData.sheForStemAdvisors.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>

            <h3 className="subsection-title mb-4 text-start">
              {formatMessage(messages['team.subsection.advisors'])}
            </h3>
            <div className="team-grid">
              {teamData.advisors.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>
          </section>

          {/* Team Members */}
          <section className="team-section-card p-4 p-md-5">
            <h2 className="section-title text-center mb-5">
              {formatMessage(messages['team.section.teamMembers'])}
            </h2>

            <h3 className="subsection-title mb-4">
              {formatMessage(messages['team.subsection.operationsTeam'])}
            </h3>
            <div className="team-grid">
              {teamData.operationsTeam.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>

            <h3 className="subsection-title mb-4 mt-5">
              {formatMessage(messages['team.subsection.financeFundraisingAndPartnerships'])}
            </h3>
            <div className="team-grid">
              {teamData.financeFundraising.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>

            <h3 className="subsection-title mb-4 mt-5">
              {formatMessage(messages['team.subsection.productDevelopment'])}
            </h3>
            <div className="team-grid">
              {teamData.productDevelopment.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>

            <h3 className="subsection-title mb-4 mt-5">
              {formatMessage(messages['team.subsection.socialMediaAndCommunications'])}
            </h3>
            <div className="team-grid">
              {teamData.socialMediaCommunications.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>

            <h3 className="subsection-title mb-4 mt-5">
              {formatMessage(messages['team.subsection.stemChampionsTeam'])}
            </h3>
            <div className="team-grid">
              {teamData.stemChampionsTeam.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}