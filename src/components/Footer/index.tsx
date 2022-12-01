import React from 'react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>
        By
        {' '}
        <a href="https://github.com/zzaahida/">Zahida Yermagambet</a>
        .
        {' '}
        <br />
        All information was taken from
        {' '}
        <a href="https://swapi.dev/">API</a>
        .
      </p>
    </Container>
  );
}
