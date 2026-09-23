// src/components/Team/Team.tsx

import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import messages from './messages';
import './Team.scss';

// ────────────────────────────────────────────────
//  ALL IMAGES IMPORTED FROM SAME FOLDER
// ────────────────────────────────────────────────







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
  stemChampionsTeam: [
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

const AuthorityProfile = ({ person, linkedinAsIcon = false }) => {
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
        {person.linkedin && !linkedinAsIcon ? (
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
      {linkedinAsIcon && person.linkedin && (
        <div className="member-linkedin">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={formatMessage(messages['team.member.linkedinLabel'], { name })}
            title={formatMessage(messages['team.member.linkedinLabel'], { name })}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      )}
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

          {/* STEM Champions Team */}
          <section className="board-section stem-champions-section mb-5 p-4 p-md-5">
            <div className="stem-champions-grid">
              {teamData.stemChampionsTeam.map((person, idx) => (
                <AuthorityProfile key={idx} person={person} linkedinAsIcon />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}