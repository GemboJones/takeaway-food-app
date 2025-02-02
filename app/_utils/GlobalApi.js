const { gql, default: request } = require("graphql-request");

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories {
        id
        slug
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const GetRestaurant = async (category) => {
  const query = gql`
    query Restaurant {
      restaurants(where: { category_some: { slug: "${category}" } }) {
        name
        aboutUs
        address
        slug
        workingHours
        restaurantType
        category {
          name
        }
        banner {
          url
        }
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const GetRestaurantDetail = async (restaurant) => {
  const query = gql`
    query RestaurantDetail {
      restaurant(where: { slug: "${restaurant}" }) {
        aboutUs
        address
        banner {
          url
        }
        category {
          name
        }
        id
        menu {
          ... on Menu {
            id
            category
            menuItem {
              ... on MenuItem {
                id
                name
                description
                price
                productImage {
                  url
                }
              }
            }
          }
        }
        name
        restaurantType
        slug
        workingHours
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
