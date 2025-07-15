const arrayA = [
  "JavaScript", "Python", "C++", "Java", "TypeScript", "Go", "Rust", "Ruby", "Kotlin", "Swift",
  "React", "Node.js", "Django", "Flask", "Spring Boot", "Express.js", "Angular", "Vue.js", "GraphQL", "Next.js"
];

const arrayB = [
  "arrow functions", "async/await", "list comprehensions", "template literals", "forEach loop",
  "map/filter/reduce", "error handling", "OOP principles", "closures", "REST API usage",
  "module imports/exports", "state management", "event handling", "middleware functions", "routing",
  "form validation", "data fetching", "promises", "generics", "memory management"
];

export function getTodayTopic(startDateStr = "2024-07-16") {
  const totalCombinations = arrayA.length * arrayB.length;
  const startDate = new Date(startDateStr);
  const today = new Date();

  const daysPassed = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const index = daysPassed % totalCombinations;
   const i = Math.floor(index / arrayB.length);
  const j = index % arrayB.length;

  return {
    day: daysPassed + 1,
    topic: `${arrayA[i]} – ${arrayB[j]}`,
    technology:arrayA[i],
    concept:arrayB[j],
    totalTopics: totalCombinations
  };
}
