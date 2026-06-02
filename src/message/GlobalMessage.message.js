import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'catalog.title': {
    id: 'catalog.title',
    defaultMessage: 'Explore Our Courses',
    description: 'Main heading of the course catalog page',
  },
  'catalog.subtitle': {
    id: 'catalog.subtitle',
    defaultMessage: 'Discover high-quality STEM courses designed to help you build in-demand skills and advance your career.',
    description: 'Subtitle under the main heading',
  },
  'catalog.search.placeholder': {
    id: 'catalog.search.placeholder',
    defaultMessage: 'Search courses, instructors...',
    description: 'Placeholder for search input',
  },
  'catalog.filter.allCategories': {
    id: 'catalog.filter.allCategories',
    defaultMessage: 'All Categories',
    description: 'Default option in category dropdown',
  },
  'catalog.filter.allLevels': {
    id: 'catalog.filter.allLevels',
    defaultMessage: 'All Levels',
    description: 'Default option in level dropdown',
  },
  'catalog.filter.allSubjects': {
    id: 'catalog.filter.allSubjects',
    defaultMessage: 'All Subjects',
    description: 'Default option in subject dropdown',
  },
  'catalog.filter.sortBy': {
    id: 'catalog.filter.sortBy',
    defaultMessage: 'Sort by',
    description: 'Placeholder for sort dropdown',
  },
  'catalog.filter.sort.enrollment': {
    id: 'catalog.filter.sort.enrollment',
    defaultMessage: 'Enrollment',
    description: 'Sort option by enrollment count',
  },
  'catalog.filter.sort.created': {
    id: 'catalog.filter.sort.created',
    defaultMessage: 'Created date',
    description: 'Sort option by created date',
  },
  'catalog.filter.sort.popular': {
    id: 'catalog.filter.sort.popular',
    defaultMessage: 'Popular',
    description: 'Sort option by popularity',
  },
  'catalog.activeFilters.label': {
    id: 'catalog.activeFilters.label',
    defaultMessage: 'Active filters:',
    description: 'Label before active filter badges',
  },
  'catalog.clearAll.label': {
    id: 'catalog.clearAll.label',
    defaultMessage: 'Clear all',
    description: 'Text to clear all filters',
  },
  'catalog.noResults.title': {
    id: 'catalog.noResults.title',
    defaultMessage: 'No courses found',
    description: 'Message when no courses match filters',
  },
  'catalog.noResults.action': {
    id: 'catalog.noResults.action',
    defaultMessage: 'Clear filters',
    description: 'Button to reset filters on no results',
  },
  'catalog.loading': {
    id: 'catalog.loading',
    defaultMessage: 'Loading courses...',
    description: 'Loading indicator text while fetching courses',
  },
  'catalog.error.fetch': {
    id: 'catalog.error.fetch',
    defaultMessage: 'Failed to load courses. Please try again later.',
    description: 'Error message when course fetch fails',
  },
  'catalog.retry': {
    id: 'catalog.retry',
    defaultMessage: 'Retry',
    description: 'Button text to retry loading courses after error',
  },
  'catalog.results.showing': {
    id: 'catalog.results.showing',
    defaultMessage: 'Showing {perPage} of {count} {count, plural, one {course} other {courses}}',
    description: 'Showing X courses message with plural support',
  },
  'catalog.view.grid': {
    id: 'catalog.view.grid',
    defaultMessage: 'Grid',
    description: 'Label for grid view button',
  },
  'catalog.view.list': {
    id: 'catalog.view.list',
    defaultMessage: 'List',
    description: 'Label for list view button',
  },
  'catalog.course.enroll': {
    id: 'catalog.course.enroll',
    defaultMessage: 'View Course',
    description: 'Button text on course cards',
  },

  // ----------------------------------------course about page-----------------------------------------

  // Page title & meta
  'courseAbout.title': {
    id: 'courseAbout.title',
    defaultMessage: 'Course Details',
    description: 'Page title for course about/detail page',
  },
  'courseAbout.enrollNow': {
    id: 'courseAbout.enrollNow',
    defaultMessage: 'Enroll Now',
    description: 'Enroll button text',
  },

  // Tabs
  'courseAbout.tab.overview': {
    id: 'courseAbout.tab.overview',
    defaultMessage: 'Overview',
    description: 'Tab label for course overview',
  },
  'courseAbout.tab.curriculum': {
    id: 'courseAbout.tab.curriculum',
    defaultMessage: 'Curriculum',
    description: 'Tab label for course curriculum',
  },
  'courseAbout.tab.instructor': {
    id: 'courseAbout.tab.instructor',
    defaultMessage: 'Instructor',
    description: 'Tab label for instructor info',
  },
  'courseAbout.tab.reviews': {
    id: 'courseAbout.tab.reviews',
    defaultMessage: 'Reviews',
    description: 'Tab label for student reviews',
  },
  'courseAbout.student': {
    id: 'courseAbout.student',
    defaultMessage: 'Students',
    description: 'tag for banner section',
  },

  'common.noData': {
    id: 'common.noData',
    defaultMessage: 'No {section} available.',
    description: 'Generic empty state message for sections like overview, curriculum, instructor, reviews',
  },

  // Overview section
  'courseAbout.whatYouWillLearn': {
    id: 'courseAbout.whatYouWillLearn',
    defaultMessage: 'What You Will Learn',
    description: 'Heading for features/learning outcomes',
  },
  'courseAbout.courseDescription': {
    id: 'courseAbout.courseDescription',
    defaultMessage: 'Course Description',
    description: 'Heading for detailed course description',
  },

  // Curriculum section
  'courseAbout.courseCurriculum': {
    id: 'courseAbout.courseCurriculum',
    defaultMessage: 'Course Curriculum',
    description: 'Heading for curriculum section',
  },

  // Instructor section
  'courseAbout.instructor': {
    id: 'courseAbout.instructor',
    defaultMessage: 'Instructor',
    description: 'Heading for instructor section',
  },

  // Reviews section
  'courseAbout.studentReviews': {
    id: 'courseAbout.studentReviews',
    defaultMessage: 'Student Reviews',
    description: 'Heading for reviews section',
  },

  // Sidebar / sticky card
  'courseAbout.duration': {
    id: 'courseAbout.duration',
    defaultMessage: '{duration} of content',
    description: 'Duration display in sidebar',
  },
  'courseAbout.level': {
    id: 'courseAbout.level',
    defaultMessage: '{level}',
    description: 'Level display in sidebar',
  },
  'courseAbout.certificate': {
    id: 'courseAbout.certificate',
    defaultMessage: 'Certificate of completion',
    description: 'Feature bullet in sidebar',
  },
  'courseAbout.previewVideo.play': {
    id: 'courseAbout.previewVideo.play',
    defaultMessage: 'Play course preview video',
    description: 'Aria label for course preview play button on enroll card',
  },
  'courseAbout.previewVideo.title': {
    id: 'courseAbout.previewVideo.title',
    defaultMessage: 'Course preview video',
    description: 'Accessible title for course preview YouTube iframe',
  },

  // Breadcrumb
  'courseAbout.breadcrumb.home': {
    id: 'courseAbout.breadcrumb.home',
    defaultMessage: 'Home',
    description: 'Breadcrumb link to home',
  },
  'courseAbout.breadcrumb.courses': {
    id: 'courseAbout.breadcrumb.courses',
    defaultMessage: 'Courses',
    description: 'Breadcrumb link to courses list',
  },
  'courseAbout.error.loadCourse': {
    id: 'courseAbout.error.loadCourse',
    defaultMessage: 'Failed to load course details. Please try again later.',
    description: 'Error message when course API fails',
  },
  'courseAbout.enrollment.invitationOnly': {
    id: 'courseAbout.enrollment.invitationOnly',
    defaultMessage: 'Enrollment in this course is by invitation only.',
    description: 'Message when course requires invitation',
  },
  'courseAbout.enrollment.closed': {
    id: 'courseAbout.enrollment.closed',
    defaultMessage: 'Enrollment is closed.',
    description: 'Message when enrollment is closed',
  },
  'courseAbout.enrollment.enrolling': {
    id: 'courseAbout.enrollment.enrolling',
    defaultMessage: 'Enrolling...',
    description: 'Text shown while enrolling',
  },
  'courseAbout.enrollment.viewCourse': {
    id: 'courseAbout.enrollment.viewCourse',
    defaultMessage: 'View Course',
    description: 'Button label when user already enrolled',
  },
  'courseAbout.enrollment.enrollNow': {
    id: 'courseAbout.enrollment.enrollNow',
    defaultMessage: 'Enroll Now',
    description: 'Enroll button label',
  },
  'courseAbout.wishlist.add': {
    id: 'courseAbout.wishlist.add',
    defaultMessage: 'Add to wishlist',
    description: 'Aria label for add to wishlist button',
  },
  'courseAbout.wishlist.remove': {
    id: 'courseAbout.wishlist.remove',
    defaultMessage: 'Remove from wishlist',
    description: 'Aria label for remove from wishlist button',
  },

  //--------------------About-us page --------------------------------------------
  // Page title & meta
  'about.title': {
    id: 'about.title',
    defaultMessage: 'About VigyanShaala',
    description: 'Main heading of the About Us page',
  },
  'about.subtitle': {
    id: 'about.subtitle',
    defaultMessage: 'Empowering learners worldwide with quality education and practical skills',
    description: 'Subtitle under the main heading',
  },

  // Breadcrumb
  'about.breadcrumb.home': {
    id: 'about.breadcrumb.home',
    defaultMessage: 'Home',
    description: 'Breadcrumb link to home',
  },
  'about.breadcrumb.about': {
    id: 'about.breadcrumb.about',
    defaultMessage: 'About Us',
    description: 'Current page in breadcrumb',
  },

  // Who We Are section
  'about.whoWeAre.badge': {
    id: 'about.whoWeAre.badge',
    defaultMessage: 'Who We Are',
    description: 'Badge label above section title',
  },
  'about.whoWeAre.heading': {
    id: 'about.whoWeAre.heading',
    defaultMessage: 'Transforming Education, One Learner at a Time',
    description: 'Main heading of Who We Are section',
  },
  'about.whoWeAre.description1': {
    id: 'about.whoWeAre.description1',
    defaultMessage: 'VigyanShaala was founded with a simple mission: to make quality education accessible to everyone. We believe that knowledge should have no boundaries, and every individual deserves the opportunity to learn and grow.',
    description: 'First paragraph of Who We Are',
  },
  'about.whoWeAre.description2': {
    id: 'about.whoWeAre.description2',
    defaultMessage: 'Our platform brings together world-class instructors, cutting-edge technology, and a supportive community to create an unparalleled learning experience. Whether you\'re looking to start a new career, upgrade your skills, or explore new interests, VigyanShaala is here to guide you on your journey.',
    description: 'Second paragraph of Who We Are',
  },
  'about.whoWeAre.exploreButton': {
    id: 'about.whoWeAre.exploreButton',
    defaultMessage: 'Explore Courses',
    description: 'Button text to explore courses',
  },

  // Stats section
  'about.stats.students': {
    id: 'about.stats.students',
    defaultMessage: 'Happy Students',
    description: 'Label for students stat',
  },
  'about.stats.instructors': {
    id: 'about.stats.instructors',
    defaultMessage: 'Expert Instructors',
    description: 'Label for instructors stat',
  },
  'about.stats.courses': {
    id: 'about.stats.courses',
    defaultMessage: 'Courses Available',
    description: 'Label for courses stat',
  },
  'about.stats.countries': {
    id: 'about.stats.countries',
    defaultMessage: 'Countries Reached',
    description: 'Label for countries stat',
  },

  // Why Choose Us / Features section
  'about.features.badge': {
    id: 'about.features.badge',
    defaultMessage: 'Why Choose Us',
    description: 'Badge above features section',
  },
  'about.features.heading': {
    id: 'about.features.heading',
    defaultMessage: 'What Sets Us Apart',
    description: 'Main heading of features section',
  },
  'about.features.subheading': {
    id: 'about.features.subheading',
    defaultMessage: 'We\'re committed to providing the best learning experience for our students',
    description: 'Subheading under features heading',
  },
  'about.features.expertLed': {
    id: 'about.features.expertLed',
    defaultMessage: 'Expert-Led Learning',
    description: 'Feature title: Expert-Led Learning',
  },
  'about.features.expertLedDesc': {
    id: 'about.features.expertLedDesc',
    defaultMessage: 'Learn from industry professionals with real-world experience.',
    description: 'Description for Expert-Led Learning feature',
  },
  'about.features.studentCentric': {
    id: 'about.features.studentCentric',
    defaultMessage: 'Student-Centric Approach',
    description: 'Feature title: Student-Centric Approach',
  },
  'about.features.studentCentricDesc': {
    id: 'about.features.studentCentricDesc',
    defaultMessage: 'Our courses are designed with your success in mind.',
    description: 'Description for Student-Centric Approach feature',
  },
  'about.features.careerGrowth': {
    id: 'about.features.careerGrowth',
    defaultMessage: 'Career Growth',
    description: 'Feature title: Career Growth',
  },
  'about.features.careerGrowthDesc': {
    id: 'about.features.careerGrowthDesc',
    defaultMessage: 'Skills that help you advance in your professional journey.',
    description: 'Description for Career Growth feature',
  },
  'about.features.qualityContent': {
    id: 'about.features.qualityContent',
    defaultMessage: 'Quality Content',
    description: 'Feature title: Quality Content',
  },
  'about.features.qualityContentDesc': {
    id: 'about.features.qualityContentDesc',
    defaultMessage: 'Carefully curated curriculum updated regularly.',
    description: 'Description for Quality Content feature',
  },

  // Mission & Vision
  'about.mission.heading': {
    id: 'about.mission.heading',
    defaultMessage: 'Our Mission',
    description: 'Heading for Mission section',
  },
  'about.mission.text': {
    id: 'about.mission.text',
    defaultMessage: 'To democratize education by providing accessible, high-quality learning experiences that empower individuals to achieve their personal and professional goals. We strive to bridge the gap between traditional education and the skills demanded by the modern workforce.',
    description: 'Mission statement text',
  },
  'about.vision.heading': {
    id: 'about.vision.heading',
    defaultMessage: 'Our Vision',
    description: 'Heading for Vision section',
  },
  'about.vision.text': {
    id: 'about.vision.text',
    defaultMessage: 'To become the world\'s most trusted and impactful online learning platform, where anyone, anywhere can access the education they need to transform their lives. We envision a future where learning knows no boundaries and opportunity is truly equal.',
    description: 'Vision statement text',
  },

  //----------------contact us page ----------------------------

  'contact.title': {
    id: 'contact.title',
    defaultMessage: 'Get in Touch',
    description: 'Main heading of the Contact Us page',
  },
  'contact.subtitle': {
    id: 'contact.subtitle',
    defaultMessage: 'If you would like to get involved with our work, please provide your contact information, will get back to you within 24 hours.',
    description: 'Subtitle under the main heading',
  },

  // Breadcrumb
  'contact.breadcrumb.home': {
    id: 'contact.breadcrumb.home',
    defaultMessage: 'Home',
    description: 'Breadcrumb link to home',
  },
  'contact.breadcrumb.contact': {
    id: 'contact.breadcrumb.contact',
    defaultMessage: 'Contact Us',
    description: 'Current page in breadcrumb',
  },

  // Contact info
  'contact.info.heading': {
    id: 'contact.info.heading',
    defaultMessage: 'Contact Information',
    description: 'Heading above contact details',
  },
  'contact.info.subheading': {
    id: 'contact.info.subheading',
    defaultMessage: 'Let\'s Start a Conversation',
    description: 'Subheading for contact info',
  },
  'contact.info.description': {
    id: 'contact.info.description',
    defaultMessage: 'We\'re here to help and answer any question you might have. We look forward to hearing from you.',
    description: 'Description text under subheading',
  },
  'contact.info.address.title': {
    id: 'contact.info.address.title',
    defaultMessage: 'Our Address',
    description: 'Title for address card',
  },
  'contact.info.address.text': {
    id: 'contact.info.address.text',
    defaultMessage: 'C 432, Avantika, Rohini Sector-1, Delhi - 110085',
    description: 'Address text',
  },
  'contact.info.email.title': {
    id: 'contact.info.email.title',
    defaultMessage: 'Email Us',
    description: 'Title for email card',
  },
  'contact.info.email.text': {
    id: 'contact.info.email.text',
    defaultMessage: 'communications@vigyanshaala.com',
    description: 'Email addresses',
  },
  'contact.info.phone.title': {
    id: 'contact.info.phone.title',
    defaultMessage: 'Call Us',
    description: 'Title for phone card',
  },
  'contact.info.phone.text': {
    id: 'contact.info.phone.text',
    defaultMessage: '+91 7028422265',
    description: 'Phone numbers',
  },

  // Form fields
  'contact.form.heading': {
    id: 'contact.form.heading',
    defaultMessage: 'Send us a Message',
    description: 'Heading above the contact form',
  },
  'contact.form.name.label': {
    id: 'contact.form.name.label',
    defaultMessage: 'Full Name',
    description: 'Label for name input',
  },
  'contact.form.name.placeholder': {
    id: 'contact.form.name.placeholder',
    defaultMessage: 'John Doe',
    description: 'Placeholder for name input',
  },
  'contact.form.email.label': {
    id: 'contact.form.email.label',
    defaultMessage: 'Email Address',
    description: 'Label for email input',
  },
  'contact.form.email.placeholder': {
    id: 'contact.form.email.placeholder',
    defaultMessage: 'john@example.com',
    description: 'Placeholder for email input',
  },
  'contact.form.phone.label': {
    id: 'contact.form.phone.label',
    defaultMessage: 'Phone Number',
    description: 'Label for phone input',
  },
  'contact.form.phone.placeholder': {
    id: 'contact.form.phone.placeholder',
    defaultMessage: '+91 98765 43210',
    description: 'Placeholder for phone input',
  },
  'contact.form.subject.label': {
    id: 'contact.form.subject.label',
    defaultMessage: 'Subject',
    description: 'Label for subject dropdown',
  },
  'contact.form.subject.placeholder': {
    id: 'contact.form.subject.placeholder',
    defaultMessage: 'Select a subject',
    description: 'Placeholder option in subject dropdown',
  },
  'contact.form.subject.general': {
    id: 'contact.form.subject.general',
    defaultMessage: 'General Inquiry',
    description: 'Subject option',
  },
  'contact.form.subject.courses': {
    id: 'contact.form.subject.courses',
    defaultMessage: 'Course Information',
    description: 'Subject option',
  },
  'contact.form.subject.support': {
    id: 'contact.form.subject.support',
    defaultMessage: 'Technical Support',
    description: 'Subject option',
  },
  'contact.form.subject.partnership': {
    id: 'contact.form.subject.partnership',
    defaultMessage: 'Partnership',
    description: 'Subject option',
  },
  'contact.form.message.label': {
    id: 'contact.form.message.label',
    defaultMessage: 'Message',
    description: 'Label for message textarea',
  },
  'contact.form.message.placeholder': {
    id: 'contact.form.message.placeholder',
    defaultMessage: 'Write your message here...',
    description: 'Placeholder for message textarea',
  },
  'contact.form.submit': {
    id: 'contact.form.submit',
    defaultMessage: 'Send Message',
    description: 'Submit button text',
  },
    // Contact form - updated fields
  'contact.form.firstName.label': {
    id: 'contact.form.firstName.label',
    defaultMessage: 'First Name',
  },
  'contact.form.firstName.placeholder': {
    id: 'contact.form.firstName.placeholder',
    defaultMessage: 'First name',
  },
  'contact.form.lastName.label': {
    id: 'contact.form.lastName.label',
    defaultMessage: 'Last Name',
  },
  'contact.form.lastName.placeholder': {
    id: 'contact.form.lastName.placeholder',
    defaultMessage: 'Last name',
  },
  'contact.form.captcha.label': {
    id: 'contact.form.captcha.label',
    defaultMessage: 'Verification',
  },
  'contact.form.captcha.placeholder': {
    id: 'contact.form.captcha.placeholder',
    defaultMessage: 'Your answer',
  },
  'contact.form.captcha.error': {
    id: 'contact.form.captcha.error',
    defaultMessage: 'Incorrect answer. Please try again.',
  },
  'contact.form.captcha.required': {
    id: 'contact.form.captcha.required',
    defaultMessage: 'Please complete the CAPTCHA verification',
    description: 'Error message when reCAPTCHA is not completed',
  },
  'contact.form.phone.digitsOnly': {
    id: 'contact.form.phone.digitsOnly',
    defaultMessage: 'Phone number can only contain digits',
    description: 'Error when non-digit characters are entered in phone',
  },
  'contact.form.required': {
    id: 'contact.form.required',
    defaultMessage: 'This field is required',
    description: 'Generic error when a required field is empty',
  },

  // Email validation
  'contact.form.email.invalid': {
    id: 'contact.form.email.invalid',
    defaultMessage: 'Please enter a valid email address',
    description: 'Error for invalid email format',
  },

  // Phone validation
  'contact.form.phone.required': {
    id: 'contact.form.phone.required',
    defaultMessage: 'Phone number is required',
    description: 'Error when phone field is empty',
  },
  'contact.form.phone.tooShort': {
    id: 'contact.form.phone.tooShort',
    defaultMessage: 'Phone number is too short',
    description: 'Error when phone number has fewer than 7 digits',
  },
  'contact.form.phone.invalid': {
    id: 'contact.form.phone.invalid',
    defaultMessage: 'Please enter a valid phone number (7-15 digits)',
    description: 'Final validation error for phone field',
  },

  // Submission states
  'contact.form.submitting': {
    id: 'contact.form.submitting',
    defaultMessage: 'Sending...',
    description: 'Loading text while form is submitting',
  },
  'contact.form.submit.error': {
    id: 'contact.form.submit.error',
    defaultMessage: 'Failed to send message. Please try again.',
    description: 'Generic error when API call fails',
  },
  'contact.form.success.title': {
    id: 'contact.form.success.title',
    defaultMessage: 'Thanks for contacting us!',
    description: 'Success alert title',
  },
  'contact.form.success.message': {
    id: 'contact.form.success.message',
    defaultMessage: 'We will get in touch with you shortly.',
    description: 'Success alert description',
  },
  //===============================================================================================================
  //---------------------------------------------home-page---------------------------------------------------------
  //===============================================================================================================

  'home.hero.firsttitle': {
    id: 'home.hero.firsttitle',
    defaultMessage: 'Grow your career',
    description: 'Main hero title part 1',
  },
  'home.hero.firsthighlight': {
    id: 'home.hero.firsthighlight',
    defaultMessage: 'IN STEM',
    description: 'Highlighted part of hero title',
  },
  'home.hero.firstdescription': {
    id: 'home.hero.firstdescription',
    defaultMessage: 'Calling EVERY Woman pursuing STEM - Science, Technology, Engineering, Maths Degree to be part of an inspiring global community and make your next leap into higher education or job.',
    description: 'Hero description text',
  },
  'home.hero.secondtitle': {
    id: 'home.hero.secondtitle',
    defaultMessage: 'Learn from Industry',
    description: 'Main hero title part 1',
  },
  'home.hero.secondhighlight': {
    id: 'home.hero.secondhighlight',
    defaultMessage: 'Experts',
    description: 'Highlighted part of hero title',
  },
  'home.hero.seconddescription': {
    id: 'home.hero.seconddescription',
    defaultMessage: 'Access world-class education from renowned instructors and gain practical knowledge that sets you apart.',
    description: 'Hero description text',
  },
  'home.hero.thirdtitle': {
    id: 'home.hero.thirdtitle',
    defaultMessage: 'Creating Job Opportunities',
    description: 'Main hero title part 1 for third slide',
  },
  'home.hero.thirdhighlight': {
    id: 'home.hero.thirdhighlight',
    defaultMessage: 'In Science and Technology',
    description: 'Highlighted part of hero title for third slide',
  },
  'home.hero.thirddescription': {
    id: 'home.hero.thirddescription',
    defaultMessage: 'We connect learners with mentorship, skills, and industry pathways to build meaningful careers across science, technology, engineering, and mathematics.',
    description: 'Hero description text for third slide',
  },
  'home.hero.getStarted': {
    id: 'home.hero.getStarted',
    defaultMessage: 'Get Started',
    description: 'Primary button in hero',
  },
  'home.hero.learnMore': {
    id: 'home.hero.learnMore',
    defaultMessage: 'Learn More',
    description: 'Secondary button in hero',
  },


    // Impact Numbers section labels
  'home.impact.globalMentors': {
    id: 'home.impact.globalMentors',
    defaultMessage: 'Global Mentors',
    description: 'Label for the number of global mentors in impact section',
  },
  'home.impact.learners': {
    id: 'home.impact.learners',
    defaultMessage: 'Learners',
    description: 'Label for the number of learners in impact section',
  },
  'home.impact.masterclasses': {
    id: 'home.impact.masterclasses',
    defaultMessage: 'MasterClasses',
    description: 'Label for the number of masterclasses in impact section',
  },
  'home.impact.ResearchProjects': {
    id: 'home.impact.ResearchProjects',
    defaultMessage: 'Research Projects',
    description: 'Label for the number of global speakers in impact section',
  },

  'home.trusted.heading': {
    id: 'home.trusted.heading',
    defaultMessage: 'Some of the places our Mentors are from',
    description: 'Heading for trusted companies section',
  },

  'home.categories.heading': {
    id: 'home.categories.heading',
    defaultMessage: 'Explore Our Categories',
    description: 'Main heading for categories',
  },
  'home.categories.subheading': {
    id: 'home.categories.subheading',
    defaultMessage: 'Discover a wide range of courses across multiple disciplines. Whether you are looking to advance your career or explore new interests, we have something for everyone.',
    description: 'Subheading for categories',
  },
  'home.categories.browseAll': {
    id: 'home.categories.browseAll',
    defaultMessage: 'Browse All Courses',
    description: 'Button to browse all courses',
  },
  'home.courses.heading': {
    id: 'home.courses.heading',
    defaultMessage: 'Explore Our Popular Courses',
    description: 'Heading for featured courses carousel',
  },
  'home.courses.subheading': {
    id: 'home.courses.subheading',
    defaultMessage: 'Start your learning journey with our most popular courses taught by industry experts',
    description: 'Subheading for featured courses',
  },
  'home.courses.exploreAll': {
    id: 'home.courses.exploreAll',
    defaultMessage: 'Explore All Courses',
    description: 'CTA button below courses carousel',
  },
  'home.success.heading': {
    id: 'home.success.heading',
    defaultMessage: 'Hear from Our Achievers',
    description: 'Heading for success story section',
  },
  'home.success.subheading': {
    id: 'home.success.subheading',
    defaultMessage: 'Discover how VigyanShaala has transformed careers and empowered thousands of learners to achieve their dreams',
    description: 'Subheading for success story',
  },
    // Success Story - Video Card
  'home.success.video.thumbnail.alt': {
    id: 'home.success.video.thumbnail.alt',
    defaultMessage: 'Success Story Video Thumbnail',
    description: 'Alt text for the success story video thumbnail image',
  },
  'home.success.video.title': {
    id: 'home.success.video.title',
    defaultMessage: 'From Beginner to Data Scientist',
    description: 'Title shown over the success story video thumbnail',
  },
  'home.success.video.poster': {
    id: 'home.success.video.poster',
    defaultMessage: '/images/video-poster.jpg',
    description: 'Path to the video poster image (fallback image shown before play)',
  },
  'home.success.video.unsupported': {
    id: 'home.success.video.unsupported',
    defaultMessage: 'Your browser does not support the video tag.',
    description: 'Fallback message when browser cannot play the video',
  },

  // General close button (useful in many places)
  'common.close': {
    id: 'common.close',
    defaultMessage: 'Close',
    description: 'Accessible label for close buttons/modals',
  },

  'home.experts.heading': {
    id: 'home.experts.heading',
    defaultMessage: 'Meet Our Expert Instructors',
    description: 'Main heading for experts section',
  },
  'home.experts.subheading': {
    id: 'home.experts.subheading',
    defaultMessage: 'Learn from industry leaders and academic experts who bring real-world experience to every lesson',
    description: 'Subheading for experts',
  },
    // Meet Our Expert Instructors - individual experts
  'home.experts.expert1.name': {
    id: 'home.experts.expert1.name',
    defaultMessage: 'Dr. Priya Sharma',
    description: 'Name of expert 1',
  },
  'home.experts.expert1.subject': {
    id: 'home.experts.expert1.subject',
    defaultMessage: 'Python & Data Science',
    description: 'Subject taught by expert 1',
  },

  'home.experts.expert2.name': {
    id: 'home.experts.expert2.name',
    defaultMessage: 'Prof. Rajesh Kumar',
    description: 'Name of expert 2',
  },
  'home.experts.expert2.subject': {
    id: 'home.experts.expert2.subject',
    defaultMessage: 'Machine Learning',
    description: 'Subject taught by expert 2',
  },

  'home.experts.expert3.name': {
    id: 'home.experts.expert3.name',
    defaultMessage: 'Dr. Ananya Desai',
    description: 'Name of expert 3',
  },
  'home.experts.expert3.subject': {
    id: 'home.experts.expert3.subject',
    defaultMessage: 'Business Strategy',
    description: 'Subject taught by expert 3',
  },

  'home.experts.expert4.name': {
    id: 'home.experts.expert4.name',
    defaultMessage: 'Vikram Mehta',
    description: 'Name of expert 4',
  },
  'home.experts.expert4.subject': {
    id: 'home.experts.expert4.subject',
    defaultMessage: 'UI/UX Design',
    description: 'Subject taught by expert 4',
  },

  'home.experts.expert5.name': {
    id: 'home.experts.expert5.name',
    defaultMessage: 'Dr. Kavita Reddy',
    description: 'Name of expert 5',
  },
  'home.experts.expert5.subject': {
    id: 'home.experts.expert5.subject',
    defaultMessage: 'Finance & Analytics',
    description: 'Subject taught by expert 5',
  },

  'home.experts.expert6.name': {
    id: 'home.experts.expert6.name',
    defaultMessage: 'Arjun Nair',
    description: 'Name of expert 6',
  },
  'home.experts.expert6.subject': {
    id: 'home.experts.expert6.subject',
    defaultMessage: 'Digital Marketing',
    description: 'Subject taught by expert 6',
  },

  'home.experts.expert7.name': {
    id: 'home.experts.expert7.name',
    defaultMessage: 'Sneha Gupta',
    description: 'Name of expert 7',
  },
  'home.experts.expert7.subject': {
    id: 'home.experts.expert7.subject',
    defaultMessage: 'Content Writing',
    description: 'Subject taught by expert 7',
  },

  'home.experts.expert8.name': {
    id: 'home.experts.expert8.name',
    defaultMessage: 'Rohan Patel',
    description: 'Name of expert 8',
  },
  'home.experts.expert8.subject': {
    id: 'home.experts.expert8.subject',
    defaultMessage: 'Web Development',
    description: 'Subject taught by expert 8',
  },

  'home.community.heading': {
    id: 'home.community.heading',
    defaultMessage: 'Join Our Growing Community',
    description: 'Heading for community section',
  },
  'home.community.subheading': {
    id: 'home.community.subheading',
    defaultMessage: 'Be part of a vibrant learning community that supports and inspires each other',
    description: 'Subheading for community',
  },
  'home.community.stat': {
    id: 'home.community.stat',
    defaultMessage: 'Over 25,000+ happy learners have transformed their careers with VigyanShaala',
    description: 'Community stats text',
  },
    // Community Section - additional translatable strings
  'home.community.happyStudents': {
    id: 'home.community.happyStudents',
    defaultMessage: 'Happy Students',
    description: 'Heading inside community card',
  },
  'home.community.avatarPlus': {
    id: 'home.community.avatarPlus',
    defaultMessage: '+25k',
    description: 'Avatar count text inside community card',
  },

  'home.testimonials.heading': {
    id: 'home.testimonials.heading',
    defaultMessage: 'What Our Students Say',
    description: 'Main heading for testimonials',
  },
  'home.testimonials.subheading': {
    id: 'home.testimonials.subheading',
    defaultMessage: 'Real stories from real learners who have achieved success with VigyanShaala',
    description: 'Subheading for testimonials',
  },
    // Testimonials - individual items
  'home.testimonials.item1.quote': {
    id: 'home.testimonials.item1.quote',
    defaultMessage: 'VigyanShaala completely transformed my career. The Python course gave me the skills I needed to land my dream job as a data analyst.',
    description: 'Quote from testimonial 1',
  },
  'home.testimonials.item1.name': {
    id: 'home.testimonials.item1.name',
    defaultMessage: 'Gauri Patti ',
    description: 'Name of person in testimonial 1',
  },
  'home.testimonials.item1.role': {
    id: 'home.testimonials.item1.role',
    defaultMessage: 'Data Analyst at Google',
    description: 'Role/position of person in testimonial 1',
  },

  'home.testimonials.item2.quote': {
    id: 'home.testimonials.item2.quote',
    defaultMessage: 'The quality of content and the practical approach to teaching sets VigyanShaala apart.',
    description: 'Quote from testimonial 2',
  },
  'home.testimonials.item2.name': {
    id: 'home.testimonials.item2.name',
    defaultMessage: 'Diksha Nagarkoti ',
    description: 'Name of person in testimonial 2',
  },
  'home.testimonials.item2.role': {
    id: 'home.testimonials.item2.role',
    defaultMessage: 'Software Engineer at Microsoft',
    description: 'Role/position of person in testimonial 2',
  },

  'home.testimonials.item3.quote': {
    id: 'home.testimonials.item3.quote',
    defaultMessage: 'As someone switching careers, I was skeptical about online learning. But the mentorship made all the difference.',
    description: 'Quote from testimonial 3',
  },
  'home.testimonials.item3.name': {
    id: 'home.testimonials.item3.name',
    defaultMessage: 'Nikita Tiwari',
    description: 'Name of person in testimonial 3',
  },
  'home.testimonials.item3.role': {
    id: 'home.testimonials.item3.role',
    defaultMessage: 'Product Manager at Amazon',
    description: 'Role/position of person in testimonial 3',
  },
  'home.testimonials.item4.quote': {
    id: 'home.testimonials.item4.quote',
    defaultMessage: 'The real-world projects and expert guidance helped me gain confidence and build a strong portfolio.',
    description: 'Quote from testimonial 4',
  },
  'home.testimonials.item4.name': {
    id: 'home.testimonials.item4.name',
    defaultMessage: 'Garima',
    description: 'Name of person in testimonial 4',
  },
  'home.testimonials.item4.role': {
    id: 'home.testimonials.item4.role',
    defaultMessage: 'Frontend Developer at Infosys',
    description: 'Role/position of person in testimonial 4',
  },

  'home.testimonials.item5.quote': {
    id: 'home.testimonials.item5.quote',
    defaultMessage: 'Learning from global mentors gave me insights I could never get from traditional courses.',
    description: 'Quote from testimonial 5',
  },
  'home.testimonials.item5.name': {
    id: 'home.testimonials.item5.name',
    defaultMessage: 'Abha Barge',
    description: 'Name of person in testimonial 5',
  },
  'home.testimonials.item5.role': {
    id: 'home.testimonials.item5.role',
    defaultMessage: 'AI Research Intern at IIT Bombay',
    description: 'Role/position of person in testimonial 5',
  },

  'home.testimonials.item6.quote': {
    id: 'home.testimonials.item6.quote',
    defaultMessage: 'The platform made complex topics simple and engaging. It truly accelerated my learning journey.',
    description: 'Quote from testimonial 6',
  },
  'home.testimonials.item6.name': {
    id: 'home.testimonials.item6.name',
    defaultMessage: 'Himani Upadhyay',
    description: 'Name of person in testimonial 6',
  },
  'home.testimonials.item6.role': {
    id: 'home.testimonials.item6.role',
    defaultMessage: 'Full Stack Developer at TCS',
    description: 'Role/position of person in testimonial 6',
  },

  'common.carousel.previous': {
    id: 'common.carousel.previous',
    defaultMessage: 'Previous',
    description: 'Accessible label for previous carousel control',
  },
  'common.carousel.next': {
    id: 'common.carousel.next',
    defaultMessage: 'Next',
    description: 'Accessible label for next carousel control',
  },
  'common.carousel.goToSlide': {
    id: 'common.carousel.goToSlide',
    defaultMessage: 'Go to slide {slideNumber}',
    description: 'Accessible label for carousel slide indicator',
  },
  'common.error.loadData': {
    id: 'common.error.loadData',
    defaultMessage: 'Unable to load data. Please try again later.',
    description: 'Generic error when data fetch fails',
  },
  'about.whoWeAre.image.alt': {
    id: 'about.whoWeAre.image.alt',
    defaultMessage: 'Our team collaborating',
    description: 'Alt text for who we are section image',
  },
  'home.community.membersBadge': {
    id: 'home.community.membersBadge',
    defaultMessage: '25,000+ members',
    description: 'Member count badge in community section',
  },
  'home.community.profile1.name': { id: 'home.community.profile1.name', defaultMessage: 'Aarav Patel', description: 'Community profile 1 name' },
  'home.community.profile1.role': { id: 'home.community.profile1.role', defaultMessage: 'Data Analyst', description: 'Community profile 1 role' },
  'home.community.profile2.name': { id: 'home.community.profile2.name', defaultMessage: 'Diya Sharma', description: 'Community profile 2 name' },
  'home.community.profile2.role': { id: 'home.community.profile2.role', defaultMessage: 'Research Mentor', description: 'Community profile 2 role' },
  'home.community.profile3.name': { id: 'home.community.profile3.name', defaultMessage: 'Ishaan Kumar', description: 'Community profile 3 name' },
  'home.community.profile3.role': { id: 'home.community.profile3.role', defaultMessage: 'ML Engineer', description: 'Community profile 3 role' },
  'home.community.profile4.name': { id: 'home.community.profile4.name', defaultMessage: 'Ananya Reddy', description: 'Community profile 4 name' },
  'home.community.profile4.role': { id: 'home.community.profile4.role', defaultMessage: 'Biotech Researcher', description: 'Community profile 4 role' },
  'home.community.profile5.name': { id: 'home.community.profile5.name', defaultMessage: 'Vivaan Singh', description: 'Community profile 5 name' },
  'home.community.profile5.role': { id: 'home.community.profile5.role', defaultMessage: 'Data Scientist', description: 'Community profile 5 role' },
  'home.community.profile6.name': { id: 'home.community.profile6.name', defaultMessage: 'Kavya Nair', description: 'Community profile 6 name' },
  'home.community.profile6.role': { id: 'home.community.profile6.role', defaultMessage: 'AI Researcher', description: 'Community profile 6 role' },
  'home.community.profile7.name': { id: 'home.community.profile7.name', defaultMessage: 'Arjun Mehta', description: 'Community profile 7 name' },
  'home.community.profile7.role': { id: 'home.community.profile7.role', defaultMessage: 'Product Manager', description: 'Community profile 7 role' },
  'home.community.profile8.name': { id: 'home.community.profile8.name', defaultMessage: 'Priya Desai', description: 'Community profile 8 name' },
  'home.community.profile8.role': { id: 'home.community.profile8.role', defaultMessage: 'UX Designer', description: 'Community profile 8 role' },
  'home.success.video.counter': {
    id: 'home.success.video.counter',
    defaultMessage: '{current} / {total}',
    description: 'Video position counter in success story modal',
  },
  'home.trusted.company.amazon': { id: 'home.trusted.company.amazon', defaultMessage: 'Amazon', description: 'Trusted company logo alt' },
  'home.trusted.company.amd': { id: 'home.trusted.company.amd', defaultMessage: 'AMD', description: 'Trusted company logo alt' },
  'home.trusted.company.atlassian': { id: 'home.trusted.company.atlassian', defaultMessage: 'Atlassian', description: 'Trusted company logo alt' },
  'home.trusted.company.bd': { id: 'home.trusted.company.bd', defaultMessage: 'BD', description: 'Trusted company logo alt' },
  'home.trusted.company.cummins': { id: 'home.trusted.company.cummins', defaultMessage: 'Cummins', description: 'Trusted company logo alt' },
  'home.trusted.company.dispelix': { id: 'home.trusted.company.dispelix', defaultMessage: 'Dispelix', description: 'Trusted company logo alt' },
  'home.trusted.company.ey': { id: 'home.trusted.company.ey', defaultMessage: 'EY', description: 'Trusted company logo alt' },
  'home.trusted.company.galiencom': { id: 'home.trusted.company.galiencom', defaultMessage: 'Galiencom', description: 'Trusted company logo alt' },
  'home.trusted.company.gartner': { id: 'home.trusted.company.gartner', defaultMessage: 'Gartner', description: 'Trusted company logo alt' },
  'home.trusted.company.jncc': { id: 'home.trusted.company.jncc', defaultMessage: 'JNCC', description: 'Trusted company logo alt' },
  'home.trusted.company.microsoft': { id: 'home.trusted.company.microsoft', defaultMessage: 'Microsoft', description: 'Trusted company logo alt' },
  'home.trusted.company.mphasis': { id: 'home.trusted.company.mphasis', defaultMessage: 'Mphasis', description: 'Trusted company logo alt' },
  'home.trusted.company.nagarro': { id: 'home.trusted.company.nagarro', defaultMessage: 'Nagarro', description: 'Trusted company logo alt' },
  'home.trusted.company.nih': { id: 'home.trusted.company.nih', defaultMessage: 'NIH', description: 'Trusted company logo alt' },
  'home.trusted.company.slb': { id: 'home.trusted.company.slb', defaultMessage: 'SLB', description: 'Trusted company logo alt' },
  'home.trusted.company.springerNature': { id: 'home.trusted.company.springerNature', defaultMessage: 'Springer Nature', description: 'Trusted company logo alt' },
  'home.trusted.company.thermoFisher': { id: 'home.trusted.company.thermoFisher', defaultMessage: 'Thermo Fisher Scientific', description: 'Trusted company logo alt' },
  'home.trusted.company.wellsFargo': { id: 'home.trusted.company.wellsFargo', defaultMessage: 'Wells Fargo', description: 'Trusted company logo alt' },
  'home.trusted.company.nbrc': { id: 'home.trusted.company.nbrc', defaultMessage: 'NRBC', description: 'Trusted company logo alt' },
  'home.trusted.company.columbia': { id: 'home.trusted.company.columbia', defaultMessage: 'Columbia University', description: 'Trusted company logo alt' },
  'home.trusted.company.iitBhu': { id: 'home.trusted.company.iitBhu', defaultMessage: 'IIT BHU', description: 'Trusted company logo alt' },
  'home.trusted.company.iisc': { id: 'home.trusted.company.iisc', defaultMessage: 'Indian Institute of Science', description: 'Trusted company logo alt' },
  'home.trusted.company.iitBombay': { id: 'home.trusted.company.iitBombay', defaultMessage: 'IIT Bombay', description: 'Trusted company logo alt' },
  'home.trusted.company.ntu': { id: 'home.trusted.company.ntu', defaultMessage: 'Nanyang Technological University', description: 'Trusted company logo alt' },
  'home.trusted.company.stStephens': { id: 'home.trusted.company.stStephens', defaultMessage: 'St. Stephens College', description: 'Trusted company logo alt' },
  'home.trusted.company.ucsd': { id: 'home.trusted.company.ucsd', defaultMessage: 'UC San Diego', description: 'Trusted company logo alt' },
  'home.trusted.company.cambridge': { id: 'home.trusted.company.cambridge', defaultMessage: 'University of Cambridge', description: 'Trusted company logo alt' },
  'home.trusted.company.edinburgh': { id: 'home.trusted.company.edinburgh', defaultMessage: 'University of Edinburgh', description: 'Trusted company logo alt' },
  'home.trusted.company.uiuc': { id: 'home.trusted.company.uiuc', defaultMessage: 'University of Illinois', description: 'Trusted company logo alt' },
});

export default messages;