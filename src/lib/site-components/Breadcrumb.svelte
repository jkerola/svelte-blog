<script lang="ts">
  export let crumbs: { url: string; name: string }[];
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
</nav>
