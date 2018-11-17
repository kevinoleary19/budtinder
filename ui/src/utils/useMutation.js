import { useMutation } from 'react-apollo-hooks';

export default mutation => {
  const m = useMutation(mutation);
  return variables => m({ variables });
};
