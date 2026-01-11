import wdcLogo from '../assets/wdc-logo.jpg';
interface FooterDarkProps {
  locations?: string[];
}

const FooterDark = ({ locations = ['Lagos', 'Nairobi', 'Remote'] }: FooterDarkProps) => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-teal">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-lg text-foreground">
              WDC<span className="font-normal text-muted-foreground">Labs</span>
            </span>
          </a> */}
          <div className="max-w-7xl justify-left md:ml-20 sm:ml-5">
              <a href="/" className="flex items-left">
                <img src={wdcLogo} alt="WDC Labs" className="h-[50px] w-[120px] sm:h-[55px] sm:w-[200px]" />
              </a>
          </div>

          {/* Locations */}
          <p className="text-sm text-muted-foreground mr-20 sm:justify-center align-center flex">
            {locations.map((loc, index) => (
              <span key={loc}>
                {loc}
                {index < locations.length - 1 && <span className="mx-2 text-teal">•</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;