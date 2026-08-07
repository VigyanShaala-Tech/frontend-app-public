import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../message/GlobalMessage.message';
import './TrustedCompanies.scss';
import Amazon from "../../assets/image/Trusted-company/Companies&Organizations/Amazon.png"
import AMD from "../../assets/image/Trusted-company/Companies&Organizations/AMD_Logo.png"
import Atlassian from "../../assets/image/Trusted-company/Companies&Organizations/Atlassian.png"
import BD from "../../assets/image/Trusted-company/Companies&Organizations/BD_company.png"
import Cummins from "../../assets/image/Trusted-company/Companies&Organizations/Cummins_logo.png";
import Dispelix from "../../assets/image/Trusted-company/Companies&Organizations/dispelix.jpg";
import EY from "../../assets/image/Trusted-company/Companies&Organizations/EY_logo.png";
import Galiencom from "../../assets/image/Trusted-company/Companies&Organizations/galiencom_logo.jpg";
import Gartner from "../../assets/image/Trusted-company/Companies&Organizations/Gartner_logo.png";
import JNCC from "../../assets/image/Trusted-company/Companies&Organizations/Jawaharlal_Nehru_Centre_for_Advanced_Scientific_Research_logo.png";
import Microsoft from "../../assets/image/Trusted-company/Companies&Organizations/Microsoft.png";
import Mphasis from "../../assets/image/Trusted-company/Companies&Organizations/Mphasis.png";
import Nagarro from "../../assets/image/Trusted-company/Companies&Organizations/Nagarro_logo.png";
import NIH from "../../assets/image/Trusted-company/Companies&Organizations/nih-logo.png";
import SLB from "../../assets/image/Trusted-company/Companies&Organizations/SLB_Logo.png";
import SpringerNature from "../../assets/image/Trusted-company/Companies&Organizations/Springer_Nature_Logo.png";
import ThermoFisher from "../../assets/image/Trusted-company/Companies&Organizations/Thermo_Fisher_Scientific_Logo.png";
import WellsFargo from "../../assets/image/Trusted-company/Companies&Organizations/Wells_Fargo_Logo.png";
import NBRC from "../../assets/image/Trusted-company/Research&SpecializedInstitutions/NBRC.png"
import Coat_of_Arms_of_Columbia_University from "../../assets/image/Trusted-company/Universities&Colleges/Coat_of_Arms_of_Columbia_University.svg.png"
import IITBHU from "../../assets/image/Trusted-company/Universities&Colleges/IIT-BHU.png";
import IISc from "../../assets/image/Trusted-company/Universities&Colleges/Indian_Institute_of_Science.png";
import IITBombay from "../../assets/image/Trusted-company/Universities&Colleges/Indian_Institute_of_Technology_Bombay.png";
import NTU from "../../assets/image/Trusted-company/Universities&Colleges/Nanyang_Technological_University.png";
import StStephens from "../../assets/image/Trusted-company/Universities&Colleges/St.Stephens_Coll_UOD.png";
import UCSD from "../../assets/image/Trusted-company/Universities&Colleges/University_of_California_San_Diego.png";
import Cambridge from "../../assets/image/Trusted-company/Universities&Colleges/University_of_Cambridge.png";
import Edinburgh from "../../assets/image/Trusted-company/Universities&Colleges/University_of_Edinburgh.png";
import UIUC from "../../assets/image/Trusted-company/Universities&Colleges/University_of_Illinois.png";

const companies = [
  { nameKey: 'home.trusted.company.amazon', logo: Amazon },
  { nameKey: 'home.trusted.company.amd', logo: AMD },
  { nameKey: 'home.trusted.company.atlassian', logo: Atlassian },
  { nameKey: 'home.trusted.company.bd', logo: BD },
  { nameKey: 'home.trusted.company.cummins', logo: Cummins },
  { nameKey: 'home.trusted.company.dispelix', logo: Dispelix },
  { nameKey: 'home.trusted.company.ey', logo: EY },
  { nameKey: 'home.trusted.company.galiencom', logo: Galiencom },
  { nameKey: 'home.trusted.company.gartner', logo: Gartner },
  { nameKey: 'home.trusted.company.jncc', logo: JNCC },
  { nameKey: 'home.trusted.company.microsoft', logo: Microsoft },
  { nameKey: 'home.trusted.company.mphasis', logo: Mphasis },
  { nameKey: 'home.trusted.company.nagarro', logo: Nagarro },
  { nameKey: 'home.trusted.company.nih', logo: NIH },
  { nameKey: 'home.trusted.company.slb', logo: SLB },
  { nameKey: 'home.trusted.company.springerNature', logo: SpringerNature },
  { nameKey: 'home.trusted.company.thermoFisher', logo: ThermoFisher },
  { nameKey: 'home.trusted.company.wellsFargo', logo: WellsFargo },
  { nameKey: 'home.trusted.company.nbrc', logo: NBRC },
  { nameKey: 'home.trusted.company.columbia', logo: Coat_of_Arms_of_Columbia_University },
  { nameKey: 'home.trusted.company.iitBhu', logo: IITBHU },
  { nameKey: 'home.trusted.company.iisc', logo: IISc },
  { nameKey: 'home.trusted.company.iitBombay', logo: IITBombay },
  { nameKey: 'home.trusted.company.ntu', logo: NTU },
  { nameKey: 'home.trusted.company.stStephens', logo: StStephens },
  { nameKey: 'home.trusted.company.ucsd', logo: UCSD },
  { nameKey: 'home.trusted.company.cambridge', logo: Cambridge },
  { nameKey: 'home.trusted.company.edinburgh', logo: Edinburgh },
  { nameKey: 'home.trusted.company.uiuc', logo: UIUC },
];

const CompanyLogo = ({ company, formatMessage }) => (
  <div className="company-item">
    <div className="card text-center p-3 rounded">
      <img
        src={company.logo}
        alt={formatMessage(messages[company.nameKey])}
        className="img-fluid mx-auto"
      />
    </div>
  </div>
);

const TrustedCompanies = () => {
  const { formatMessage } = useIntl();

  const renderTrack = (suffix) => (
    <div className="companies-track-group" aria-hidden={suffix === 'duplicate' ? true : undefined}>
      {companies.map((company) => (
        <CompanyLogo
          key={`${company.nameKey}-${suffix}`}
          company={company}
          formatMessage={formatMessage}
        />
      ))}
    </div>
  );

  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="text-center mb-4">{formatMessage(messages['home.trusted.heading'])}</h2>

        <div className="companies-wrapper">
          <div className="companies-track">
            {renderTrack('primary')}
            {renderTrack('duplicate')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
