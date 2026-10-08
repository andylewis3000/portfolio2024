import { useState } from 'react';
import ReactGA from 'react-ga4';
import { Reveal } from 'react-awesome-reveal';
import {
  FaGaugeHigh,
  FaPuzzlePiece,
  FaTag,
  FaCartShopping,
  FaMobileScreen,
  FaChartLine,
  FaListOl,
  FaComments,
  FaCheck,
  FaXmark,
  FaChevronDown,
  FaCode,
  FaFlask,
  FaFileLines,
} from 'react-icons/fa6';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';
import { defaultRevealProps } from '../utils/revealAnimation';

// Placeholders are written as "[TODO: ...]". The prerender step fails the
// build if any reach the rendered page, so they can't be deployed by mistake.

// Calendly / Google Calendar booking page URL.
const BOOKING_URL = 'https://calendly.com/andylewis-info';

const leaks = [
  'Slow mobile pages',
  "Product pages that don't answer buyer questions",
  'Shipping costs that show up too late',
  'App bloat that drags down speed',
  'A cart and checkout with too much friction',
];

const included = [
  {
    icon: FaGaugeHigh,
    name: 'Speed & performance',
    description: 'Mobile load times, Core Web Vitals, theme and app impact.',
  },
  {
    icon: FaPuzzlePiece,
    name: 'Theme & apps',
    description: 'Outdated theme risks, unused apps, scripts slowing the store.',
  },
  {
    icon: FaTag,
    name: 'Product pages',
    description:
      'Images, copy, reviews, trust signals, shipping and returns clarity.',
  },
  {
    icon: FaCartShopping,
    name: 'Cart & checkout',
    description:
      'Friction points, free-shipping thresholds, upsell placement.',
  },
  {
    icon: FaMobileScreen,
    name: 'Mobile UX',
    description: 'Navigation, tap targets, layout issues on real devices.',
  },
  {
    icon: FaChartLine,
    name: 'Analytics check',
    description:
      'Whether your tracking is accurate enough to make decisions.',
  },
  {
    icon: FaListOl,
    name: 'Ranked fix list',
    description:
      'Every issue scored by expected impact and effort, so you know what to do first.',
  },
  {
    icon: FaComments,
    name: 'Walkthrough call',
    description: '45 minutes going through the findings together.',
  },
];

const retainer = [
  {
    icon: FaCode,
    name: 'I build the fixes',
    description:
      'Design and development work, straight from your ranked fix list.',
  },
  {
    icon: FaFlask,
    name: 'Test what matters',
    description:
      'Where your traffic supports it, changes are tested so decisions are based on data.',
  },
  {
    icon: FaFileLines,
    name: 'Monthly report',
    description: "What changed, what it did, and what's next.",
  },
];

const steps = [
  {
    name: 'Intro call',
    description:
      '30 minutes, free. We confirm the audit is a fit for your store.',
  },
  {
    name: 'Access',
    description:
      'You add me as a collaborator on Shopify and share analytics access.',
  },
  {
    name: 'Audit',
    description:
      'I review your store, focused on what matters most for your business. We agree on the timeline up front.',
  },
  {
    name: 'Walkthrough',
    description: 'We go through the findings on a call. You keep the report.',
  },
  {
    name: 'Next step, your choice',
    description:
      'Run the fixes yourself, hand them to your team, or have me implement them on a monthly retainer.',
  },
];

const fitFor = [
  'Shopify and Shopify Plus stores, in Canada or anywhere else',
  'Roughly $500K to $2M in annual revenue',
  'Already getting steady traffic from ads, email or organic search',
];

const notFitFor = [
  "You're pre-launch or getting very little traffic. Focus on traffic first.",
  'You want a full site rebuild. This audit improves the store you have.',
];

const pricing = [
  { plan: 'Shopify store', price: '$1,500' },
  { plan: 'Shopify Plus store', price: '$2,500', featured: true },
];

// Experience figures from Andy's résumé. Replace with client results
// (real numbers only) once there are some to share.
const background = [
  {
    stat: '$350M+',
    label: 'GMV across the Shopify Plus merchant portfolio I advised',
  },
  {
    stat: '50+',
    label: 'Shopify Plus merchants advised on acquisition, conversion and retention',
  },
  {
    stat: '25',
    label: 'Shopify retainer clients I currently manage delivery for',
  },
  {
    stat: '10+ yrs',
    label: 'Designing and building websites as a front-end developer',
  },
];

const faqs = [
  {
    q: 'How long does it take?',
    a: 'It depends on the size of your store and what you want looked at. We agree on a timeline on the intro call, before you pay anything.',
  },
  {
    q: 'What access do you need?',
    a: 'Collaborator access to your Shopify admin and view access to your analytics. Nothing is changed during the audit.',
  },
  {
    q: 'Do I have to sign up for a retainer?',
    a: 'No. The report is yours, and you can act on it however you want.',
  },
  {
    q: "What if my store isn't a good fit?",
    a: "I'll tell you on the intro call, before you pay anything.",
  },
  {
    q: 'Do you work with stores outside Canada?',
    a: "Yes. I'm based in Canada and work with Shopify stores anywhere. Pricing is in CAD.",
  },
];

// Booking link with a GA4 event, so outreach -> booked calls is measurable.
const BookCallButton = ({ location, btnClass = 'btn-primary' }) => {
  // Until the booking URL is set, fall back to the contact page (the TODO
  // marker stays in the markup so the prerender guard still catches it).
  const pending = BOOKING_URL.startsWith('[TODO');
  const href = pending ? '/contact' : BOOKING_URL;
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={`btn ${btnClass}`}
      href={href}
      data-todo={pending ? BOOKING_URL : undefined}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      onClick={() => ReactGA.event('book_intro_call_click', { location })}
    >
      Book a 30-minute intro call
    </a>
  );
};

const Audit = () => {
  // FAQ accordion: one answer open at a time, first one open by default.
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-large'}
        heading={'Find where your Shopify store loses sales.'}
        subHeading={
          'A fixed-price conversion audit from an ex-Shopify Plus advisor who also designs and builds. You get a clear list of fixes, prioritized by likely impact.'
        }
        imgActive={true}
        actions={
          <div className="audit-hero__actions">
            <BookCallButton location="hero" btnClass="btn-secondary" />
            <a className="audit-hero__link" href="#included">
              See what&apos;s included
            </a>
          </div>
        }
      />

      <div className="page-container">
        {/* The problem */}
        <section className="audit-problem">
          <div className="container">
            <div className="audit-split">
              <Reveal {...defaultRevealProps}>
                <div className="content-col">
                  <h2>You&apos;re paying for traffic.</h2>
                  <p>
                    Ads, email, social. But traffic doesn&apos;t matter if
                    visitors don&apos;t buy. Most stores lose sales in the same
                    places.
                  </p>
                  <p>
                    You can&apos;t fix what you can&apos;t see. The audit shows
                    you exactly where it&apos;s happening on your store.
                  </p>
                  <p className="audit-teardown-note">
                    <strong>Already have my free teardown?</strong> That
                    covered three issues. The audit goes through your whole
                    store and ranks everything it finds by likely impact.
                  </p>
                </div>
              </Reveal>
              <ul className="audit-leaks">
                <Reveal {...defaultRevealProps} damping={0.1}>
                  {leaks.map((leak) => (
                    <li key={leak}>
                      <FaXmark aria-hidden="true" />
                      <span>{leak}</span>
                    </li>
                  ))}
                </Reveal>
              </ul>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="audit-included" id="included">
          <div className="container">
            <Reveal {...defaultRevealProps}>
              <h2>What&apos;s included</h2>
            </Reveal>
            <div className="audit-cards">
              <Reveal {...defaultRevealProps} damping={0.1}>
                {included.map(({ icon: Icon, name, description }) => (
                  <div className="audit-card" key={name}>
                    <Icon aria-hidden="true" />
                    <h3 className="h6">{name}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="audit-steps">
          <div className="container">
            <Reveal {...defaultRevealProps}>
              <h2>How it works</h2>
            </Reveal>
            <ol className="audit-steps__list">
              <Reveal {...defaultRevealProps} damping={0.1}>
                {steps.map(({ name, description }, i) => (
                  <li key={name}>
                    <span className="audit-steps__number" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="h6">{name}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </Reveal>
            </ol>
          </div>
        </section>

        {/* Who it's for */}
        <section className="audit-fit">
          <div className="container">
            <div className="audit-fit__grid">
              <Reveal {...defaultRevealProps}>
                <div className="audit-fit__col audit-fit__col--yes">
                  <h2 className="h4">Who it&apos;s for</h2>
                  <ul>
                    {fitFor.map((item) => (
                      <li key={item}>
                        <FaCheck aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="audit-fit__col audit-fit__col--no">
                  <h2 className="h4">Not a fit if</h2>
                  <ul>
                    {notFitFor.map((item) => (
                      <li key={item}>
                        <FaXmark aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="audit-pricing">
          <div className="container">
            <Reveal {...defaultRevealProps}>
              <h2>Pricing</h2>
              <p className="audit-pricing__intro">
                Every store is different, so the final price depends on scope.
                It&apos;s agreed up front, with no hourly billing.
              </p>
            </Reveal>
            <div className="audit-pricing__grid">
              <Reveal {...defaultRevealProps}>
                {pricing.map(({ plan, price, featured }) => (
                  <div
                    className={`audit-price${
                      featured ? ' audit-price--featured' : ''
                    }`}
                    key={plan}
                  >
                    <h3 className="h6">{plan}</h3>
                    <p className="audit-price__amount">
                      <span className="audit-price__from">From</span>
                      {price} <span>CAD</span>
                    </p>
                    <BookCallButton
                      location={`pricing-${plan}`}
                      btnClass={featured ? 'btn-secondary' : 'btn-primary'}
                    />
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal {...defaultRevealProps}>
              <p className="audit-pricing__note">
                Start a retainer within 30 days and the audit fee is credited
                to your first month.
              </p>
            </Reveal>
          </div>
        </section>

        {/* After the audit (retainer) */}
        <section className="audit-retainer">
          <div className="container">
            <Reveal {...defaultRevealProps}>
              <h2>After the audit</h2>
              <p className="audit-retainer__intro">
                The report is yours to act on however you like. If you&apos;d
                rather not do the work yourself, I can take it on with a
                monthly retainer.
              </p>
            </Reveal>
            <div className="audit-cards audit-cards--3">
              <Reveal {...defaultRevealProps} damping={0.1}>
                {retainer.map(({ icon: Icon, name, description }) => (
                  <div className="audit-card" key={name}>
                    <Icon aria-hidden="true" />
                    <h3 className="h6">{name}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="audit-proof">
          <div className="container">
            <div className="audit-proof__content">
              <Reveal {...defaultRevealProps}>
                <h2 className="h4">Background</h2>
              </Reveal>
              <dl className="audit-proof__grid">
                <Reveal {...defaultRevealProps}>
                  {background.map(({ stat, label }) => (
                    <div className="audit-proof__item" key={stat}>
                      <dt>{stat}</dt>
                      <dd>{label}</dd>
                    </div>
                  ))}
                </Reveal>
              </dl>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="audit-about">
          <div className="container">
            <div className="audit-split">
              <Reveal {...defaultRevealProps}>
                <h2>Most audits stop at the report.</h2>
                <div className="content-col">
                  <p>
                    I&apos;m Andy Lewis. I spent three years at Shopify Plus as a
                    Merchant Success Manager, advising a portfolio of 50+
                    merchants on acquisition, conversion and retention. Today I
                    manage delivery for Shopify retainer clients at an agency:
                    redesigns, integrations and CRO work.
                  </p>
                  <p>
                    Alongside that, I&apos;ve spent 10+ years as a web designer
                    and front-end developer. That means I can find the problem
                    and fix it myself.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="audit-faq">
          <div className="container">
            <Reveal {...defaultRevealProps}>
              <h2>FAQ</h2>
            </Reveal>
            <div className="audit-faq__list">
              {faqs.map(({ q, a }, i) => (
                <details
                  key={q}
                  name="audit-faq"
                  open={openFaq === i}
                  onToggle={(e) => {
                    if (e.currentTarget.open) setOpenFaq(i);
                    else if (openFaq === i) setOpenFaq(null);
                  }}
                >
                  <summary>
                    <h3 className="h6">{q}</h3>
                    <FaChevronDown aria-hidden="true" />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA (replaces the site-wide HireCTA on this page) */}
      <section className="hireCTA audit-cta">
        <div className="container">
          <div className="hireCTA__content">
            <h2>See where your store is losing sales.</h2>
            <BookCallButton location="footer-cta" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Audit;
