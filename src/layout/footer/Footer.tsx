import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_styles';
import React from 'react';

const socialItemData = [
  {
    iconId: 'instagram',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'vk',
  },
  {
    iconId: 'in',
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Svetlana</S.Name>
        <S.SocialnList>

          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem>
                <S.SocialLink>
                  <Icon
                    key={index}
                    height={'21px'}
                    width={'21px'}
                    viewBox={'0 0 21px 21px'}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
          
        </S.SocialnList>
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
