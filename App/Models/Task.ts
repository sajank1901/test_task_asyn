export type Priority = 'Low' | 'Medium' | 'High';

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: 'pending' | 'synced';
}

export const createTask = (
  title: string,
  description: string,
  priority: Priority
): TaskModel => ({
  id: Date.now().toString(),
  title,
  description,
  priority,
  status: 'pending',
});