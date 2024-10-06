import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const dataProfile = {
    code: "0",
    message: "SUCCESS",
    result: {
      name: "𝗧𝗵𝗲𝗼𝗱𝗼𝗿𝘂𝘀",
      userVip: true,
      vipEnum: "PREMIUM",
      headImg:
        "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1727937488129_5dca518d.webp",
      avatar:
        "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728009877102_159d9710.webp",
      bio: "❨ Discord: @ahirudo ❩",
    },
  };
  return (
    <GlobalContext.Provider value={dataProfile}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
