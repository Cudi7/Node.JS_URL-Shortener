import { nanoid } from 'nanoid';

function domainConfig(url) {
  const domain = ['io', 'org', 'net', 'com'];

  const randomDomain = domain[Math.floor(Math.random() * domain.length)];
  const protocol = url.split(':')[0];
  const id = nanoid(5);

  return [url, `${protocol}://${id}.${randomDomain}`, id];
}

export { domainConfig };
