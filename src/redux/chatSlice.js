import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  collectionName: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    enterChat: (state, action) => {
      const { id, collectionName } = action.payload;
      state.id = id;
      state.collectionName = collectionName;
    },
  },
});

export const { enterChat } = chatSlice.actions;

export const selectChat = (state) => state.chat;

export default chatSlice.reducer;
