import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import DebounceLink from 'apollo-link-debounce';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


export default new ApolloClient({
	addTypename: true,
	link: ApolloLink.from([
		onError(errorHandler),
		new DebounceLink(250),
		split(
			({query}) => {
				const {kind, operation} = getMainDefinition(query);
				return kind === 'OperationDefinition' && operation === 'subscription';
			},
			new WebSocketLink({uri: 'wss://us1.prisma.sh/jamesscottmcnamara/budtinder/dev', options: {reconnect: true}}),
			new HttpLink({uri: 'https://us1.prisma.sh/jamesscottmcnamara/budtinder/dev'})
		)
	]),
	cache: new InMemoryCache({})
});

function errorHandler({graphQLErrors, networkError}) {
	if (graphQLErrors) {
		graphQLErrors.forEach(
			({message, locations, path, operation = {operationName: 'not provided'}, response}) => {
				console.error(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, operation: ${
						operation.operationName
					}`
				);
				console.log('operation', operation);
				console.log('response', response);
			}
		);
	}
	if (networkError) console.log(`[Network error]: ${networkError}`);
}
