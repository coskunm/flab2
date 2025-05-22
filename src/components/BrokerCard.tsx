import React from 'react';
import { Check, ChevronRight, Shield, BarChart2, TrendingUp, Languages, DollarSign, Umbrella } from 'lucide-react';
import { BrokerProvider } from '../data/brokerData';
import './BrokerCard.css';

interface BrokerCardProps {
  broker: BrokerProvider;
  position: number;
  isTopRated: boolean;
}

const BrokerCard: React.FC<BrokerCardProps> = ({ broker, position, isTopRated }) => {
  const RatingCircle = ({ rating }: { rating: number }) => {
    return (
      <div className="broker-rating-circle" style={{ '--rating': rating / 10 } as React.CSSProperties}>
        <div className="broker-rating-value">{rating.toFixed(1)}</div>
      </div>
    );
  };

  const RatingBar = ({ label, score }: { label: string; score: number }) => {
    // Calculate percentage for the progress bar
    const percentage = (score / 10) * 100;
    
    return (
      <div className="broker-rating-group">
        <div className="broker-rating-label">
          <p>{label}</p>
          <span className="broker-rating-score">{score}</span>
        </div>
        <div className="broker-rating-bar-container">
          <div 
            className="broker-rating-bar" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const BrokerDetails = () => {
    return (
      <div className="broker-details">
        <div className="broker-detail">
          <div className="detail-icon">
            <Shield size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.regulator}</span>
            <span className="detail-label">Regülatör</span>
          </div>
        </div>
        <div className="broker-detail">
          <div className="detail-icon">
            <BarChart2 size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.spread}</span>
            <span className="detail-label">Spread</span>
          </div>
        </div>
        <div className="broker-detail">
          <div className="detail-icon">
            <TrendingUp size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.leverage}</span>
            <span className="detail-label">Kaldıraç</span>
          </div>
        </div>
        <div className="broker-detail">
          <div className="detail-icon">
            <Languages size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.turkishSupport}</span>
            <span className="detail-label">Türkçe Destek</span>
          </div>
        </div>
        <div className="broker-detail">
          <div className="detail-icon">
            <DollarSign size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.minDeposit}</span>
            <span className="detail-label">Alt Limit</span>
          </div>
        </div>
        <div className="broker-detail">
          <div className="detail-icon">
            <Umbrella size={24} />
          </div>
          <div className="detail-content">
            <span className="detail-value">{broker.negativeBal}</span>
            <span className="detail-label">Negatif Bakiye Koruması</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`broker-card ${isTopRated ? 'top-rated' : ''}`}>
      <div className="position-badge">{position}</div>

      <div className="broker-card-content">
        <div className="broker-card-left">
          <img src={broker.logo} alt={`${broker.name} logo`} className="broker-logo" />
          
          <p className="broker-description">{broker.description}</p>
        </div>

        <div className="broker-card-middle">
          <BrokerDetails />
          
          <div className="broker-pros-cons">
            <div className="broker-pros">
              <ul className="broker-pros-list">
                {broker.pros.map((pro, index) => (
                  <li key={index}>
                    <Check size={16} color="#1976d2" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="broker-card-right">
          <div className="broker-rating-header">
            <RatingCircle rating={broker.rating} />
            <p className="broker-user-ratings">{broker.userRatings.toLocaleString()} kullanıcı oyladı</p>
          </div>
          
          <div className="broker-rating-details">
            <RatingBar label="Hızlı Para Çekimi" score={broker.ratings.fastWithdrawal} />
            <RatingBar label="Lisanslı Firma" score={broker.ratings.licensed} />
            <RatingBar label="Destek" score={broker.ratings.support} />
            <RatingBar label="Düşük Spread" score={broker.ratings.lowSpread} />
            <RatingBar label="Güvenilir Firma" score={broker.ratings.reliable} />
          </div>
        </div>

        <div className="broker-card-cta">
          <a href={`https://${broker.website}`} target="_blank" rel="noopener noreferrer" className="broker-visit-btn">
            HESAP AÇ
            <ChevronRight size={18} />
          </a>
          
          {broker.specialOffer && (
            <div className="broker-social-proof">
              <p className="broker-bonus-title">
                <strong>{broker.specialOffer.text}</strong>
              </p>
              {broker.specialOffer.bonusDescription && (
                <p className="broker-bonus-description">
                  {broker.specialOffer.bonusDescription}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;