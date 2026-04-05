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
  { name: 'Amazon', logo: Amazon },
  { name: 'AMD', logo: AMD },
  { name: 'Atlassian', logo: Atlassian },
  { name: 'BD', logo: BD },
  { name: 'Cummins', logo: Cummins },
  { name: 'Dispelix', logo: Dispelix },
  { name: 'EY', logo: EY },
  { name: 'Galiencom', logo: Galiencom },
  { name: 'Gartner', logo: Gartner },
  { name: 'JNCC', logo: JNCC },
  { name: 'Microsoft', logo: Microsoft },
  { name: 'Mphasis', logo: Mphasis },
  { name: 'Nagarro', logo: Nagarro },
  { name: 'NIH', logo: NIH },
  { name: 'SLB', logo: SLB },
  { name: 'Springer Nature', logo: SpringerNature },
  { name: 'Thermo Fisher Scientific', logo: ThermoFisher },
  { name: 'Wells Fargo', logo: WellsFargo },
  { name: 'NRBC', logo: NBRC},
  { name: 'Coat_of_Arms_of_Columbia_University', logo: Coat_of_Arms_of_Columbia_University},
  { name: 'IIT BHU', logo: IITBHU },
  { name: 'Indian Institute of Science', logo: IISc },
  { name: 'IIT Bombay', logo: IITBombay },
  { name: 'Nanyang Technological University', logo: NTU },
  { name: 'St. Stephens College', logo: StStephens },
  { name: 'UC San Diego', logo: UCSD },
  { name: 'University of Cambridge', logo: Cambridge },
  { name: 'University of Edinburgh', logo: Edinburgh },
  { name: 'University of Illinois', logo: UIUC },
];

const TrustedCompanies = () => {
  const { formatMessage } = useIntl();

  // Duplicate companies array to create seamless scrolling
  const scrollingCompanies = [...companies, ...companies];

  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="text-center mb-4">{formatMessage(messages['home.trusted.heading'])}</h2>
        {/* <p className="text-center text-muted mb-5">
          {formatMessage(messages['home.trusted.subheading'])}
        </p> */}

        <div className="companies-wrapper">
          <div className="companies-track py-2">
            {scrollingCompanies.map((company, idx) => (
              <div key={idx} className="company-item">
                <div className="card text-center p-3 rounded">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
