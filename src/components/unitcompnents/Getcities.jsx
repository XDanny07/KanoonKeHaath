export function Getcities(ST, setdist) {
  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "UFh0S29Vc3V1aGc2dkkybnRxNzBoWW5obkNPWm9sUHphdkZVQ3VpeA=="
  );

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(
    `https://api.countrystatecity.in/v1/countries/IN/states/${ST}/cities`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setdist(result))
    .catch((error) => console.log("error", error));
}
