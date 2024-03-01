const ItemList = (prop) => {
  const { items } = prop;
  console.log(items);
  return (
    <div>
      {items.map((item)=><div key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{item?.card?.info?.price/100}</div>)}
    </div>
  );
};
export default ItemList;
