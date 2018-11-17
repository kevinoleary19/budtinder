import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { black } from '../shared/styles/colors';

export enum Font {
    FuturaBold = 'FuturaBold',
    ProximaNovaRegular = 'ProximaNovaRegular',
    ProximaNovaBold = 'ProximaNovaBold',
}

const futura = 'futura-pt, sans-serif';
const proximaNova = 'proxima-nova, sans-serif';

const styles = StyleSheet.create({
    // fonts
    [Font.FuturaBold]: {
        fontFamily: futura,
        fontWeight: 700,
        lineHeight: 1.3,
    },
    [Font.ProximaNovaRegular]: {
        fontFamily: proximaNova,
        fontWeight: 400,
        lineHeight: 1.5,
    },
    [Font.ProximaNovaBold]: {
      fontFamily: proximaNova,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    //
    text: {
        color: black,
    },
});


interface Props {
    children: React.ReactNode;
    extraStyles?: Array<object | false>;
    font?: Font;
    onClick?: () => void;
}

const Text: React.SFC<Props> = ({
    children,
    extraStyles,
    font,
    onClick,
}: Props) => {
    /*  extraStyles will always be an object. Since we don't require extraStyles,
        ts thinks that the prop may be undefined, but we actually have a default
        prop for it.
    */
    const extraStylesCasted = extraStyles as object[];

    return (
        <div
            className={css(
                styles.text,
                font && styles[font],
                ...extraStylesCasted
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

Text.defaultProps = {
    extraStyles: [false],
    font: Font.ProximaNovaRegular,
};

export default Text;
