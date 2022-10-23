<script>
  import profile from '../../blog.config.js';
  const links = [
    { name: 'github', url: profile.github },
    { name: 'gitlab', url: profile.gitlab },
    { name: 'linkedin', url: profile.linkedIn },
    { name: 'contact', url: '/contact' },
  ];
</script>

<footer
  class="md:fixed bottom-0 left-0 right-0 p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6"
>
  <span class="text-sm text-gray-500 sm:text-center">© 2022 jkerola </span>
  <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
    {#each links as link}
      <li>
        <a href={link.url} class="mr-4 hover:underline md:mr-6">{link.name}</a>
      </li>
    {/each}
  </ul>
</footer>
