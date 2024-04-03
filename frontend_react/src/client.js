import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ob2ioat8', //process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: true,
  token: 'skUiR1PIxzQO1UuXXR5eXdZloVhbPKHU0qE03rMqPx6ceJz30XW0uO1EbKLlbOeA4i6neY378oTxkPhaWxP0oWovkoYd4stcYdusV4qdyOEQpk7HH7ekL4XRAObSnGSljqardjzLLUb0AdrvHEUE8pEmwpC3D1RtAbT3Dem0U2kM3nNJ4I9r', //process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);