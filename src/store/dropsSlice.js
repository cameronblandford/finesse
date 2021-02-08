import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SHOPIFY_API = "https://o6clost5vb.execute-api.us-east-1.amazonaws.com/prod/shopify";

const initialState = {
  allDrops: [],
  currentDrop: null,
  byId: {},
};

const dropsSlice = createSlice({
  name: "drops",
  initialState,
  reducers: {
    getAllDropsSuccess(state, action) {
      state.allDrops = action.payload;
      state.error = null;
    },
    getAllDropsFailed(state, action) {
      state.allDrops = [];
      state.error = action.payload;
    },
    getDropByIdSuccess(state, action) {
      state.byId[action.payload.id] = action.payload.products;
      state.error = null;
    },
    getDropByIdFailed(state, action) {
      state.byId[action.payload.id] = null;
      state.error = action.payload;
    },
  },
});

export const {
  getDropByIdSuccess,
  getDropByIdFailed,
  getAllDropsFailed,
  getAllDropsSuccess,
} = dropsSlice.actions;

export default dropsSlice.reducer;

const axiosConfig = {
  headers: {
    "x-api-key": "PTHc54TYKLax3Ywj8fHQT8Uw8f55JcNQ12lHlA9u",
  },
};

// fetch the data
export const fetchAllDrops = () => async (dispatch) => {
  try {
    // const allDrops = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const { data } = await axios.post(SHOPIFY_API, { requestType: "all_products" }, axiosConfig);
    dispatch(getAllDropsSuccess(JSON.parse(data)));
  } catch (e) {
    console.log(e);
  }
};

export const fetchProductsByCollection = (collectionId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      SHOPIFY_API,
      {
        collectionId,
        requestType: "product_by_collection",
        query: `
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  transformedSrc(maxWidth: 100, maxHeight: 100)
                }
              }
            }
      `,
      },
      axiosConfig
    );
    dispatch(
      getDropByIdSuccess({
        products: data,
        id: collectionId,
      })
    );
  } catch (e) {
    console.log(e);
    getAllDropsFailed(e);
  }
};
