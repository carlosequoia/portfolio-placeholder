import './App.css';
import LetterGlitch from './components/LetterGlitch';
import GradientText from './components/gradienttext';
import MagicBento from './components/magicbento';
import StarBorder from './components/starborder';
import coolkid from './assets/coolkid.png';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const handleGitHubClick = () => {
    window.open('https://github.com/carlosequoia/portfolio-placeholder', '_blank')
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#000000'
    }}>
      {/* Glitch Background - Darkened with overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        zIndex: 1
      }} />
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      
      {/* MagicBento Grid - CENTER SCREEN */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        width: '90%',
        maxWidth: '1200px'
      }}>
        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={12}
          glowColor="173, 216, 230"
        />
      </div>

      {/* GradientText with StarBorder - MOVED LOWER */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 2,
        width: '100%'
      }}>
        <div onClick={handleGitHubClick} style={{ cursor: 'pointer', display: 'inline-block' }}>
          <StarBorder
            as="div"
            color="#ff9955"
            speed="3s"
            thickness={2}
            style={{ display: 'inline-block' }}
          >
            <GradientText
              colors={["#ff9955", "#ffee77", "#aadd55", "#55dddd", "#5555ff", "#ff55ff"]}
              animationSpeed={3}
              showBorder={false}
              style={{
                fontFamily: "'Poppins', 'Montserrat', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                margin: 0,
                padding: 0
              }}
            >
              Check out the code on my GitHub!
            </GradientText>
          </StarBorder>
        </div>
      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
