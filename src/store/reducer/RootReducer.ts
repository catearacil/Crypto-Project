import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Crypto} from 'interfaces/Index';
import LocalApi from '../LocalApi/Index';

const initialState = {
  cryptos: [] as Crypto[],
  loading: false,
};

type key = 'id' | 'slug' | 'symbol' | 'market_data' | 'img';

export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',

  async () => {
    for (let name of LocalApi) {
      const {data} = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name.slug}${process.env.REACT_APP_QUERY_URL}`,
      ).then(res => res.json());
      for (const key in data) {
        name[key as key] = data[key];
      }
    }
    return LocalApi;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCrypto.pending, state => {
        state.loading = true;
      })
      .addCase(getCrypto.fulfilled, (state, action) => {
        state.cryptos = action.payload;
        state.loading = false;
      })
      .addCase(getCrypto.rejected, state => {
        state.loading = false;
      });
  },
});

export default cryptoSlice.reducer;
