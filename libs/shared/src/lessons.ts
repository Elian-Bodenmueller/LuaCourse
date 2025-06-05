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
  },
  {
    id: 4,
    title: 'Tables',
    content: 'Work with Lua tables to store structured data.'
  },
  {
    id: 5,
    title: 'Loops',
    content: 'Master for and while loops for repeating actions.'
  },
  {
    id: 6,
    title: 'Scripting Game Objects',
    content: 'Manipulate Roblox game objects using Lua.'
  },
  {
    id: 7,
    title: 'Client-Server Communication',
    content: 'Use remote events and functions to talk between client and server.'
  },
  {
    id: 8,
    title: 'Building a Simple Game',
    content: 'Put everything together and build a small Roblox game.'
  }
];
