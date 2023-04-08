//selectors
export const getAllCategories = () => (statePart) => statePart.categories;
export const getCategoryId = ({ categories }, categoryId) =>
  categories.find((category) => category.id === categoryId);
export const changeCategoryNameToId = ({ categories }, categoryName) =>
  categories.find((category) => category.categoryName === categoryName);
export const changeCategoryNameToIdLower = ({ categories }, categoryName) =>
  categories.find(
    (category) => category.categoryName.toLowerCase() === categoryName
  );

// actions
// const createActionName = (actionName) => `app/categories/${actionName}`;

// action creators

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoryReducer;
