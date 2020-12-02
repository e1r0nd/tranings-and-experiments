import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ProductsOverviewScreen } from "../screens/shop/ProductsOverviewScreen";
import { ProductDetailScreen } from "../screens/shop/ProductDetailScreen";
import { CartScreen } from "../screens/shop/CartScreen";

import { Colors } from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
