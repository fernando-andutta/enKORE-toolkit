<script>
  export let data;
  $: ({ SinASEntries } = data);
</script>

{$SinASEntries.data}
<pre>
  {JSON.stringify($SinASEntries.data, null, 2)}
</pre>
