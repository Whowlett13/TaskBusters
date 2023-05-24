async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/Jobs`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      job_title,
      job_description,
      job_location,
      job_date,
      hourly_wage,
      job_duration,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/createjob");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#create-job")
  .addEventListener("submit", newFormHandler);
