import React from 'react';
import { Lesson } from '@luacourse/shared';
import './lesson-card.css';

export interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="lesson">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
    </div>
  );
}
