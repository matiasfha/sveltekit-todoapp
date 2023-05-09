import Database from 'better-sqlite3';
const db = new Database('todos.db');
db.pragma('journal_mode = WAL');

type TodoItem = {
    title: string;
    description: string;
    priority: number;
};

export function insertTodoItem(item: TodoItem) {
    const sql = db.prepare(`INSERT INTO todos (title, description, priority) VALUES (?,?,?)`);
    const info = sql.run(item.title, item.description, item.priority);
    return info.changes
}

export function getTodoItems() {
    const sql = db.prepare('SELECT * FROM todos')
    return sql.all()
}
