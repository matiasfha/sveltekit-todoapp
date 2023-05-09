import { getTodoItems, insertTodoItem } from '$lib/database/sqlite';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
	default: async ({ request }) => {
		// TODO log the user in
		const formData = await request.formData();
		const title = formData.get('title')?.toString() ?? '';
		const description = formData.get('description')?.toString() ?? '';
		const priority = formData.get('priority')?.toString() ?? '0';
		// PERFORM SQL
		const changes = insertTodoItem({
			title,
			description,
			priority: parseInt(priority, 10)
		});
		return changes
		
	}
} satisfies Actions;


export const load = (async () => {
	const todoItems = getTodoItems()
    return {
		items: todoItems
    };
}) satisfies PageServerLoad;
