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
