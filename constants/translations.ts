import { Translations } from '../types';

interface AllTranslations {
  en: Translations;
  ar: Translations;
}

export const translations: AllTranslations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    cities: 'Cities',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    myAccount: 'My Account',
    adminDashboard: 'Admin Dashboard',
    dashboardAccessDenied: 'Only admins and vendors can access the dashboard.',
    invalidCredentials: 'Invalid email or password.',

    // Hero
    heroTitle: 'Discover Your Next Adventure',
    heroSubtitle: 'Book your dream vacation with our exclusive travel packages.',
    destination: 'Enter a destination...',
    search: 'Search',

    // Features
    featuresTitle: 'Why Choose Us?',
    feature1Title: 'Curated Packages',
    feature1Desc: 'We offer a wide range of hand-picked travel packages to suit every taste and budget.',
    feature2Title: 'Easy Booking',
    feature2Desc: 'Our streamlined booking process makes planning your trip a breeze.',
    feature3Title: '24/7 Support',
    feature3Desc: 'Our dedicated team is always here to help you, before, during, and after your trip.',

    // How it Works
    howItWorksTitle: 'How It Works',
    step1Title: 'Explore Destinations',
    step1Desc: 'Browse through our diverse collection of cities and travel packages.',
    step2Title: 'Book Your Trip',
    step2Desc: 'Select your package, provide your details, and confirm your booking securely.',
    step3Title: 'Enjoy Your Vacation',
    step3Desc: 'Pack your bags and get ready for an unforgettable experience. We handle the rest!',

    // Featured Cities
    featuredCitiesTitle: 'Featured Cities',
    paris: 'Paris',
    parisDesc: 'The city of love and lights.',
    tokyo: 'Tokyo',
    tokyoDesc: 'A vibrant blend of tradition and modernity.',
    dubai: 'Dubai',
    dubaiDesc: 'Experience luxury in the desert metropolis.',
    newYork: 'New York',
    newYorkDesc: 'The city that never sleeps.',

    // Footer
    footerDescription: 'Your one-stop platform for discovering and booking unique travel experiences worldwide.',
    quickLinks: 'Quick Links',
    faq: 'FAQ',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved.',

    // About Page
    aboutTitle: 'About Trip In',
    aboutMission: 'Our Mission',
    aboutMissionText: 'To make travel accessible, enjoyable, and unforgettable for everyone by providing seamless booking experiences and exceptional customer service.',
    aboutVision: 'Our Vision',
    aboutVisionText: 'To become the leading platform for curated travel packages, connecting travelers with unique cultural experiences across the globe.',
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'How do I book a package?',
    faqA1: 'Simply browse our packages, select the one you like, click "Book Now", and follow the checkout process. It\'s that simple!',
    faqQ2: 'What payment methods do you accept?',
    faqA2: 'We accept all major credit cards, including Visa, MasterCard, and American Express. We also support payments via PayPal.',
    faqQ3: 'Can I customize a package?',
    faqA3: 'Currently, we do not offer customization through the website. However, you can contact our support team for special requests, and we will do our best to accommodate them.',

    // Contact Page
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Have a question or a special request? We\'d love to hear from you. Fill out the form below or use our contact details.',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactInformation: 'Contact Information',
    address: '123 Travel Lane, Adventure City, 90210',
    phone: '+1 (555) 123-4567',
    email: 'contact@tripin.com',

    // Legal Page
    privacyPolicyText: 'This is the privacy policy. We respect your privacy and are committed to protecting it. This policy describes the types of information we may collect from you or that you may provide when you visit the website and our practices for collecting, using, maintaining, protecting, and disclosing that information.',
    termsOfServiceText: 'These are the terms of service. By accessing or using the service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the service. Purchases: If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase.',
    
    // Modals
    loginToYourAccount: 'Login to your account',
    emailAddress: 'Email Address',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    dontHaveAccount: "Don't have an account?",
    createAnAccount: 'Create an account',
    confirmPassword: 'Confirm Password',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    
    // Packages
    packagesTitle: 'Explore Our Packages',
    packagesSubtitle: 'Find the perfect getaway from our curated list of travel packages.',
    days: 'Days',
    priceFrom: 'From',
    viewDetails: 'View Details',
    backToPackages: 'Back to Packages',
    perPerson: 'per person',
    bookNow: 'Book Now',
    whatsIncluded: "What's Included",
    whatsNotIncluded: "What's Not Included",

    // Checkout & Confirmation
    checkoutTitle: 'Complete Your Booking',
    yourBooking: 'Your Booking',
    personalInformation: 'Personal Information',
    fullName: 'Full Name',
    confirmBooking: 'Confirm Booking',
    bookingConfirmed: 'Booking Confirmed!',
    bookingConfirmedMsg: 'Thank you for your booking! A confirmation email has been sent with all the details of your trip.',
    bookingSummary: 'Booking Summary',
    package: 'Package',
    price: 'Price',
    backToHome: 'Back to Home',

    // Client Account
    welcomeBackClient: 'Welcome back, {name}!',
    profileInformation: 'Profile Information',
    myLocations: 'My Locations',
    youHaveNoPastLocations: "You haven't traveled with us yet. Time to book your first trip!",
    myBookings: 'My Bookings',
    youHaveNoBookings: "You don't have any active bookings.",
    explorePackages: 'Explore Packages',
    myFavoritePackages: 'My Favorite Packages',
    noFavorites: "You haven't added any packages to your favorites.",
    chatWithVendor: 'Chat with Vendor',
    leaveAReview: 'Leave a Review',

    // Dashboard General
    dashboard: 'Dashboard',
    listings: 'Listings',
    bookings: 'Bookings',
    users: 'Users',
    settings: 'Settings',
    financials: 'Financials',
    reviews: 'Reviews',
    support: 'Support',
    siteSettings: 'Site Settings',
    nightMode: 'Night Mode',
    switchToUserView: 'Switch to User View',
    welcomeBack: 'Welcome back, {name}!',
    dashboardOverview: "Here's a summary of your site's activity.",
    recentActivity: 'Recent Activity',
    actions: 'Actions',
    status: 'Status',

    // Admin Dashboard
    totalRevenue: 'Total Revenue',
    totalBookings: 'Total Bookings',
    pendingPayouts: 'Pending Payouts',
    openSupportTickets: 'Open Support Tickets',
    pendingReviews: 'Pending Reviews',
    allUsers: 'All Users',
    manageUsers: 'Manage all user accounts.',
    userName: 'Name',
    userRole: 'Role',
    
    // Vendor Dashboard
    vendorDashboardOverview: "Here's a summary of your activity.",
    yourRevenue: 'Your Revenue',
    unreadMessages: 'Unread Messages',
    yourRecentActivity: 'Your Recent Activity',

    // Listings Page
    allListings: 'All Listings',
    myListings: 'My Listings',

    manageYourListings: 'Manage all package listings.',
    manageYourOwnListings: 'Manage your package listings.',
    addNewListing: 'Add New Listing',
    listingName: 'Listing Name',
    edit: 'Edit',
    managePricing: 'Pricing',
    delete: 'Delete',

    // Bookings Page
    allBookings: 'All Bookings',
    manageYourBookings: 'View and manage all bookings.',
    manageYourOwnBookings: 'View and manage your bookings.',
    bookingId: 'Booking ID',
    guest: 'Guest',
    date: 'Date',
    totalPaid: 'Total Paid',
    chatWithClient: 'Chat with Client',
    viewReview: 'View Review',

    // Settings Page
    accountSettings: 'Account Settings',
    manageYourProfile: 'Manage your profile information and preferences.',

    // Financials Page
    allTransactions: 'All Transactions',
    manageTransactions: 'View and manage all financial transactions.',
    transactionId: 'Transaction ID',
    description: 'Description',
    amount: 'Amount',
    type: 'Type',
    
    // Reviews Page
    manageReviews: 'Moderate and manage user reviews.',
    reviewer: 'Reviewer',
    rating: 'Rating',
    comment: 'Comment',
    approve: 'Approve',
    reject: 'Reject',

    // Support Page
    manageSupport: 'Manage support tickets and user inquiries.',
    ticketId: 'Ticket ID',
    user: 'User',
    viewTicket: 'View Ticket',
    
    // Site Settings Page
    manageSite: 'Manage global site settings and configurations.',
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    cities: 'المدن',
    contact: 'تواصل معنا',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    logout: 'تسجيل الخروج',
    myAccount: 'حسابي',
    adminDashboard: 'لوحة التحكم',
    dashboardAccessDenied: 'فقط المسؤولون والموردون يمكنهم الوصول إلى لوحة التحكم.',
    invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صالحة.',

    heroTitle: 'اكتشف مغامرتك التالية',
    heroSubtitle: 'احجز عطلة أحلامك مع باقات السفر الحصرية لدينا.',
    destination: 'أدخل وجهة...',
    search: 'بحث',
    featuresTitle: 'لماذا تختارنا؟',
    feature1Title: 'باقات منسقة',
    feature1Desc: 'نحن نقدم مجموعة واسعة من باقات السفر المختارة بعناية لتناسب كل الأذواق والميزانيات.',
    feature2Title: 'حجز سهل',
    feature2Desc: 'عملية الحجز المبسطة لدينا تجعل التخطيط لرحلتك أمرًا سهلاً.',
    feature3Title: 'دعم على مدار الساعة',
    feature3Desc: 'فريقنا المتفاني موجود دائمًا لمساعدتك، قبل وأثناء وبعد رحلتك.',

    howItWorksTitle: 'كيف نعمل',
    step1Title: 'استكشف الوجهات',
    step1Desc: 'تصفح مجموعتنا المتنوعة من المدن وباقات السفر.',
    step2Title: 'احجز رحلتك',
    step2Desc: 'اختر باقتك، قدم تفاصيلك، وأكد حجزك بأمان.',
    step3Title: 'استمتع بإجازتك',
    step3Desc: 'احزم حقائبك واستعد لتجربة لا تُنسى. نحن نتولى الباقي!',

    featuredCitiesTitle: 'مدن مميزة',
    paris: 'باريس',
    parisDesc: 'مدينة الحب والأنوار.',
    tokyo: 'طوكيو',
    tokyoDesc: 'مزيج نابض بالحياة من التقاليد والحداثة.',
    dubai: 'دبي',
    dubaiDesc: 'جرب الفخامة في مدينة الصحراء.',
    newYork: 'نيويورك',
    newYorkDesc: 'المدينة التي لا تنام.',

    footerDescription: 'منصتك الشاملة لاكتشاف وحجز تجارب سفر فريدة في جميع أنحاء العالم.',
    quickLinks: 'روابط سريعة',
    faq: 'الأسئلة الشائعة',
    legal: 'قانوني',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    allRightsReserved: 'كل الحقوق محفوظة.',
  },
};