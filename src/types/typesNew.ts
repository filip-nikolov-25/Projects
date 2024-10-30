import HeroSection from "@/components/aboutPage/HeroSection";
import exp from "constants";

export interface BlogArticleStaticContent {
  heroSection: BlogArticleHeroSectionType;
  currentOpenedPage: CurrentOpenedPageType;
  rightShortDescText: BlogArticleRightShortDescText;
}
export interface BlogArticleHeroSectionType {
  blog: string;
  contact: string;
  from: string;
}
export interface CurrentOpenedPageType {
  first: string;
  second?: string;
  third?: string;
}
export interface BlogArticleRightShortDescText {
  shareText: string;
  shortDescription: string;
}
export interface AllBlogsData {
  headingParagraph: string;
  allBlogs: AllBlogsType[];
}
export interface NavType {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  button: string;
  drowdownFirst: string
  drowdowsSecond: string
  drowdownThird: string
  drowdownFourh: string
}
export interface BlogPostArticleCardsType {
  leadingText: string;
  secondaryText: string;
  id: string;
  advice?: {
    adviceWord: string;
    adviceText: string;
  };
}
export interface AllBlogsType {
  blogImg: string;
  author: string;
  authorImgUrl: string;
  blogName: string;
  learnMore: string;
  hiddenText: string;
  date: string;
  smallText: string;
  cultureinthecompany: string;
  training: string;
  id: string;
  commentSection?: CommentSectionData;
  blogTextCardsData?: BlogTextCardsType[];
  blogStats: BlogStatsType;
}
export interface CommentSectionData {
  commentsParagraphs: string;
  allComments: AllCommentsType[];
}
export interface AllCommentsType {
  likes: number;
  text: string;
  comments: number;
  user: string;
  profilePic: string;
}
export interface CurrentLoggedInUserType {
  profileImg: string;
  name: string;
  lastname: string;
  email: string;
  profession: string;
}

export interface BlogTextCardsType {
  id: string;
  leadingText: string;
  secondaryText: string;
  advice: AdviceType;
}
export interface AdviceType {
  adviceWord: string;
  adviceText: string;
}
export interface BlogStatsType {
  likes: string;
  comments: number;
  favorites: number;
  shareSection: string;
  commentButton: string;
}
export interface EventCarouselType {
  id: string;
  blogName: string;
  mainParagparh: string;
  month: string;
  day: string;
  img: string;
  learnMoreLink: string;
  date: string;
  theme: string;
  description: string;
  mission: string;
  agendSection: AgendSectionType[];
}
export interface AgendSectionType {
  name: string;
  firstParagraph: string;
  secondParagraph: string;
  eventTime: string;
}
export interface CommentType {
  likes: number;
  comments: number;
  text: string;
  user: string;
  profilePic: string;
}
export interface BlogsPageStaticContent {
  heroSection: BlogsPageHeroSectionStaticType;
  currentOpenedPage: Pick<CurrentOpenedPageType, "first" | "second" | "third">;
  tipsSection: BlogPageTipsSection;
  recommendedBigCard: RecommendedBigCardType;
}

export interface BlogsPageHeroSectionStaticType {
  blog: string;
  contact: string;
  from: string;
}
export interface BlogPageTipsSection {
  be: string;
  active: string;
  mainText: string;
  secondaryText: string;
}
export interface RecommendedBigCardType {
  name: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  headingParagraph: string;
}
export interface HomePageStaticHeroSectionData {
  heroSection: HomePageStaticHeroSectionType;
  currentOpenedPage: CurrentOpenedPageType;
  underHeroSection: HomePageStaticUnderHeroSectionType;
  eventsSectionData: HomePageEventsSectionType;
  endSection: EndSectionType;
  betweenTwoSimilarBlogs: BetweenTwoSimilarBlogsHomePageType;
}
export interface HomePageStaticHeroSectionType {
  mainParagparh: string;
  secondaryParagraph: string;
  buttonContainerText: string;
  buttonText: string;
  contactUsText: string;
}
export interface HomePageStaticUnderHeroSectionType {
  mainText: string;
  smallText: string;
  buttonContainerText: string;
  buttonText: string;
}
export interface HomePageEventsSectionType {
  rightSection: HomePageEventsRightSectionType;
  textCards: TextCardsType[];
}
export interface HomePageEventsRightSectionType {
  headingText: string;
  mainText: string;
}
export interface TextCardsType {
  ordinalNumber: string;
  eventName: string;
  learnMoreText: string;
}
export interface EndSectionType {
  grayMessage: string;
  orangeMessage: string;
  mainParagraph: string;
  smallParagraph: string;
  buttonText: string;
  macrBigCard: string;
  email: string;
}
export interface SingleEventPageHeroSectionType {
  blog: string;
  contact: string;
  from: string;
}

export interface SingleEventPageMainType {
  description: string;
  purpose: string;
  buycard: string;
  mail: string;
}
export interface StaticContentSingleEventPage {
  heroSection: SingleEventPageHeroSectionType;
  mainSection: SingleEventPageMainType;
  bottomSection: SignleEventPageBottomSectionType;
}
export interface SignleEventPageBottomSectionType {
  speakerParahraph: string;
  individualPrice: string;
  companyPrice: string;
  buycard: string;
  mail: string;
  buttonText: string;
  mainParagraph: string;
}
export interface StaticContentConferencePageHeroSectionType {
  blog: string;
  contact: string;
  from: string;
}
export interface StaticContentConferencePageType {
  heroSection: StaticContentConferencePageHeroSectionType;
  mainSection: StaticContentConferencePageMainSectionType;
  specialGuests: StaticContentConferencePageSpecialGuestsSectionType;
  agendSection: StaticContentConferencePageAgendSectionType;
  ceoSection: StaticContentConferencePageCEOSectionType;
  priceSection: StaticContentConferencePagePriceSectionType;
  currentOpenedPage: CurrentOpenedPageType;
}
export interface StaticContentConferencePageMainSectionType {
  buycard: string;
  mail: string;
  days: string;
}
export interface StaticContentConferencePageSpecialGuestsSectionType {
  mainParagraph: string;
  buttonText: string;
  secondaryParagraph: string;
}
export interface StaticContentConferencePageAgendSectionType {
  mainParagraph: string;
  day1: string;
  day2: string;
}
export interface StaticContentConferencePageCEOSectionType {
  ceo: string;
  smallParagraph: string;
  bio: string;
}
export interface StaticContentConferencePagePriceSectionType {
  individualCardName: string;
  individualCardFirst: string;
  individualCardSecond: string;
  individualCardThird: string;
  corporationCardName: string;
  corporationCardFirst: string;
  corporationCardSecond: string;
  corporationCardThird: string;
  corporationCardFourth: string;
  headingParagraph: string;
  recommendButtonText: string;
  buyNowButtonText: string;
}
export interface currentUserType {
  profileImg: string;
  name: string;
  lastname: string;
  profession: string;
  number: string;
  email: string;
  bio: string;
  town: string;
  comments: CommentType[];
}
export interface UserDashBoardPageHeroSectionType {
  settingParagrah: string;
  shortBio: string;
  recommended: string;
}
export interface UserDashBoardStaticContent {
  heroSection: UserDashBoardPageHeroSectionType;
  badges: UserDashBoardPageBadgeSectionType;
  ticketsSection: UserDashBoardPageTicketSectionType;
  calendarSection: UserDashBoardPageCalendarSectionType;
}
export interface UserDashBoardPageBadgeSectionType {
  points: string;
  newestBadgesParagraph: string;
  viewAll: string;
  firstBadge: string;
  secondBadge: string;
  listofConnections: string;
  addConnection: string;
  inputPlaceholder: string;
  latestAdded: string;
}
export interface UserDashBoardPageTicketSectionType {
  headingParagraph: string;
  firstCardMainParagraph: string;
  firstCardSecondaryParagraph: string;
  secondCardMainParagraph: string;
  secondCardSecondaryParagraph: string;
  won: string;
  recommended: string;
  discount: string;
  friends: string;
  sendButtonText: string;
  feedback: string;
}
export interface UserDashBoardPageCalendarSectionType {
  mainParagparh: string;
  secondaryParagraph: string;
}
export interface SignUpPageStaticContentType {
  heroSection: SignUpPageHeroSectionType;
  loginSection: SignUpPageLoginSection;
  benefitsSection: SignUpPageBenefitsSectionType;
}
export interface SignUpPageHeroSectionType {
  mainParagparh: string;
  secondaryParagraph: string;
  buttonText: string;
  contactUsText: string;
}
export interface SignUpPageLoginSection {
  googleButton: string;
  continueButton: string;
  cookiesText: string;
  firstAcceptInputText: string;
  secondAcceptInputText: string;
  headingParagraph: string;
  orParagraph: string;
}
export interface SignUpPageBenefitsSectionType {
  leftSectionHeadingParagraph: string;
  leftSectionFirstListParagraph: string;
  leftSectionSecondListParagraph: string;
  leftSectionThirdListParagraph: string;
  leftSectionFourthListParagraph: string;
  rightSectionHeadingParagraph: string;
  rightSectionFirstListParagraph: string;
  rightSectionSecondListParagraph: string;
  rightSectionThirdListParagraph: string;
  rightSectionFourthListParagraph: string;
  rightSectionFifthListParagraph: string;
}
export interface AboutUsPageStaticContent {
  heroSection: AboutUsHeroSectionType;
  mainSection: AboutUsMainSectionType;
  aboutCeo: AboutUsCeoSectionType;
  currentOpenedPage: CurrentOpenedPageType;
}
export interface AboutUsHeroSectionType {
  headingParagraph: string;
  secondaryParagraph: string;
  buttonContainerText: string;
  buttonText: string;
  contactUsText: string;
}
export interface AboutUsMainSectionType {
  headingParagraph: string;
  secondaryParagraph: string;
  firstSectionFirstParagraph: string;
  firstSectionSecondParagraph: string;
  firstSectionThirdParagraph: string;
  secondSectionMainParagraph: string;
  secondSectionFirstParagraph: string;
  secondSectionSecondParagraph: string;
  secondSectionThirdParagraph: string;
}
export interface AboutUsCeoSectionType {
  mainParagraph: string;
  smallParagraph: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  fourthParagraph: string;
}
export interface EventsListingType {
  id: string;
  img: string;
  hrCoffee?: string;
  hrWeekend?: string;
  hrWebinar?: string;
  hrConferences?: string;
  readMore: string;
  hiddenText: string;
  eventImg: string;
  headingParagraph?: string;
  eventName: string;
}
export interface EventListingStaticContentType {
  heroSection: EventListingHeroSectionType;
  calendarSection: EventListingCalendarTextSectionType;
  filterSection: EventListingFilterSectionType;
  currentOpenedPage: CurrentOpenedPageType;
}
export interface BlogsPageTipsSection {
  active: string;
  be: string;
  mainText: string;
  secondaryText: string;
}
export interface HomePageHeroSectionType {
  mainParagparh: string;
  secondaryParagraph: string;
  buttonContainerText: string;
  buttonText: string;
  contactUsText: string;
}
export interface EventListingHeroSectionType {
  eventName: string;
  event: string;
  eventText: string;
  buttonText: string;
  contactUsText: string;
}
export interface EventListingCalendarTextSectionType {
  mainParagparh: string;
  secondaryParagraph: string;
}
export interface EventListingFilterSectionType {
  firstButton: string;
  secondButton: string;
  thirdButton: string;
  fourthButton: string;
  fifthButton: string;
  inputText: string;
  allText: string;
}
export interface FooterType {
  adress: string;
  email: string;
  subscribeText: string;
}
export interface BetweenTwoSimilarBlogsHomePageType {
  mainParagraph: string;
  secondaryParagraph: string;
  president: string;
}
