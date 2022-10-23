<script>
  import Breadcrumb from '$lib/site-components/Breadcrumb.svelte';

  import Resume from './resume.md';
  const crumbs = [{ url: '/resume', name: 'resume' }];
</script>

<div class="mx-auto container">
  <Breadcrumb {crumbs} />
  <article class="mx-auto p-4 max-w-prose prose lg:prose-xl">
    <Resume />
  </article>
  <div class="p-10" />
</div>
