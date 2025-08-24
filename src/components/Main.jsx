export default function Main(props) {
  const { data, handleToggleModal } = props;
  return (
    <div className="imgContainer" onClick={handleToggleModal}>
      <img
        src={data?.hdurl}
        alt={data?.title || "bg-image"}
        className="bgImage"
      />
      ;
    </div>
  );
}
