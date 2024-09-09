export const Qualities = ({ item }) => {
  return <span className={"badge m-1 bg-" + item.color}>{item.name}</span>;
};
