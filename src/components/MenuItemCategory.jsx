import ItemList from "./ItemsList";

const MenuItemCategory = (prop) => {
  const { data } = prop;
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">
          {data?.title} ({data?.itemCards.length})
        </h1>
      </div>
      <div>
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
};
export default MenuItemCategory;
