"use server";

export async function addNewsletterSubscriber(_: any, formData: FormData) {
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

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok && responseData.success) {
      return {
        message: "Subscription successful!",
      };
    } else {
      console.error("Subscription failed:", responseData);
      return {
        message: "Subscription failed. Please try again.",
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      message: "An error occurred. Please try again later.",
    };
  }
}
