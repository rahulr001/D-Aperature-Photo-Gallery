export const Cards = ({ img }: any) => {
  console.log(img);
  return (
    <div>
      <img
        style={{ borderRadius: "12px" }}
        width={300}
        height={300}
        src={img.url}
        alt={img.name}
      />
    </div>
  );
};
