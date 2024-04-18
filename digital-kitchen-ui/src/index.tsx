import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {CategoryProvider} from "./Components/Settings/SettingsPages/Category/CategoryContext";
import {
    IngredientsProvider
} from "./Components/Settings/SettingsPages/Product/ProductContext";
import {RecipeProvider} from "./Components/Recipes/RecipesContext";
import {CommentProvider} from "./Components/Comments/CommentsContext";
import {UsersProvider} from "./Components/Users/UsersContext";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <UsersProvider>
          <CommentProvider>
              <CategoryProvider>
                  <IngredientsProvider>
                      <RecipeProvider>
                          <App />
                      </RecipeProvider>
                  </IngredientsProvider>
              </CategoryProvider>
          </CommentProvider>
      </UsersProvider>
  </React.StrictMode>
);
