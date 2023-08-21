// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  //TODO : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":["smartphone", "laptop", "mobile"]} => ?category=smartphone&categeory=laptop -> url ? category = smartphone & categeory = laptop
  // sort = {_sort: "price", _order: "dec"} => ?_sort=price&_order=asc -> url ? _sort = price & _order = asc
  // pagination = {_page : 1, limit = 10} => ?_page=1&_limit=10 -> url ? _page = 7 & _limit = 20

  // TODO : on server we will support multi values
  let queryString = "";

  for (let key in filter) {
    const categoryValues = filter[key];

    if (categoryValues.length > 0) {
      const lastCategoryValues = categoryValues[categoryValues.length - 1];

      queryString += `${key}=${lastCategoryValues}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }


  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data : {products : data, totalItems : +totalItems }});
  });
}
