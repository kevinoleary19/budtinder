import { StyleSheet } from 'aphrodite';
import { lightGreen, white } from '../../shared/styles/colors';

export default StyleSheet.create({
  ChatPage: {
    paddingTop: 44,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  chatSection: {
    backgroundColor: white,
    width: '100%',
    height: '-webkit-fill-available',
  },
  input: {
    height: 46,
    borderRadius: 36,
    padding: '0 12px',
    width: '100%',
    border: 'none',
  },
  inputContainer: {
    height: 85,
    width: '100%',
    backgroundColor: lightGreen,
    position: 'relative',
    padding: '0 16px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  sendIcon: {
    width: 16,
    right: 32,
    objectFit: 'contain',
    position: 'absolute',
  },
  topSection: {
    backgroundColor: lightGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 100,
    width: '100%',
  },
  foundBudText: {
    color: white,
    fontSize: 22,
  },
});