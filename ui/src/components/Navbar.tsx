import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { white } from '../shared/styles/colors';
import Text, { Font } from './Text';
import budbudImage from '../images/budbud.jpg';


const styles = StyleSheet.create({
    Navbar: {
        height: 44,
        width: '100%',
        backgroundColor: white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        position: 'fixed',
        top: 0,
        left: 0,
    },
    //
    logo: {
      height: 32,
      objectFit: 'contain',
    },
});

export default function Navbar() {
    return (
        <section className={css(styles.Navbar)}>
          <img src={budbudImage} className={css(styles.logo)} />
        </section>
    );
}