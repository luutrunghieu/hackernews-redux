export const fetchNewStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchItemDetail = async id => {
  const itemResponse = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const itemDetail = await itemResponse.json();
  return itemDetail;
};
