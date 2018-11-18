import { StyleSheet } from 'aphrodite';
import { lightGreen, white, orange, darkGreen } from '../../shared/styles/colors';

export default StyleSheet.create({
  ChooseProductPage: {
    backgroundColor: lightGreen,
  },
  //
  bottomSection: {
    padding: '32px 24px',
    marginTop: 102,
  },
  button: {
    borderRadius: 8,
    backgroundColor: orange,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 160,
  },
  buttonText: {
    fontSize: 16,
    color: white,
  },
  directionText: {
    color: white,
    textAlign: 'center',
  },
  topSection:  {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: darkGreen,
    height: 102,
    padding: '32px 24px',
    position: 'fixed',
    top: 44,
    left: 0,
  },
  subheader: {
    fontSize: 20,
    marginBottom: 12,
    color: white,
  },
  productWrapper: {
    marginBottom:  32,
  },
});