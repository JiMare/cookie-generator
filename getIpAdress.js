export const getIpAdress = async () => {
  const ip = await fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data.ip;
    })
    .catch((error) => console.warn(error));
  return ip;
};
