<script lang="ts">
  const files = import.meta.glob('./blog/*.{md,svx}', { eager: true });
  const posts = Object.entries(files).map(([path, post]) => {
    return { ...(post as any).metadata, path: path.slice(2, -3) };
  });
  const sorted = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  let latestPost = sorted.length >= 0 ? sorted[0] : null;
</script>

<div class="h-screen grid place-items-center">
  <div>
    <h1 class="text-5xl text-blue-500">One more blog</h1>
    <p class="text-xl text-red-600 ">
      A test project made with <a href="https://kit.svelte.dev">https://kit.svelte.dev</a> and
      <a href="https://tailwindcss.com">https://tailwindcss.com</a>
    </p>
    {#if latestPost}
      <p class="py-4">
        Check out the latest blog post
        <a href={latestPost.path}>"{latestPost.title}"</a>!
      </p>
    {/if}
  </div>
  <div />
</div>
