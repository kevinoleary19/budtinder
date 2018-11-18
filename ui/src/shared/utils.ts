import { DocumentNode } from 'graphql';
import { useMutation as _useMutation, useQuery as _useQuery } from 'react-apollo-hooks';
import { map } from 'shades';

// prettier-ignore
export const nullToUndefined = (v: any): any => {
	if (v === null || v === undefined) {
		return undefined;
	}

	if (Array.isArray(v)) {
		return map(nullToUndefined)(v);
	}

	if (typeof v === 'object') {
		return map(nullToUndefined)(v);
	}

	// @ts-ignore
	return v;
};

export const useMutation = (mutation: DocumentNode): ((v: any) => void) => {
  const m = _useMutation(mutation);
  return (variables: any) => m({ variables });
};
export const useQuery = (query: DocumentNode, args?: any) => {
  const out: any = _useQuery(query, args);
  return nullToUndefined(out);
};

export function serializeData(data: any) {
  return Object.values(data.data.all).map((product: any) => ({
    name: product.name,
    type: product.category,
    description: product.description,
    species: product.species,
    cbd: product.tests.cbd,
    thc: product.tests.thc,
    photo: product.photos ? product.photos[0] : ''
  }));
}
