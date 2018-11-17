export function serializeData(data) {
  return Object.values(data.data.all).map((product) => ({
    name: product.name,
    type: product.category,
    description: product.description,
    species: product.species,
    cbd: product.tests.cbd,
    thc: product.tests.thc,
    photo: product.photos ? product.photos[0] : '',
  }));
}