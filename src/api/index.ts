import { List } from "../components/list.types";

const captureHTTPErrors = (response: Response) => {
  const isSuccess = response.ok;

  if (!isSuccess) {
    return Promise.reject(response);
  }

  return response;
};

const handleError = (error: Response) => {
  let errorType: string;

  if (typeof error.json === "function") {
    errorType = "API Error";

    error
      .json()
      .then((errorBody: JSON) => {
        console.error(`${errorType}:`, errorBody);
      })
      .catch(() => {
        console.error(`${errorType}:`, error.statusText);
      });
  } else {
    errorType = "Fetch Error";

    console.error(`${errorType}:`, error);
  }

  return null;
};

export const requestUpdateList = async (list: List): Promise<Response | null> =>
  await fetch("/api/list-update", {
    method: "POST",
    body: JSON.stringify(list),
  })
    .then(captureHTTPErrors)
    .catch(handleError);

export const requestGetList = async (id: string): Promise<Response | null> =>
  await fetch("/api/list-get", {
    method: "POST",
    body: JSON.stringify({ id }),
  })
    .then(captureHTTPErrors)
    .catch(handleError);
