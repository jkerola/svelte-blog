<script lang="ts">
  import Footer from '$lib/site-components/Footer.svelte';
  import Navbar from '$lib/site-components/Navbar.svelte';

  import '../app.css';
</script>

<div class="bg-slate-50 min-h-screen">
  <Navbar />
  <div class="p-4">
    <slot />
  </div>
  <Footer />
</div>
