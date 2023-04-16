import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "sdlkfmdskf",
      label: "Can i use React in a project?",
      content:
        "You can use react in any project you want.You can use react in any project you want.You can use react in any project you want.",
    },
    {
      id: "ewrer",
      label: "Can i use Javascript in a project?",
      content:
        "You can use react in any project you want.You can use react in any project you want.You can use react in any project you want.",
    },
    {
      id: "cxvcvx",
      label: "Can i use CSS in a project?",
      content:
        "You can use react in any project you want.You can use react in any project you want.You can use react in any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
