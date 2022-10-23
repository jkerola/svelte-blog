<script lang="ts">
  export let date: string;
  const converted = new Date(date).toLocaleDateString();
</script>

<p class="text-gray-700">{converted}</p>
