<script>
  import Breadcrumb from '$lib/site-components/Breadcrumb.svelte';
  import Contact from './contact.md';

  const crumbs = [{ name: 'contact', url: '/contact' }];
</script>

<div class="mx-auto container">
  <Breadcrumb {crumbs} />
  <article class="mx-auto p-4 max-w-prose prose lg:prose-xl">
    <Contact />
  </article>
  <div />
  <div class="p-10" />
</div>
