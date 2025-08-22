import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <HeaderSection>
        <Title>About Brave Space</Title>
        <Subtitle>Creating Safe Havens for Healing and Empowerment</Subtitle>
      </HeaderSection>

      <ContentSection>
        <ContentGrid>
          <TextSection>
            <SectionTitle>Our Mission</SectionTitle>
            <Paragraph>
              Brave Space is dedicated to providing immediate, compassionate support 
              for survivors of gender-based violence. We believe in creating environments 
              where silence is broken, safety is prioritized, and healing can begin.
            </Paragraph>

            <SectionTitle>What We Offer</SectionTitle>
            <ServiceList>
              <ServiceItem>
                <CrisisIcon />
                <ServiceText>24/7 Crisis Support</ServiceText>
              </ServiceItem>
              <ServiceItem>
                <CounselingIcon />
                <ServiceText>Professional Counseling</ServiceText>
              </ServiceItem>
              <ServiceItem>
                <LegalIcon />
                <ServiceText>Legal Guidance</ServiceText>
              </ServiceItem>
              <ServiceItem>
                <CommunityIcon />
                <ServiceText>Support Communities</ServiceText>
              </ServiceItem>
            </ServiceList>
          </TextSection>

          <StatsSection>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Survivors Supported</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Availability</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Satisfaction Rate</StatLabel>
            </StatCard>
          </StatsSection>
        </ContentGrid>

        <TeamSection>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <PsychologistIcon />
              <MemberName>Dr. Sarah Chen</MemberName>
              <MemberRole>Clinical Psychologist</MemberRole>
            </TeamMember>
            <TeamMember>
              <LegalIcon />
              <MemberName>Michael Rodriguez</MemberName>
              <MemberRole>Legal Advocate</MemberRole>
            </TeamMember>
            <TeamMember>
              <CounselorIcon />
              <MemberName>Emily Johnson</MemberName>
              <MemberRole>Crisis Counselor</MemberRole>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
      </ContentSection>
    </AboutContainer>
  );
};

// Icon Components
const CrisisIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const CounselingIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const LegalIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const CommunityIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const PsychologistIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const CounselorIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.ivory};
`;

const HeaderSection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.lilac} 0%, ${props => props.theme.colors.pink} 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  opacity: 0.9;
`;

const ContentSection = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextSection = styled.div``;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.pink};
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ServiceText = styled.span`
  color: #555;
  font-weight: 500;
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.lilac};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
`;

const TeamSection = styled.div`
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const MemberName = styled.h4`
  color: ${props => props.theme.colors.pink};
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const MemberRole = styled.p`
  color: #666;
`;

export default About;