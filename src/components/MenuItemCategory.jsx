import ItemList from "./ItemsList";

const MenuItemCategory = (prop) => {
  const { data } = prop;
  return (
    <div>
      <div>
        <h1 className="text-2xl my-4 font-semibold">
          {data?.title} ({data?.itemCards.length})
        </h1>
      </div>
      <ItemList items={data?.itemCards} />
    </div>
  );
};
export default MenuItemCategory;
