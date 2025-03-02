import { profiles } from './profiles';
import { useState } from 'react'
import styled from 'styled-components';

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.extra};
`;

const Position = styled.h3`
  font-size: 1.2rem;
  margin-top: 1px;
  color: ${(props) => props.theme.colors.extra};
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.extra};
`;

const ButtonBox = styled.button`
    display: flex;
    justify-content: center;
    background-color: transparent;  
    border: none;  
    gap: 20px;
    margin: 2rem 0;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
  }
`

export default function Slider() {

  const [index, setCurrentIndex] = useState(0);

  function nextPost() {
    if (index < profiles.length - 1) {
      setCurrentIndex(index + 1);
    }
  }

  function previosPost() {
    if (index > 0) {
      setCurrentIndex(index - 1);
    }
  }

  let currentProfile = profiles[index];

  return (
    <Profile>
      
      <Avatar src={currentProfile.avatar} />
      <Name>{currentProfile.name}</Name>
      <Position>{currentProfile.position}</Position>
      <Description>{currentProfile.description}</Description>

      <ButtonBox>
        <Button onClick={previosPost}>Previous post</Button>
        <Button onClick={nextPost}>Next post</Button>
      </ButtonBox>
    </Profile>
  )
}