import database from "../database/database"

export const Todo_container = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let data = database;

  // Group tasks by weekday
  let tasksByWeekday = {};
  days.forEach(day => {
    tasksByWeekday[day] = data.filter(item => item.weekday === day);
  });

  // Render each weekday section
  let allDaysHtml = days.map(day => {
    if (tasksByWeekday[day].length === 0) return ""; // Skip days with no tasks

    let tasksHtml = tasksByWeekday[day].map((item, i) => {
      let done = `${item['done'] ? `done` : ' '}`
      return `<div class="task-list clean-task-list">
        <div class="check-btns">
         ${item['done'] == false ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          </svg>` : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6L9 17L4 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
        </div>
        <div class="task-text ${done}">
          ${item['tasks']}
        </div>
        <div class="task-delete">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
        </div>
        <div class="task-edit">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
            <path d="M 37.980469 4.0195312 C 36.450469 4.0195313 34.920234 4.5995313 33.740234 5.7695312 L 31.490234 8.0292969 L 39.970703 16.509766 L 42.230469 14.259766 C 44.570469 11.909766 44.570469 8.1195313 42.230469 5.7695312 C 41.060469 4.5995312 39.520469 4.0195312 37.980469 4.0195312 z M 29.369141 10.150391 L 10.150391 29.371094 L 18.630859 37.851562 L 37.849609 18.630859 L 29.369141 10.150391 z M 8.0292969 31.490234 L 3 45 L 16.509766 39.970703 L 8.0292969 31.490234 z"></path>
          </svg>
        </div>
      </div>`;
    }).join("");

    return ` 
      <section class="weekday-section">
        <div class="weekday-heading">${day}</div>
        <div class="weekday-tasks">
          ${tasksHtml}
        </div>
      </section>
    `;
  }).join("");

  return allDaysHtml;
}