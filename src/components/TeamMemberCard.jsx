import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './TeamMemberCard.css';

const TeamMemberCard = ({ member, isExpanded, isCeo, toggleCard }) => {
  return (
    <div 
      className={`about-team-member-card ${isCeo ? 'about-ceo' : ''} ${isExpanded ? 'about-expanded' : ''}`}
      onClick={toggleCard}
    >
      <div className="about-team-member-image-container">
        <div className="about-team-member-image">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="about-team-member-icon">
          {member.icon}
        </div>
      </div>
      <div className="about-team-member-info">
        <h3>{member.name}</h3>
        <p className="about-team-member-role">{member.role}</p>
        <p className="about-team-member-bio">{member.bio}</p>
        
        {isExpanded && (
          <div className="about-team-member-details">
            <p className="about-team-member-extended-bio">{member.extendedBio}</p>
            <div className="about-team-member-social">
              {member.social.facebook && (
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
              {member.social.instagram && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;