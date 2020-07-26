const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = window.location.port ? `:${window.location.port}` : "";

export const ENDPOINT = `${protocol}//${hostname}${port}/api/`;
