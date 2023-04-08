//selectors
export const getAllCategories = () => (statePart) => statePart.categories;
export const getCategoryId = ({ categories }, categoryId) =>
  categories.find((category) => category.id === categoryId);
export const changeCategoryNameOnId = ({ categories }, categoryName) =>
  categories.find((category) => category.categoryName === categoryName);

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
