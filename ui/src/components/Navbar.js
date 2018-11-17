import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { white } from '../shared/styles/colors';
import Text, { Font } from './Text';

const styles = StyleSheet.create({
    Navbar: {
        height: 44,
        width: '100%',
        backgroundColor: white,
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        position: 'fixed',
        top: 0,
        left: 0,
    },
    //
});

export default function Navbar() {
    return (
        <section className={css(styles.Navbar)}>
            <Text font={Font.MuliBold}>
                Bud Bud
            </Text>
        </section>
    );
}