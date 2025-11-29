import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ob2ioat8', //process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);