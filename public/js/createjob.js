async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('input[name="job_title"]').value;
  const job_description = document.querySelector(
    'input[name="job_description"]'
  ).value;

  const jobLocation = document.querySelector(
    'input[name="job_location"]'
  ).value;
  const jobDate = document.querySelector('input[name="job_date"]').value;
  const hourlyWage = document.querySelector('input[name="hourly_wage"]').value;
  const jobDuration = document.querySelector(
    'input[name="job_duration"]'
  ).value;

  const response = await fetch(`/api/jobs`, {
    method: "POST",
    body: JSON.stringify({
      jobTitle,
      job_description,
      jobLocation,
      jobDate,
      hourlyWage,
      jobDuration,
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
  .addEventListener("click", newFormHandler);
