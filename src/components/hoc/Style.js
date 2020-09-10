import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), -23px 0 40px -23px rgba(0, 0, 0, 0.8),
    23px 0 40px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const InputContainer = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 220px;
`;

export const SubmitButtonContainer = styled.div`
  margin: 10px auto 10px;
  text-align: center;
  width: 220px;
  padding-bottom: 25px;
`;

export const RequiredStar = styled.span`
  color: red;
`;

export const Title = styled.span`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
