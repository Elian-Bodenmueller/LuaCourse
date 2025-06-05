import React, { useEffect, useState } from 'react';
import './style.css';
import { Lesson } from '@luacourse/shared';
import { LessonCard } from '@luacourse/ui';

export default function App() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then(setLessons);
  }, []);

  return (
    <div className="container">
      <h1>Roblox Lua Course</h1>
      {lessons.map((l) => (
        <LessonCard key={l.id} lesson={l} />
      ))}
    </div>
  );
}
