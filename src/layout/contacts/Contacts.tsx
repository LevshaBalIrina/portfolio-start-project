import { SectionTitle } from '../../components/SectionTitle';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { S } from './Contacts_Styles';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder="name" />
          <S.Field placeholder="subject" />
          <S.Field as={'textarea'} placeholder="Message" />
          <Button type={'submit'}>Send messege</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
