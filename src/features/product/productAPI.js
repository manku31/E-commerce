// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  //TODO : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}



export function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["smartphone", "laptop", "mobile"]}
  // TODO : on server we will support multi values
  // console.log(filter);
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];

    if(categoryValues.length > 0) {
      // console.log(categoryValues);
      const lastCategoryValues = categoryValues[categoryValues.length - 1];
      // console.log(lastCategoryValues);
      queryString += `${key}=${lastCategoryValues}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
