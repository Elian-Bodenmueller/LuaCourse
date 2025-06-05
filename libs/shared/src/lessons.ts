export interface Lesson {
  id: number;
  title: string;
  content: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Introduction to Roblox Lua',
    content: 'Learn the basics of scripting in Roblox using Lua.'
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    content: 'Understand how to use variables and common data types in Lua.'
  },
  {
    id: 3,
    title: 'Functions and Events',
    content: 'Create reusable functions and handle Roblox events effectively.'
  }
];
