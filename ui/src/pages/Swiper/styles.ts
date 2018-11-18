import { StyleSheet } from 'aphrodite';
import { lightGreen, white } from '../../shared/styles/colors';

export default StyleSheet.create({
  Picker: {
    width: '100vw',
    height: 'calc(100vh - 44px)',
    padding: '32px 24px',
    backgroundColor: lightGreen,
    marginTop: 44,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  card: {
    width: '100%',
    height: 360,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    height: 150,
    objectFit: 'contain',
    marginBottom: 40,
  },
  subheader: {
    fontSize: 24,
    color: white,
    width: 260,
    marginBottom: 60,
    textAlign: 'center',
  },
});