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
      extendedBio: 'With a background in artist development and business strategy, our CEO has guided Tizzy Camp from a small startup to a respected name in the industry. Their passion for discovering new talent and innovative approach to music business has been instrumental in our success.',
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
      role: 'Head of A&R',
      icon: <FaHeadphones />,
      image: '/images/team/member1.jpg',
      extendedBio: 'With a decade of experience in talent scouting, our Head of A&R has an uncanny ability to spot emerging trends and raw talent. They work closely with artists to refine their sound and develop their unique artistic identity.',
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
      extendedBio: 'Our Marketing Director combines data-driven strategies with creative storytelling to build compelling narratives around our artists. With expertise in digital marketing and brand development, they ensure our artists reach their target audiences effectively.',
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
      role: 'Studio Manager',
      icon: <FaMusic />,
      image: '/images/team/member3.jpg',
      extendedBio: 'With certifications from top audio engineering programs and years of hands-on experience, our Studio Manager maintains our state-of-the-art facilities and works closely with artists to achieve their desired sound. Their technical expertise is matched only by their creative problem-solving skills.',
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
      role: 'Artist Relations',
      icon: <FaMicrophone />,
      image: '/images/team/member4.jpg',
      extendedBio: 'Our Artist Relations specialist serves as the primary point of contact for our artists, ensuring their needs are met and their voices are heard. With a background in artist management and a deep understanding of the creative process, they foster positive, productive relationships between artists and the label.',
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
      details: 'Every decision we make and every relationship we build is grounded in ethical practices. We believe that long-term success comes from doing what is right, not just what is profitable.'
    },
    {
      id: 2,
      title: 'Innovation',
      summary: 'We embrace creativity and forward-thinking approaches.',
      details: 'In an ever-changing industry, we stay ahead by continuously exploring new ideas, technologies, and strategies. We encourage our team and artists to push boundaries and challenge conventions.'
    },
    {
      id: 3,
      title: 'Excellence',
      summary: 'We strive for the highest quality in everything we do.',
      details: 'From artist development to final production, we maintain rigorous standards. We invest in top-tier talent, equipment, and processes to ensure our output meets the highest professional benchmarks.'
    },
    {
      id: 4,
      title: 'Community',
      summary: 'We build supportive networks for artists and staff.',
      details: 'Music thrives in community. We foster collaborative environments where artists can grow, learn from each other, and find support. Our team operates as a family, with mutual respect at the core of all interactions.'
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
            <span className="about-title-part">Tizzy Camp</span>
          </h1>
          <p className="about-hero-subtitle">Where Talent Meets Opportunity</p>
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
                Tizzy Camp Music Label was founded in 2012 with a simple vision: to create a home for talented artists 
                where they could develop their craft and share their music with the world. What started as a small 
                collective of passionate musicians has grown into a full-fledged label and recording studio.
              </p>
              <h3>Our Mission</h3>
              <p>
                We believe in the power of music to inspire, heal, and bring people together. Our mission is to 
                nurture artistic talent, produce high-quality music, and create opportunities for our artists to 
                succeed in the ever-evolving music industry.
              </p>
              <h3>God Over Everything</h3>
              <p>
                The philosophy behind G.O.E Records reflects our core values. We put faith and integrity first in 
                everything we do, creating music that uplifts and resonates with listeners on a deeper level.
              </p>
            </div>
            <div className="about-history-image about-slide-in-right">
              <img src="/images/about-image1.jpg" alt="Tizzy Camp History" />
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
              <p className="about-stat-label">Artists Signed</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={80} duration={3} suffix="+" className="about-stat-number" />
              <p className="about-stat-label">Songs Released</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={100} duration={3} suffix="M+" className="about-stat-number" />
              <p className="about-stat-label">Streams Worldwide</p>
            </div>
            <div className="about-stat-card">
              <CountUp end={10} duration={3} suffix="+" className="about-stat-number" />
              <p className="about-stat-label">Years in Business</p>
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