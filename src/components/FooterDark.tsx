import wdcLogo from '../assets/wdc-logo.jpg';

interface FooterDarkProps {
  locations?: string[];
}

const FooterDark = ({ locations = ['Lagos', 'Nairobi', 'Remote'] }: FooterDarkProps) => {
  return (
    <footer className="bg-[hsla(207,36%,95%,1)] border-t border-border py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={wdcLogo} alt="WDC Labs" className="h-16 md:h-[75px] w-auto" />
            </a>
          </div>

          {/* Locations */}
          <div className="text-sm text-muted-foreground flex items-center justify-center">
            {locations.map((loc, index) => (
              <span key={loc}>
                {loc}
                {index < locations.length - 1 && <span className="mx-2 text-teal">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;