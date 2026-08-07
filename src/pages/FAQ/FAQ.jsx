import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Spinner, Collapsible } from '@openedx/paragon';
import { Link } from 'react-router-dom';
import messages from './faq.message';
import './FAQ.scss';

const FAQ_SECTIONS = [
  {
    title: 'About the Program',
    items: [
      {
        question: '1. What is She for STEM?',
        answer: 'She for STEM is a free, online mentoring and career development program designed and delivered by scientists and professionals from leading global universities and organisations. It is a two-level program — the Incubator followed by the Accelerator — built to place every fellow on a high-confidence STEM career path. Through 60+ hours of structured learning, live masterclasses, innovative assignments, and a powerful peer and mentor network, the Incubator equips women students to take charge of their careers with clarity, conviction, and confidence.',
      },
      {
        question: '2. Who can apply for the Incubator?',
        answer: 'The She for STEM Incubator is open to women students pursuing STEM disciplines, including:',
        list: ['B.Sc.', 'B.Tech. / B.E.', 'BCA', 'B.Pharm.', 'M.Sc.', 'MCA', 'M.Tech.', 'Other related STEM disciplines'],
        after: 'Students from any year of study are welcome to apply. We particularly encourage 2nd-year undergraduate students to participate, as they are at an ideal stage to explore career pathways, build professional skills, and make informed decisions about internships, higher studies, research, and future opportunities. Students from other years who are interested and committed are equally welcome.',
      },
      {
        question: '3. Is She for STEM only for students who want to pursue research?',
        answer: 'Not at all. The program is designed to support students across all STEM pathways — industry careers, higher studies, research, entrepreneurship, and public-sector opportunities. Whatever direction you are considering, She for STEM helps you explore, prepare, and take meaningful next steps.',
      },
      {
        question: '4. What makes She for STEM different from other online courses?',
        answer: 'She for STEM goes well beyond content delivery. It combines structured career development modules, live expert masterclasses, inspirational sessions with global STEM leaders, real-world assignments with personalised feedback, and access to a long-term She for STEM network — all designed specifically for women in STEM in India and beyond.',
      },
      {
        question: '5. What kind of students benefit the most from She for STEM?',
        answer: 'Students who are curious, committed to their growth, and willing to show up consistently gain the most from the program. You do not need to be a top ranker or have prior professional experience — all you need is a genuine desire to build your career with intention.',
      },
    ],
  },
  {
    title: 'Fees & Accessibility',
    items: [
      {
        question: '6. Why is She for STEM free?',
        answer: 'The program is offered entirely free of cost to ensure that every deserving woman in STEM has access to quality mentorship, career guidance, and opportunities — regardless of financial background, institution, or geography.',
      },
      {
        question: '7. Do I need to pay any fees to participate?',
        answer: 'No. There are no registration fees, participation fees, or charges of any kind.',
      },
      {
        question: '8. Are there any hidden charges?',
        answer: 'No. All learning modules, live sessions, community access, and certification are provided at zero cost.',
      },
      {
        question: '9. Can students from rural or remote areas participate?',
        answer: 'Yes. The program is fully online and accessible from anywhere with an internet connection.',
      },
      {
        question: '10. Is the program available outside India?',
        answer: 'Yes. Students from any country are welcome to apply, subject to meeting eligibility requirements.',
      },
    ],
  },
  {
    title: 'Program Content & Structure',
    items: [
      {
        question: '11. What will I learn during the program?',
        answer: 'The Incubator covers a rich range of topics, including:',
        list: [
          'Career exploration and SMART goal-setting',
          'SWOT analysis and self-assessment',
          'Resume and CV building',
          'LinkedIn profile development and professional networking',
          'Internship search and application strategies',
          'Higher studies planning and SOP writing',
          'Communication, personal branding, and interview preparation',
          'Decision-making, growth mindset, and time management',
        ],
      },
      {
        question: '12. What are the timelines of the program? Is it really heavy?',
        answer: 'The She for STEM Incubator runs over approximately 8–10 weeks (plus onboarding and certification weeks), delivering 60+ hours of learning. Students typically invest around 4–5 hours per week. Most learning is self-paced and designed to fit comfortably alongside your regular college schedule.',
      },
      {
        question: '13. Can I do this program alongside my college studies?',
        answer: 'Yes — that is exactly how it is designed. The flexible, self-paced learning structure allows you to progress at a pace that works with your academic timetable.',
      },
      {
        question: '14. Do I need prior technical knowledge to join?',
        answer: 'No. Students from diverse STEM backgrounds and varying skill levels can fully participate. The program meets you where you are and supports your growth from there.',
      },
      {
        question: '15. How many live sessions are there?',
        answer: 'The program includes regular MasterClasses (held on Sundays) covering professional skills such as decision-making, job readiness, and higher education applications, as well as weekly Inspirational Speaker Sessions (on Saturdays) where global STEM leaders share their journeys and answer students’ questions.',
      },
      {
        question: '16. Can I interact with the speakers and experts?',
        answer: 'Yes. Students are actively encouraged to ask questions and participate during all live sessions. These interactions are one of the most valued parts of the She for STEM experience.',
      },
      {
        question: '17. What happens if I miss a live session?',
        answer: 'Session recordings are generally made available on the learning platform so you can catch up on missed content at your convenience.',
      },
      {
        question: '18. How are assignments structured?',
        answer: 'Assignments are practical and reflective, designed to help you apply what you are learning to your own context. Activities include career planning exercises, resume and LinkedIn development, self-assessment frameworks, SOP drafting, and more.',
      },
      {
        question: '19. Will I receive feedback on my work?',
        answer: 'Yes. Students receive individual, constructive feedback on their assignments to support continuous improvement and professional readiness.',
      },
    ],
  },
  {
    title: 'Support & Learning Experience',
    items: [
      {
        question: '20. What if I am stuck with a module?',
        answer: 'Support is available through multiple channels — live session Q&As, open house sessions, community discussion forums, peer conversations, and the program support team. You are never alone in your learning journey.',
      },
      {
        question: '21. How are doubts and questions addressed?',
        answer: 'You can ask questions during live sessions, participate in community discussions, and reach out through designated program support channels shared during onboarding.',
      },
      {
        question: '22. What if I join and realise I have knowledge gaps?',
        answer: 'That is completely normal — and expected. The program is deliberately designed to support learners at different starting points. Knowledge gaps are an opportunity, not a barrier.',
      },
      {
        question: '23. How can I get the most out of She for STEM?',
        answer: 'Students who invest consistently tend to experience the greatest growth. Here is what makes the biggest difference:',
        list: [
          'Attending live sessions regularly',
          'Completing assignments and activities on time',
          'Asking questions and actively participating in discussions',
          'Seeking feedback and applying it thoughtfully',
          'Engaging with peers, mentors, and the She for STEM community',
          'Taking genuine ownership of your learning and career development',
        ],
        after: 'The value you gain from this program is directly proportional to the effort and consistency you bring to it.',
      },
    ],
  },
  {
    title: 'Certification & Completion',
    items: [
      {
        question: '24. Will I receive a certificate?',
        answer: 'Yes. Students who successfully meet all program requirements receive a Government-recognised completion certificate from VigyanShaala.',
      },
      {
        question: '25. What are the requirements for certification?',
        answer: 'To earn your certificate, you must meet the following requirements:',
        list: [
          'Minimum 70% attendance at live sessions',
          'Completion of required learning modules',
          'Timely submission of assignments',
          'Completion of quizzes and assessments',
          'Adherence to program guidelines',
        ],
      },
      {
        question: '26. Will I have access to the course content after the program ends?',
        answer: 'Yes. Students continue to have access to learning resources and session recordings for an extended period after the program concludes.',
      },
      {
        question: '27. What if I am unable to complete the program on time?',
        answer: 'You may continue accessing resources beyond the cohort period, but certification requirements must be completed within the timelines communicated during the program.',
      },
    ],
  },
  {
    title: 'Career Outcomes & Opportunities',
    items: [
      {
        question: '28. How will She for STEM help me with my career, job, or higher studies?',
        answer: 'The program is built to make you career-ready — not just academically prepared. You will develop skills in career planning, communication, resume building, SOP writing, networking, interview preparation, and professional self-presentation. These are skills that open doors regardless of which path you choose.',
      },
      {
        question: '29. What are the benefits of completing She for STEM?',
        answer: 'On successful completion, students gain:',
        list: [
          'A Government-recognised completion certificate from VigyanShaala',
          'A stronger, more confident professional profile',
          'Practical career-readiness skills',
          'Access to the She for STEM Network — a community of peers, mentors, and STEM leaders',
          'Eligibility to apply for the She for STEM Accelerator',
          'Ongoing access to jobs, internships, higher education opportunities, and STEM events',
        ],
      },
      {
        question: '30. Will She for STEM guarantee me a job, internship, or admission?',
        answer: 'No. The program does not guarantee specific outcomes. However, it significantly improves your readiness, confidence, professional profile, and access to the right opportunities — giving you a meaningful edge.',
      },
      {
        question: '31. Will the program help me find internships?',
        answer: 'The program does not guarantee internship placements, but it regularly shares relevant opportunities, partner resources, and practical guidance to help you actively pursue and secure them.',
      },
      {
        question: '32. What happens after I complete the Incubator?',
        answer: 'Graduates become part of the She for STEM Network and continue to receive access to opportunities, resources, curated events, and community support. High-performing students also become eligible to apply for the She for STEM Accelerator — the next level of the program, featuring 75+ hours of personalised career coaching and deep-dive mentoring from global STEM professionals.',
      },
      {
        question: '33. Can I apply for advanced mentoring opportunities after completion?',
        answer: 'Yes. Highly engaged Incubator graduates may become eligible for the She for STEM Accelerator, as well as other advanced mentoring, leadership, or research opportunities within the VigyanShaala ecosystem.',
      },
    ],
  },
  {
    title: 'Mindset & Motivation',
    items: [
      {
        question: '34. I am not sure what career I want to pursue. Can I still join?',
        answer: 'Absolutely. Career clarity is one of the key outcomes of the program — not a prerequisite for joining. She for STEM is specifically designed to help you explore your options, understand your strengths, and make informed decisions about your future.',
      },
      {
        question: '35. I am not a topper. Will this program still benefit me?',
        answer: 'Yes — this program is for motivated learners, not academic rank-holders. What matters most is your willingness to engage, reflect, and grow. Many of our most successful fellows were not toppers when they joined.',
      },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      {
        question: '36. How do I contact the She for STEM team?',
        answer: 'Support and contact details are shared during registration and onboarding. You are always welcome to reach out whenever you need assistance — the team is here for you.',
      },
    ],
  },
];

const FAQ = () => {
  const { formatMessage } = useIntl();
  const [loading] = useState(false);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-8">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="faq-page py-5">
      <div className="container">
        <h1 className="faq-heading mb-4">{formatMessage(messages['faq.title'])}</h1>
        <p className="faq-intro mb-5">{formatMessage(messages['faq.intro'])}</p>

        <div className="faq-container">
          <div className="bg-white faq-content">
            {FAQ_SECTIONS.map((section) => (
              <div className="faq-section" key={section.title}>
                <h4 className="faq-section-title">{section.title}</h4>
                {section.items.map((item) => (
                  <Collapsible
                    key={item.question}
                    title={item.question}
                    styling="basic"
                    className="faq-item"
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                      {item.list && (
                        <ul>
                          {item.list.map((listItem) => <li key={listItem}>{listItem}</li>)}
                        </ul>
                      )}
                      {item.after && <p className="additional-info">{item.after}</p>}
                    </div>
                  </Collapsible>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
