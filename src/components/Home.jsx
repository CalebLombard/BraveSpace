import styled from "styled-components";

const Home = () => {
  const handleHelpClick = () => {
    alert("Connecting you to immediate support resources...");
  };

  return (
    <HomeContainer>
      <HeroSection>
      <Logo>
          <img 
    src="/Image/navbar.png" 
    alt="Brave Space Logo" 
    style={{ width: "340px", height: "auto" }} 
  />
      </Logo>
        <Slogan>Where Safety Begins & Silence Ends</Slogan>
        <MissionText>
          A secure platform providing immediate support, resources, and community 
          for survivors of gender-based violence.
        </MissionText>
        <NeedHelpButton onClick={handleHelpClick}>
          I Need Help
        </NeedHelpButton>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>How We Support You</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <LockIcon />
            <FeatureTitle>Secure Access</FeatureTitle>
            <FeatureDescription>
              Private, encrypted platform ensuring your safety and confidentiality.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <SupportIcon />
            <FeatureTitle>Professional Support</FeatureTitle>
            <FeatureDescription>
              Connect with trained counselors and support specialists.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <ResourcesIcon />
            <FeatureTitle>Resources</FeatureTitle>
            <FeatureDescription>
              Access educational materials and recovery resources.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <CommunityIcon />
            <FeatureTitle>Community</FeatureTitle>
            <FeatureDescription>
              Join a supportive community of survivors and allies.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

// Icon Components
const LockIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10v8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const SupportIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.553-12.018a1 1 0 0 0-1.027.043l-3 2a1 1 0 0 0 1.109 1.664L12 9.465V16a1 1 0 1 0 2 0V8a1 1 0 0 0-.447-.832z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const ResourcesIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 6h-8l-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 18V6h7.172l2 2H20v10H4z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const CommunityIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 3c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.ivory} 0%, #f8f8f8 100%);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.lilac};
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -1px;
`;

const Slogan = styled.p`
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  color: #777;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const NeedHelpButton = styled.button`
  background: ${props => props.theme.colors.pink};
  color: white;
  border: none;
  padding: 1.5rem 4rem;
  font-size: 1.4rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(209, 118, 143, 0.3);
  
  &:hover {
    background: ${props => props.theme.colors.lilac};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(200, 162, 200, 0.4);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.lilac};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.ivory};
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.pink};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export default Home;