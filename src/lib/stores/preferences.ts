import { LocalStore } from "$lib/utils/local-store.svelte";

export const preferences = new LocalStore('preferences', {
  instance: 'https://r4fo.com',
  region: 'US'
})
