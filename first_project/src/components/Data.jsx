export const DataComponents = ({ props }) => {
  const { Data } = props;
  console.log("props", props);
  console.log("Data", Data);

  return (
    <>
      {Data.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.id}</h2>
            <h1>{el.title}</h1>
            <h3>{el.completed ? "true" : "false"}</h3>
          </div>
        );
      })}
    </>
  );
};
