<script lang="ts">
	import { city } from '$lib/store';
	import { cities } from '@thani-sh/prayer-time-se';
</script>

<select bind:value={$city} class="citypicker">
	{#each cities.sort() as cityName}
		<option value={cityName}>{cityName}</option>
	{/each}
</select>

<style>
	.citypicker {
		padding: 10px 15px;
		background: none;
		border: none;
		outline: none;
		color: #888;
		box-sizing: border-box;
		color-scheme: dark;
	}

	.citypicker:focus {
		border: none;
		outline: none;
	}
</style>
