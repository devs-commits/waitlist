import { useState } from 'react';
import NavbarDark from '../components/NavBarDark';
import HeroSectionDark from '../components/HeroSectionDark';
import ArsenalSection from '../components/ArsenalSection';
import ChatSectionDark from '../components/ChatSection';
import PricingSection from '../components/PricingSection';
import CTASectionDark from '../components/CTASectionDark';
import FooterDark from '../components/FooterDark';
import WaitlistModal from '../components/WaitlistModal';
import SponsorModal from '../components/SponsorModal';
import SuccessModal from '../components/SuccessModal';
// import FreeTasteTest from '../components/FreeTasteTest';
import HallOfFailures from '../components/HallOfFailures';
// import PhysicalAnchor from '../components/PhysicalAnchor';
import FloatingWhatsApp from '../components/FloatingWhatsapp';

const HomeDark = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSponsorOpen, setIsSponsorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  const handleWaitlistSuccess = () => {
    setIsSuccessOpen(true);
  };

  const handleWaitlistClick = (planName?: string) => {
    if (planName) {
      setSelectedPlan({ name: planName, price: '' });
    }
    setIsWaitlistOpen(true);
  };

  const handleSponsorClick = (planName: string) => {
    setSelectedPlan({ name: planName, price: '' });
    setIsSponsorOpen(true);
  };

  return (
    <div className="min-h-screen light-theme bg-[hsla(220,13%,95%,1)]">
      <div className='bg-four-corner bg-no-repeat bg-cover pb-10'>
        <NavbarDark 
        onJoinWaitlistClick={() => setIsWaitlistOpen(true)}
        onChatClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <HeroSectionDark 
        onSecureSpotClick={() => setIsWaitlistOpen(true)}
        onMentorPayClick={() => setIsSponsorOpen(true)}
        />
      </div>
      <ArsenalSection  />
      {/* <FreeTasteTest /> */}
      <div id="chat">
        <ChatSectionDark onTrialsExhausted={() => setIsWaitlistOpen(true)} />
      </div>
      <HallOfFailures />
      {/* <PhysicalAnchor /> */}
      <PricingSection 
        variant="light" 
        onPayClick={handleWaitlistClick}
        onSponsorClick={handleSponsorClick}
      />
      <CTASectionDark onSecureSpotClick={() => setIsWaitlistOpen(true)} />
      <FooterDark />
      <FloatingWhatsApp />

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
        onSuccess={handleWaitlistSuccess}
        variant="light" 
      />
      <SponsorModal 
        isOpen={isSponsorOpen} 
        onClose={() => setIsSponsorOpen(false)} 
        planName={selectedPlan.name || 'The Career Accelerator'} 
        variant="light" 
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        variant="light"
      />
    </div>
  );
};

export default HomeDark;