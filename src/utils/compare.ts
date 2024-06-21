export const comapre = (itemOne: object, itemTwo: object) => {
  if (itemOne && itemTwo) {
    return JSON.stringify(itemOne) === JSON.stringify(itemTwo);
  }
};