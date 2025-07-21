import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaCrown, FaHeadphones, FaChartLine, FaMusic, FaMicrophone 
} from 'react-icons/fa';
import CountUp from 'react-countup';
import TeamMemberCard from '../../components/TeamMemberCard';
import './About.css';

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedValue, setExpandedValue] = useState(null);

  const [floatingElements] = useState(() => {
    const elements = [];
    const types = ['note', 'note', 'note', 'bubble', 'bubble'];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        animationDuration: Math.random() * 30 + 20,
        animationDelay: Math.random() * 10,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    return elements;
  });

  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const toggleValue = (id) => {
    if (expandedValue === id) {
      setExpandedValue(null);
    } else {
      setExpandedValue(id);
    }
  };

  // Sample data
  const teamMembers = [
    {
      id: 1,
      name: 'CEO Name',
      role: 'Founder & CEO',
      icon: <FaCrown />,
      image: '/images/team/ceo.jpg',
      extendedBio: 'With a background in fashion design and business strategy, our CEO has guided Culturez from a small boutique to a respected name in the industry. Their passion for urban culture and innovative approach to contemporary style has been instrumental in our success.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Team Member 1',
      role: 'Head of Design',
      icon: <FaHeadphones />,
      image: '/images/team/member1.jpg',
      extendedBio: 'With a decade of experience in fashion design, our Head of Design has an uncanny ability to spot emerging trends. They work closely with our team to refine collections and develop unique style identities.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Team Member 2',
      role: 'Marketing Director',
      icon: <FaChartLine />,
      image: '/images/team/member2.jpg',
      extendedBio: 'Our Marketing Director combines data-driven strategies with creative storytelling to build compelling narratives around our brand. With expertise in digital marketing, they ensure our collections reach fashion-forward audiences effectively.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Team Member 3',
      role: 'Retail Manager',
      icon: <FaMusic />,
      image: '/images/team/member3.jpg',
      extendedBio: 'With years of experience in high-end retail, our Retail Manager maintains our premium shopping experience. Their expertise in customer service is matched only by their deep knowledge of contemporary fashion.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Team Member 4',
      role: 'Brand Relations',
      icon: <FaMicrophone />,
      image: '/images/team/member4.jpg',
      extendedBio: 'Our Brand Relations specialist fosters partnerships with influencers and collaborators. With a background in urban fashion culture, they build bridges between our brand and the community we serve.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Integrity',
      summary: 'We conduct business with honesty and transparency.',
      details: 'Every collection we create and every relationship we build is grounded in ethical practices. We believe that long-term success comes from doing what is right, not just what is profitable.'
    },
    {
      id: 2,
      title: 'Innovation',
      summary: 'We embrace creativity and forward-thinking design.',
      details: 'In an ever-changing fashion landscape, we stay ahead by continuously exploring new ideas, materials, and silhouettes. We challenge our team to push boundaries and redefine urban style.'
    },
    {
      id: 3,
      title: 'Excellence',
      summary: 'We strive for the highest quality in everything we do.',
      details: 'From fabric selection to final stitching, we maintain rigorous standards. We invest in premium materials and craftsmanship to ensure our garments meet the highest benchmarks.'
    },
    {
      id: 4,
      title: 'Community',
      summary: 'We celebrate urban culture and its influence on fashion.',
      details: 'Style thrives in community. We collaborate with local artists and cultural influencers to create collections that authentically represent the streets that inspire us.'
    }
  ];

  return (
    <div className="about-page">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <div 
          key={element.id}
          className={`about-floating-element about-floating-${element.type}`}
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            opacity: element.opacity
          }}
        />
      ))}
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="about-title-part">About</span>
            <span className="about-title-part">Culturez</span>
          </h1>
          <p className="about-hero-subtitle">Where Urban Culture Meets Contemporary Style</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section about-history-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>Our Story</span>
          </h2>
          <div className="about-history-content">
            <div className="about-history-text about-slide-in-left">
              <h3>The Beginning</h3>
              <p>
                Culturez was founded in 2015 with a clear vision: to create a premium fashion brand that blends urban culture with contemporary style. What started as a small boutique has grown into a recognized name in fashion.
              </p>
              <h3>Our Mission</h3>
              <p>
                We believe in the power of fashion to express identity and culture. Our mission is to create high-quality garments that bridge streetwear sophistication with modern design, offering style that speaks to the urban connoisseur.
              </p>
              <h3>Culture First</h3>
              <p>
                Our philosophy reflects our core values. We put cultural authenticity first in everything we design, creating pieces that resonate with those who appreciate both urban roots and contemporary refinement.
              </p>
            </div>
            <div className="about-history-image about-slide-in-right">
              <img src="/images/about-image1.jpg" alt="Culturez History" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section about-stats-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>By The Numbers</span>
          </h2>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <CountUp end={7} duration={3} suffix="+" className="about-stat-number" />
              <p className="about-stat-label">Collections Launched</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={20} duration={3} suffix="+" className="about-stat-number" />
              <p className="about-stat-label">Celebrities Styles</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={100} duration={3} suffix="K+" className="about-stat-number" />
              <p className="about-stat-label">Happy Customers</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={8} duration={3} suffix="+" className="about-stat-number" />
              <p className="about-stat-label">Years in Fashion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-values-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>Our Values</span>
          </h2>
          <div className="about-values-grid">
            {values.map((value) => (
              <div 
                key={value.id}
                className={`about-value-card ${expandedValue === value.id ? 'about-expanded' : ''}`}
                onClick={() => toggleValue(value.id)}
              >
                <h3>{value.title}</h3>
                <p className="about-value-summary">{value.summary}</p>
                {expandedValue === value.id && (
                  <div className="about-value-details">
                    <p>{value.details}</p>
                  </div>
                )}
                <div className="about-value-indicator">
                  {expandedValue === value.id ? '−' : '+'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-team-section">
        <div className="about-container">
          <h2 className="about-section-title">
            <span>Meet The Team</span>
          </h2>
          
          {/* CEO Card */}
          <div className="about-ceo-card-container">
            {teamMembers.slice(0, 1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={true}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
          
          {/* Team Members */}
          <div className="about-team-members-slider">
            {teamMembers.slice(1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={false}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;