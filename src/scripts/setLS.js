export const saveState = (state) => {
  const newState = JSON.stringify(state);
  localStorage.setItem('state', newState);
}

export const getState = () => {
  const newState = localStorage.getItem('state');
  if (newState) {
    return JSON.parse(newState);
  }
  return {
    toDoList: [],
    search: '',
    tab: 1
  }
};