<script>
	import { enhance } from '$app/forms';

	export let data;
	const priorities = [
		{
			value: 1,
			title: 'Low'
		},
		{
			value: 2,
			title: 'Mid'
		},
		{
			value: 3,
			title: 'High'
		}
	];
</script>

<main class="container mx-auto pt-20">
	<form method="POST" action="/" use:enhance>
		<div class="flex flex-col gap-8 text-2xl w-1/2 mx-auto">
			<div class="flex flex-col gap-2">
				<label for="title" class="w-14">Title</label>
				<input type="text" name="title" class="text-lg rounded-md text-gray-800" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="description" class="w-14">Description</label>
				<textarea name="description" class="text-lg rounded-md text-gray-800" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="priority" class="w-14">Priority</label>
				<select name="priority" class="text-gray-800">
					{#each priorities as item}
						<option value={item.value}>{item.title}</option>
					{/each}
				</select>
			</div>

			<div class="self-end">
				<button type="submit" class="rounded-md p-4 text-center bg-green-600">Submit</button>
			</div>
		</div>
	</form>

	<h1 class="text-3xl">List of TODO</h1>
	<table class="w-full mx-auto text-xl">
		<thead class="bg-slate-700 p-8 rounded-md">
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Priority</th>
			</tr></thead
		>
		<tbody class="p-8">
			{#each data.items as item}
				<tr>
					<td>{item.title}</td>
					<td>{item.description}</td>
					<td>{item.priority}</td>
				</tr>
			{/each}
			<tbody />
	</table>
</main>

