import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import portraitService from "./portraitService";

const initialState = {
  portrait: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new portrait
export const createPortrait = createAsyncThunk(
  "portraits/create",
  async (portraitData, thunkAPI) => {
    try {
      return await portraitService.createPortrait(portraitData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getPortraits = createAsyncThunk("portrait/getAll", async () => {
  try {
    // const token = thunkAPI.getState().auth.user.token;
    return await portraitService.getPortraits();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    // return thunkAPI.rejectWithValue(message);
  }
});

export const portraitSlice = createSlice({
  name: "portrait",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPortrait.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPortrait.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portrait = action.payload;
        console.log("payload", action.payload);
      })
      .addCase(createPortrait.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPortraits.pending, (state) => {
        state.isLoading = true;
      })
      // .addCase(getportrait.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.portrait = action.payload;
      // })
      .addCase(getPortraits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portrait = action.payload;
      })
      .addCase(getPortraits.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = portraitSlice.actions;
export default portraitSlice.reducer;
