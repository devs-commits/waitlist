interface ReviewCardProps {
  name: string;
  location: string;
  content: string;
  avatar?: string;
  variant?: 'dark' | 'light' | 'v3';
}

const ReviewCard = ({ name, location, content, avatar, variant = 'dark' }: ReviewCardProps) => {
  // V3 design - dark navy cards with coral left border
  if (variant === 'v3') {
    return (
      <div className="bg-[#1a2744] rounded-xl p-4 border-l-4 border-[#ff6b35]">
        <div className="flex items-center gap-3 mb-3">
          {avatar ? (
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#ff6b35]/20 flex items-center justify-center">
              <span className="text-[#ff6b35] font-semibold">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <p className="font-semibold text-[#ff6b35] text-sm">{name}</p>
          </div>
        </div>
        <p className="text-sm text-white/90 italic leading-relaxed">
          "{content}"
        </p>
      </div>
    );
  }

  const cardClass = variant === 'dark' 
    ? 'review-card' 
    : 'bg-card border border-border rounded-xl p-4 shadow-sm';

  return (
    <div className={`${cardClass} mb-4`}>
      <div className="flex items-center gap-3 mb-3">
        {avatar ? (
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
            <span className="text-teal font-semibold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      <p className="text-sm text-foreground/90 italic leading-relaxed">
        "{content}"
      </p>
    </div>
  );
};

export default ReviewCard;