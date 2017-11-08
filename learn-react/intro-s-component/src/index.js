import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

const headingStyle = css`
  font-weight: bold;
`

const H1 = styled.h1`
  font-size: 54px;
  ${headingStyle}
`

const H2 = styled.h2`
  font-size: 36px
  ${headingStyle};
`

const H3 = styled.h3`
  font-size: 24px;
  ${headingStyle}
`

const H4 = styled.h4`
  font-size: 16px;
  ${headingStyle}
`

const H5 = styled.h5`
  font-size: 14px;
  ${headingStyle}
`

const H6 = styled.h6`
  font-size: 12px;
  ${headingStyle}
`

const Text = styled.p`
  font-size: 16px;
`

const Small = styled.small`
  font-size: 80%;
`

const WrapperContainer = () => (
  <div>
    <H1>Heading h1</H1>
    <H2>Heading h2</H2>
    <H3>Heading h3</H3>
    <H4>Heading h4</H4>
    <H5>Heading h5</H5>
    <H6>Heading h6</H6>
    <Text>Body text</Text>
    <Small>Small text</Small>
  </div>
)

ReactDOM.render(<WrapperContainer />, document.getElementById('root'));
registerServiceWorker();
