import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Svetlana</Name>
        <SocialnList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'17px'}
                width={'17px'}
                viewBox={'0 0 17px 17px'}
                iconId={'instagram'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'14.9px'}
                width={'16.8px'}
                viewBox={'0 0 16.8px 14.9px'}
                iconId={'telegram'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'10.6px'}
                width={'16.8px'}
                viewBox={'0 0 16.8px 10.6px'}
                iconId={'vk'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'15.42px'}
                width={'16.8px'}
                viewBox={'0 0 16.8px 15.42px'}
                iconId={'in'}
              />
            </SocialLink>
          </SocialItem>
        </SocialnList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0 40px;
`;

const Name = styled.span`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  /* font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px; */
  letter-spacing: 0.14em;
`;

const SocialnList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
