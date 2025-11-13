import React from 'react';
import { SectionCard } from '../ui/SectionCard';

export const Origins: React.FC = () => {
  return (
    <SectionCard title="Character Origins">
      <p className="text-sm leading-relaxed text-purple-300">
        At the age of 28, this adventurer's journey began in the vibrant lands of frontend development, mastering the visual arts of HTML, CSS, and React. However, a deeper calling echoed from the server-side, a desire to architect the unseen foundations of the digital world.
      </p>
      <p className="text-sm leading-relaxed text-purple-300">
        Heeding the call, they embarked on a new quest, venturing into the powerful realm of Python. Through relentless practice, they mastered the frameworks of FastAPI and Django, learning to build robust APIs, command powerful databases, and construct scalable microservices.
      </p>
       <p className="text-sm leading-relaxed text-purple-300">
        Now, based in the sun-drenched city of Barcelona, this Python Backend Developer specializes in crafting automation tools, intelligent Telegram integrations, and weaving the magic of LLMs into practical applications, always seeking new challenges and elegant solutions.
      </p>
    </sectionCard>
  );
};