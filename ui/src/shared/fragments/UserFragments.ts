import gql from 'graphql-tag';

export default {
  all: gql`
    fragment AllUser on User {
      id
      fbid
      name
      kind
      img
    }
  `
};
