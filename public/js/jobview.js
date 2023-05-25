async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('input[name="#job-title"]').value;
  const job_description = document.querySelector(
    'input[name="#job-description"]'
  ).value;

  const jobLocation = document.querySelector(
    'input[name="#job-location"]'
  ).value;
  const jobDate = document.querySelector('input[name="#job-date"]').value;
  const hourlyWage = document.querySelector('input[name="#hourly-wage"]').value;
  const jobDuration = document.querySelector(
    'input[name="#job-duration"]'
  ).value;

  const response = await fetch(`/api/User`, {
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
    document.location.replace("/jobview");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#jobview").addEventListener("click", newFormHandler);
