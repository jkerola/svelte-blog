<script lang="ts">
  export let posts: [Post];
  const getBlogPostName = (post: { title: string; date: string }) => {
    const date = new Date(post.date).toLocaleDateString();
    return post.title.padEnd(50, '.') + date;
  };
</script>

<div class="grid place-items-center">
  <h1 class="underline underline-offset-auto py-4">Archive</h1>
  {#if posts.length > 0}
    <ul>
      {#each posts as post}
        <li>
          <a href="/blog/{post.path}" sveltekit:prefetch>
            {getBlogPostName(post)}
          </a>
          <br />
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts available.</p>
  {/if}
</div>
