<script lang="ts">
  import PostList from '$lib/blog-components/PostList.svelte';
  import Breadcrumb from '$lib/site-components/Breadcrumb.svelte';

  export let posts: [Post];

  const crumbs = [{ name: 'blog', url: '/blog' }];
</script>

<div class="container mx-auto">
  <Breadcrumb {crumbs} />
  <PostList {posts} />
</div>
