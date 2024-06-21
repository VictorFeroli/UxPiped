<script lang="ts">
  import { BadgeCheck } from '$lib/icons';
	import { preferences } from '$lib/stores/preferences';
	import type { PageData } from "./$types";

  export let data: PageData;

  let instance: string;
</script>

<input onkeydown={(e) => {
  if (e.key === 'Enter') {
    preferences.value.region = "BR"
  }
}} type="text" bind:value={instance} />

<div class="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-x-4 gap-y-8 container mx-auto">
  {#each data.trending as video}
    <div class="">
      <a href={video.url} class="contents">
        <img src={video.thumbnail} alt={video.title} loading="lazy" class="aspect-video w-full rounded-lg" />
      </a>
      <div class="flex mt-2.5 gap-2.5">
        <a href={video.uploaderUrl} class="contents">
          <img src={video.uploaderAvatar} alt={video.uploaderName} class="aspect-square size-9 rounded-full">
        </a>
        <div class="space-y-1">
          <h3 class="line-clamp-2 text-sm font-medium">
            <a href={video.url}>
              {video.title}
            </a>
          </h3>
          <div>
            <a href={video.uploaderUrl} class="flex items-center gap-1 text-sm text-neutral-800">
              {video.uploaderName}
              {#if video.uploaderVerified}
                <BadgeCheck size="16" fill="currentColor" color="#fff" />
              {/if}
            </a>
            <div class="flex space-x-1.5 text-xs text-neutral-700">
              <p>{video.uploadedDate}</p>
              <span>•</span>
              <p>
                {(() => {
                  return video.views.toLocaleString('en-US', {
                    notation: 'compact',
                  })
                })()}
                views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
