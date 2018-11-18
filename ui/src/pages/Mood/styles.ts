import { StyleSheet } from 'aphrodite';
import { white, lightGreen } from '../../shared/styles/colors';

export default StyleSheet.create({
  Mood: {
    backgroundColor: lightGreen,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'calc(100vh - 44px)',
    padding: '30% 0',
  },
  //
  card: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    width: '80%',
  },
  image: {
    height: 36,
    objectFit: 'contain',
    marginBottom: 16,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 60,
    color: white,
    fontSize: 24,
    textAlign: 'center',
  },
});