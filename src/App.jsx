import "./App.css";

const tasks = [
  {
    id: 1,
    title: "Aggiungere animazioni CSS",
    state: "backlog",
    priority: 2,
    estimatedTime: 30,
  },
  {
    id: 2,
    title: "Integrare l'API di autenticazione",
    state: "in_progress",
    priority: 1,
    estimatedTime: 120,
  },
  {
    id: 3,
    title: "Aggiornare la documentazione",
    state: "backlog",
    priority: 3,
    estimatedTime: 60,
  },
  {
    id: 4,
    title: "Rifattorizzare il codice CSS",
    state: "in_progress",
    priority: 2,
    estimatedTime: 90,
  },
  {
    id: 5,
    title: "Implementare la homepage",
    state: "completed",
    priority: 1,
    estimatedTime: 120,
  },
  {
    id: 6,
    title: "Sviluppare il menu di navigazione",
    state: "completed",
    priority: 2,
    estimatedTime: 60,
  },
  {
    id: 7,
    title: "Creare il footer del sito",
    state: "completed",
    priority: 3,
    estimatedTime: 30,
  },
  {
    id: 8,
    title: "Ottimizzare le performance",
    state: "completed",
    priority: 1,
    estimatedTime: 180,
  },
  {
    id: 9,
    title: "Scrivere test per i componenti",
    state: "completed",
    priority: 2,
    estimatedTime: 90,
  },
  {
    id: 10,
    title: "Implementare la pagina dei contatti",
    state: "completed",
    priority: 3,
    estimatedTime: 60,
  },
];

function App() {
  // Filtro i task che sono in stato 'backlog' o 'in_progress'
  const currentTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

  // Filtro i task che sono in stato 'completed'
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <div className="task-manager">
      {/* Intestazione con sfondo colorato */}
      <header className="header">
        <h1>Task Manager</h1>
      </header>
      {/* Sezione per i task correnti */}
      <div className="section">
        <h2>Current Tasks ({currentTasks.length})</h2>{" "}
        {/* Titolo con il numero di task correnti */}
        <ul className="task-list">
          {/* Mappatura dei task correnti */}
          {currentTasks.map((task) => (
            <li key={task.id} className="task">
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`badge ${task.state}`}>
                  {task.state.replace("_", " ")}{" "}
                  {/* Mostra lo stato del task, sostituendo "_" con uno spazio */}
                </span>
              </div>
              <p>Priority: {task.priority}</p>{" "}
              {/* Mostra la priorità del task */}
              <p>Est. time: {task.estimatedTime} min</p>{" "}
              {/* Mostra il tempo stimato per completare il task */}
            </li>
          ))}
        </ul>
      </div>
      <hr /> {/* Separatore orizzontale tra le due sezioni */}
      {/* Sezione per i task completati */}
      <div className="section">
        <h2>Completed Tasks ({completedTasks.length})</h2>{" "}
        {/* Titolo con il numero di task completati */}
        <ul className="task-list">
          {/* Mappatura dei task completati */}
          {completedTasks.map((task) => (
            <li key={task.id} className="task">
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className="badge completed">completed</span>{" "}
                {/* Mostra il badge con la scritta 'completed' */}
              </div>
              <p>Priority: {task.priority}</p>{" "}
              {/* Mostra la priorità del task */}
              <p>Est. time: {task.estimatedTime} min</p>{" "}
              {/* Mostra il tempo stimato per completare il task */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
