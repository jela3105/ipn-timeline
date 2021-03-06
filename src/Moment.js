import data from "./data";
const Moment = () => {
  return (
    <>
      {data.map((x) => (
        <div className="momento">
          <h3>{x.year}</h3>
          <div className="descripcion">{x.description}</div>
        </div>
      ))}
    </>
  );
};

export default Moment;
