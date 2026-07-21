import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Link } from 'react-router-dom';

import messages from './messages';
import './supporters.scss';

import Mphasis        from '../../../assets/image/supporter-images/mphasis-logo-300x300.jpg';
import Atlassian      from '../../../assets/image/supporter-images/atlassian-logo-300x300.jpg';
import Nudge          from '../../../assets/image/supporter-images/nudge-logo-300x300.jpg';
import J360           from '../../../assets/image/supporter-images/j360-logo-300x300.jpg';
import UOC            from '../../../assets/image/supporter-images/uoc-logo-300x300.jpg';
import MarieCurie     from '../../../assets/image/supporter-images/marie-curie-logo-300x300.jpg';
import IIMB_NSRCEL    from '../../../assets/image/supporter-images/iimb-nsrcel-logo-300x300.jpg';
import UCOST          from '../../../assets/image/supporter-images/ucost-logo-300x300.jpg';
import DST            from '../../../assets/image/supporter-images/dst-logo-300x300.jpg';
import CaringFriends  from '../../../assets/image/supporter-images/caring-friends-logo-300x300.jpg';
import F5             from '../../../assets/image/supporter-images/f5-logo-300x300.jpg';
import PSAIndia       from '../../../assets/image/supporter-images/psa-india-logo.jpg';
import EchoingGreen   from '../../../assets/image/supporter-images/echoing-green-logo-300x300.jpg';
import SpringerNature from '../../../assets/image/supporter-images/springer-nature-logo-300x300.jpg';
import Cummins        from '../../../assets/image/supporter-images/cummins-logo-300x300.jpg';
import SVP            from '../../../assets/image/supporter-images/svp-logo-300x300.jpg';
import UGDH           from '../../../assets/image/supporter-images/ugdh-logo-300x300.jpg';
import G20            from '../../../assets/image/supporter-images/g20-logo-300x300.jpg';
import M2M            from '../../../assets/image/supporter-images/m2m-logo-300x300.jpg';
import Mudita         from '../../../assets/image/supporter-images/mudita-logo-300x300.jpg';
import Suez           from '../../../assets/image/supporter-images/suez-logo-300x300.jpg';
import Meta           from '../../../assets/image/supporter-images/meta-logo-300x300.jpg';
import WEP            from '../../../assets/image/supporter-images/wep-logo-300x300.jpg';
import AIM            from '../../../assets/image/supporter-images/aim-logo-300x300.jpg';
import CentreGE       from '../../../assets/image/supporter-images/centre-ge-logo-300x300.jpg';
import Gurukulam      from '../../../assets/image/supporter-images/gurukulam-logo-300x300.jpg';


const supporters = [
  { id: 1, src: Mphasis, altKey: 'supporter.logo.mphasis' },
  { id: 2, src: Atlassian, altKey: 'supporter.logo.atlassian' },
  { id: 3, src: Nudge, altKey: 'supporter.logo.nudge' },
  { id: 4, src: J360, altKey: 'supporter.logo.j360' },
  { id: 5, src: UOC, altKey: 'supporter.logo.uoc' },
  { id: 6, src: MarieCurie, altKey: 'supporter.logo.marieCurie' },
  { id: 7, src: IIMB_NSRCEL, altKey: 'supporter.logo.iimbNsrcel' },
  { id: 8, src: UCOST, altKey: 'supporter.logo.ucost' },
  { id: 9, src: DST, altKey: 'supporter.logo.dst' },
  { id: 10, src: CaringFriends, altKey: 'supporter.logo.caringFriends' },
  { id: 11, src: F5, altKey: 'supporter.logo.f5' },
  { id: 12, src: PSAIndia, altKey: 'supporter.logo.psaIndia' },
  { id: 13, src: EchoingGreen, altKey: 'supporter.logo.echoingGreen' },
  { id: 14, src: SpringerNature, altKey: 'supporter.logo.springerNature' },
  { id: 15, src: Cummins, altKey: 'supporter.logo.cummins' },
  { id: 16, src: SVP, altKey: 'supporter.logo.svp' },
  { id: 17, src: UGDH, altKey: 'supporter.logo.ugdh' },
  { id: 18, src: G20, altKey: 'supporter.logo.g20' },
  { id: 19, src: M2M, altKey: 'supporter.logo.m2m' },
  { id: 20, src: Mudita, altKey: 'supporter.logo.mudita' },
  { id: 21, src: Suez, altKey: 'supporter.logo.suez' },
  { id: 22, src: Meta, altKey: 'supporter.logo.meta' },
  { id: 23, src: WEP, altKey: 'supporter.logo.wep' },
  { id: 24, src: AIM, altKey: 'supporter.logo.aim' },
  { id: 25, src: CentreGE, altKey: 'supporter.logo.centreGe' },
  { id: 26, src: Gurukulam, altKey: 'supporter.logo.gurukulam' },
];

const Supporters = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="supporters-page">
      {/* Header / Banner */}
      <section className="supporters-header">
        <div className="container supporters-container">
          <h1 className="supporters-page-heading mb-3">
            {formatMessage(messages['supporter.page.title'])}
          </h1>
        </div>
      </section>

      {/* Supporter Images */}
      <section className="main-content">
        <div className="container supporters-container">
          <div className="supporter-grid">
            {supporters.map((s) => (
              <div key={s.id} className="supporter-grid-item">
                <img src={s.src} alt={formatMessage(messages[s.altKey])} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="supporter-cta text-center mt-5 mb-5">
            <h3 className="cta-text mb-3">
              {formatMessage(messages['supporter.cta.text'])}
            </h3>
            <Link to="/public/contact" className="cta-button btn btn-primary">
              {formatMessage(messages['supporter.cta.button'])}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supporters;