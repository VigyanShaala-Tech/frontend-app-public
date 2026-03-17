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
  { id: 1, src: Mphasis, alt: 'Mphasis' },
  { id: 2, src: Atlassian, alt: 'Atlassian' },
  { id: 3, src: Nudge, alt: 'Nudge' },
  { id: 4, src: J360, alt: 'J360' },
  { id: 5, src: UOC, alt: 'UOC' },
  { id: 6, src: MarieCurie, alt: 'Marie Curie' },
  { id: 7, src: IIMB_NSRCEL, alt: 'IIMB NSRCEL' },
  { id: 8, src: UCOST, alt: 'UCOST' },
  { id: 9, src: DST, alt: 'DST' },
  { id: 10, src: CaringFriends, alt: 'Caring Friends' },
  { id: 11, src: F5, alt: 'F5' },
  { id: 12, src: PSAIndia, alt: 'PSA India' },
  { id: 13, src: EchoingGreen, alt: 'Echoing Green' },
  { id: 14, src: SpringerNature, alt: 'Springer Nature' },
  { id: 15, src: Cummins, alt: 'Cummins' },
  { id: 16, src: SVP, alt: 'SVP' },
  { id: 17, src: UGDH, alt: 'UGDH' },
  { id: 18, src: G20, alt: 'G20' },
  { id: 19, src: M2M, alt: 'M2M' },
  { id: 20, src: Mudita, alt: 'Mudita' },
  { id: 21, src: Suez, alt: 'Suez' },
  { id: 22, src: Meta, alt: 'Meta' },
  { id: 23, src: WEP, alt: 'WEP' },
  { id: 24, src: AIM, alt: 'AIM' },
  { id: 25, src: CentreGE, alt: 'Centre GE' },
  { id: 26, src: Gurukulam, alt: 'Gurukulam' },
];

const Supporters = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="supporters-page">
      {/* Header / Banner */}
      <section className="py-5">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="page-mapped text-muted small mb-4">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['supporter.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">
              {formatMessage(messages['supporter.breadcrumb.supporters'])}
            </span>
          </nav>

          <h1 className="supporters-page-heading mb-3">
            {formatMessage(messages['supporter.page.title'])}
          </h1>
        </div>
      </section>

      {/* Supporter Images */}
      <section className="main-content">
        <div className="container">
          <div className="supporter-grid">
            {supporters.map((s) => (
              <div key={s.id} className="supporter-grid-item">
                <img src={s.src} alt={s.alt} />
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