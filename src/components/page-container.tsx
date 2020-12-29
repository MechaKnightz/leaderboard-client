import React, { Fragment } from 'react';
import styled from '@emotion/styled';

export default function PageContainer(props: any) {
  return (
    <Container>{props.children}</Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '60%',
  margin: '0 auto',
  padding: '2em',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
});
