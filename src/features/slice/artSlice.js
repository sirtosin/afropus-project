import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import artService from "./artService";

const initialState = {
  art: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new art
export const createArt = createAsyncThunk(
  "arts/create",
  async (artData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await artService.createArt(artData, token);
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

// Get user arts
// export const getArt = createAsyncThunk(
//   "art/getArt",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await artService.getArt(token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
// Get  arts
export const getArts = createAsyncThunk(
  "art/getAll",
  async () => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await artService.getArts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getSingleArt = createAsyncThunk(
  "art/single",
  async (id) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await artService.getSingleArt(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // return thunkAPI.rejectWithValue(message);
    }
  }
);

// update user art
export const updateArt = createAsyncThunk(
  "art/update",
  async (id, artData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await artService.updateArt(id, artData, token);
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

// Delete user art
export const deleteArt = createAsyncThunk(
  "art/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await artService.deleteArt(id, token);
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

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.art = action.payload;
        console.log("payload", action.payload);
      })
      .addCase(createArt.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getArts.pending, (state) => {
        state.isLoading = true;
      })
      // .addCase(getArt.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.art = action.payload;
      // })
      .addCase(getArts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.art = action.payload;
      })
      .addCase(getArts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.art = action.payload;
      })
      .addCase(getSingleArt.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.art = action.payload;
        console.log("payload", action.payload);
      })
      .addCase(updateArt.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        console.log("payloadRR", action.payload);
      })
      .addCase(deleteArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.art = state.art.filter((art) => art._id !== action.payload.id);
      })
      .addCase(deleteArt.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = artSlice.actions;
export default artSlice.reducer;
