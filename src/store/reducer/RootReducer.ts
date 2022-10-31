import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Crypto} from 'interfaces/Index';

const initialState = {
  cryptos: [] as Crypto[],
  loading: false,
};

export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',
  async (name: string) => {
    try {
      const {data} = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name}/metrics`,
      ).then(res => res.json());
      return data;
    } catch (error) {
      return error;
    }
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
        state.cryptos.push(action.payload);
        state.loading = false;
      })
      .addCase(getCrypto.rejected, state => {
        state.loading = false;
      });
  },
});

export default cryptoSlice.reducer;
