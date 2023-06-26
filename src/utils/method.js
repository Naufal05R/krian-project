export const getItem = (items, id) => {
	const foundedItem = items.find((item) => item.id === id);
	return foundedItem;
}