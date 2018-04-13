const fetchProjects = () => async dispatch => {
  const headers = new Headers();
  const options = {
    headers,
    method: "get",
    cache: "default"
  };

  headers.append("Content-Type", "application/json");
  dispatch({ type: "FETCH_PROJECTS_PENDING" });

  try {
    const response = await fetch("/api/projects", options);
    const payload = await response.json();
    console.log(payload);
    dispatch({ type: "FETCH_PROJECTS_FULFILLED", payload });
  } catch (e) {
    dispatch({ type: "FETCH_PROJECTS_REJECTED" });
  }
};

export default fetchProjects;
