import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ContactContainer>
      <HeaderSection>
        <Title>Contact Us</Title>
        <Subtitle>Reach Out for Support and Assistance</Subtitle>
      </HeaderSection>

      <ContentSection>
        <ContactGrid>
          <FormSection>
            <FormTitle>Send us a Message</FormTitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@bravespace.com"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 21 123 1234"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can we help you today?"
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </FormSection>

          <InfoSection>
            <InfoTitle>Get in Touch</InfoTitle>
            <InfoItem>
              <EmailIcon />
              <InfoText>
                <strong>Email</strong><br />
                support@bravespace.org
              </InfoText>
            </InfoItem>

            <InfoItem>
              <PhoneIcon />
              <InfoText>
                <strong>24/7 Crisis Line</strong><br />
                0800 272 8369
              </InfoText>
            </InfoItem>

            <InfoItem>
              <ClockIcon />
              <InfoText>
                <strong>Response Time</strong><br />
                Within 24 hours
              </InfoText>
            </InfoItem>

            <EmergencySection>
              <EmergencyTitle>🚨 Immediate Help</EmergencyTitle>
              <EmergencyText>
                If you're in immediate danger, please call:<br />
                <EmergencyNumber>911</EmergencyNumber>
              </EmergencyText>
            </EmergencySection>
          </InfoSection>
        </ContactGrid>
      </ContentSection>
    </ContactContainer>
  );
};

// Icon Components
const EmailIcon = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const PhoneIcon = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const ClockIcon = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${props => props.theme.colors.lilac};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3Cpath d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'/%3E%3C/svg%3E") center/contain no-repeat;
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.ivory};
`;

const HeaderSection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.pink} 0%, ${props => props.theme.colors.lilac} 100%);
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const FormTitle = styled.h2`
  color: ${props => props.theme.colors.lilac};
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #555;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.lilac};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.lilac};
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.pink};
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.lilac};
    transform: translateY(-2px);
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoTitle = styled.h3`
  color: ${props => props.theme.colors.pink};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;

const InfoText = styled.div`
  color: #555;
  line-height: 1.5;
`;

const EmergencySection = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  margin-top: 2rem;
`;

const EmergencyTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const EmergencyText = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const EmergencyNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  display: block;
  margin-top: 0.5rem;
`;

export default Contact;