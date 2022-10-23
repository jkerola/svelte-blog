<script lang="ts">
  import profile from '../../blog.config';
  let burgerIsHidden = true;
  const siteName = profile.sitename;
  const links = [
    { name: 'blog', url: '/blog' },
    { name: 'resume', url: '/resume' },
    { name: 'contact', url: '/contact' },
  ];
</script>

<div class="max-w-6xl mx-auto px-4">
  <div class="flex justify-between">
    <a href="/" class="py-4 px-2">{siteName}</a>
    <div class="hidden md:flex items-center space-x-10">
      {#each links as link}
        <ul>
          <li>
            <a class="py-4 px-2" href={link.url}>{link.name}</a>
          </li>
        </ul>
      {/each}
    </div>
    <div class="md:hidden flex items center">
      <button
        class="outline-none mobile-menu-button"
        on:click={() => (burgerIsHidden = !burgerIsHidden)}
      >
        <svg
          class="w-6 h-6 text-black-500"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
  <div class:hidden={burgerIsHidden} class="mobile-menu border-t-2 border-gray-300">
    <ul>
      {#each links as link}
        <li>
          <a class="block py-4 px-2 text-sm  border-b-2 border-gray-300 " href={link.url}
            >{link.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>
