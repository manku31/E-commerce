export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    // TODO : on server it will only return required info of user (like email, userid) (no password)
    resolve({ data });
  });
}

export function fetchItemByUserId(userId) {
  //TODO : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  console.log(update);
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    // TODO : on server it will only return required info of user (like email, userid) (no password)
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  // console.log(itemId);
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    // TODO : on server it will only return required info of user (like email, userid) (no password)
    resolve({ data: { id: itemId } });
  });
}
