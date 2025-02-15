import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Button } from "../../components/Button";

export const Contact = () => {
    return (
      <StyledContacts>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
            <Field placeholder="name"/>
            <Field placeholder="subject"/>
            <Field as={'textarea'} placeholder="Message"/>
            <Button type={'submit'}>Send messege</Button>
        </StyledForm>
      </StyledContacts>
    );
  };
  

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #f8c983;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
    
`
