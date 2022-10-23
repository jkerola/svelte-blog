<script lang="ts">
  export let crumbs: { name: string; url: string }[];
  export let next: string;
  export let previous: string;
</script>

<nav class="flex justify-between p-4" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li>
      <div class="flex items-center">
        <a href="/" class="text-gray-500">home</a>
      </div>
    </li>
    {#each crumbs as crumb}
      <li><span class="text-gray-500">-></span></li>
      <li>
        <a href={crumb.url} class="text-gray-500">{crumb.name}</a>
      </li>
    {/each}
  </ol>
  <ul class="flex">
    {#if previous}
      <a href="/blog/{previous}" class="px-2 text-gray-500 grid place-content-start nav"
        >previous part</a
      >
    {/if}
    {#if next}
      <a href="/blog/{next}" class="px-2 text-gray-500 grid place-content-start nav">next part</a>
    {/if}
  </ul>
</nav>
