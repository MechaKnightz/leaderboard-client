import React, { Fragment } from 'react';
import styled from '@emotion/styled';

export default function PageContainer(props: any) {
  return (
    <Fragment>
    </Fragment>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Bar = styled('div')({
  flexShrink: 0,
  height: 12,
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto'
});
