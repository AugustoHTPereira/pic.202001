export const selectIBGE = selected => {
  console.log("ACTIVED ACTION", selected);

  return {
    type: "SET_IBGE",
    selected
  };
};
