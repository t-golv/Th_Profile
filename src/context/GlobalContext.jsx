import { createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en",
    DNT: "1",
    Fingerprint: "840cf1fc79e3d7bb243aeb93ed5757f3",
    Origin: "https://www.joyland.ai",
    Referer: "https://www.joyland.ai/",
  },
};
export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const {
    request: requestProfile,
    data: dataProfile,
    loading: loadingProfile,
    error: errorProfile,
  } = useFetch();
  const {
    request: requestPublicBots,
    data: dataPublicBots,
    loading: loadingPublicBots,
    error: errorPublicBots,
  } = useFetch();
  useEffect(() => {
    requestProfile(
      `https://api.joyland.ai/profile/info?userId=8Ad2r`,
      options
    ).finally(() => {
      requestPublicBots(
        `https://api.joyland.ai/profile/public-bots?userId=8Ad2r`,
        options
      );
    });
  }, []);
  const sortedBots = (arr) => {
    if (Array.isArray(arr)) {
      arr.sort((a, b) => {
        if (a.isAddToHomePage === b.isAddToHomePage) {
          return 0;
        }
        return a.isAddToHomePage ? 1 : -1;
      });
      return arr;
    } else {
      return []; // Return an empty array if 'arr' is not an array
    }
  };
  const sumLikes = (arr) => {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      console.error("Input is not an array:", arr);
      return 0; // Return 0 or handle it as needed
    }

    console.log(arr);

    return arr.reduce((total, bot) => {
      return total + (parseInt(bot.botLikesInInt) || 0); // Use botLikesInInt for the sum
    }, 0);
  };
  return (
    <GlobalContext.Provider
      value={{
        dataProfile,
        dataPublicBots: dataPublicBots,
        sumLikes,
        sortedBots,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
