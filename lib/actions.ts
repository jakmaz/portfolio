"use server";

export async function addNewsletterSubscriber(formData: FormData) {
  const email = formData.get("email");

  const url = new URL("https://api.sender.net/v2/subscribers");

  const headers = {
    Authorization: "Bearer " + process.env.SENDER_TOKEN,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = {
    email: email,
    trigger_automation: false,
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const responeData = await response.json();
  console.log(responeData);
}
