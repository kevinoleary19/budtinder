import { StyleSheet } from 'aphrodite';
import { lightGreen, white } from '../../shared/styles/colors';

export default StyleSheet.create({
  ChatPage: {

  },
  chatSection: {
    backgroundColor: white,
  },
  input: {
    height: 46,
    borderRadius: 36,
    padding: '0 12px',
    width: '100%',

  },
  inputContainer: {
    height: 85,
    width: '100%',
    backgroundColor: lightGreen,
    position: 'relative',
    padding: '0 16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 16,
    objectFit: 'contain',
    position: 'absolute',
  },
});