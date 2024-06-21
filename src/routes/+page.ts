import { preferences } from '$lib/stores/preferences';
import type { PageLoad } from './$types';

type Trending = {
  url: string,
  type: string,
  title: string,
  thumbnail: string,
  uploaderName: string,
  uploaderUrl: string,
  uploaderAvatar: string,
  uploadedDate: string,
  shortDescription: string,
  duration: number,
  views: number,
  uploaded: number,
  uploaderVerified: boolean,
  isShort: boolean
}

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(
    `${preferences.value.instance}/trending?region=${preferences.value.region}`
	);
	const trending: Trending[] = await res.json();

  return { trending };
};
