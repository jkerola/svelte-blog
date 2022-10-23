<script lang="ts">
  import BlogBreadcrumb from '$lib/blog-components/BlogBreadcrumb.svelte';
  import BlogDate from '$lib/blog-components/BlogDate.svelte';
  // These have to be typed like this, due to mdsvex not supporting typescript properly
  export let title = '';
  export let date = '';
  export let path = '';
  export let next = '';
  export let previous = '';

  const crumbs = [
    { name: 'blog', url: '/blog' },
    { name: title, url: path },
  ];
</script>

<div class="container mx-auto">
  <BlogBreadcrumb {crumbs} {previous} {next} />
  <article class="mx-auto p-4 max-w-prose prose lg:prose-xl">
    <h1 class="">{title}</h1>
    <BlogDate {date} />
    <slot />
  </article>
  <div />
  <div class="p-10" />
</div>
