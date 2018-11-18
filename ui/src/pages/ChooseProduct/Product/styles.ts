import { StyleSheet } from 'aphrodite';
import { white, darkGreen, orange, brightGreen } from '../../../shared/styles/colors';

export default StyleSheet.create({
  Product: {
    width: '100%',
    backgroundColor: white,
    borderRadius: 8,
    padding: '32px 24px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    minHeight: 378,
  },
  ProductChosen: {
    border: `2px solid ${orange}`,
  },
  //
  image: {
    height: 150,
    width: 'auto',
    objectFit: 'contain',
    marginBottom: 16,
  },
  imageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  matchText: {
    fontSize: 16,
    marginBottom: 8,
    color: brightGreen,
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
  },
});