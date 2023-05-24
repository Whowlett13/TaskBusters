async function newFormHandler(event) {
  event.preventDefault();

  const newJob = document.querySelector('input[name="create job post"]').value;
  const content = document.querySelector('input[name="text feild"]').value;

  const response = await fetch(`/api/User`, {
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
    document.location.replace("/jobview");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#jobview").addEventListener("submit", newFormHandler);
