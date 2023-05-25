async function newFormHandler(event) {
  event.preventDefault();

  const job_title = document.querySelector('input[name="#job_title"]').value;
  const job_description = document.querySelector(
    'input[name="#job_description"]'
  ).value;

  const job_location = document.querySelector(
    'input[name="#job_location"]'
  ).value;
  const job_date = document.querySelector('input[name="#job_date"]').value;
  const hourly_wage = document.querySelector('input[name="#hourly_wage"]').value;
  const job_duration = document.querySelector(
    'input[name="#job_duration"]'
  ).value;

  const response = await fetch(`/api/jobs`, {
    method: "POST",
    body: JSON.stringify({
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
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#create-job").addEventListener("click", newFormHandler);
