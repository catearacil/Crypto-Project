import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Crypto} from '../../interfaces/cryptoInterface';
import axios from 'axios';

export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',
  async (name: string) => {
    await axios.get(
      `https://data.messari.io/api/v1/assets/${name}/metrics/market-data`,
    );
  },
);

const initialState = {
  cryptos: [] as Crypto[],
  loading: false,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase;
  },
});

export const {} = cryptoSlice.actions;

export default cryptoSlice.reducer;
