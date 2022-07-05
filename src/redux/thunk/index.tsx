import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "redux/api";

export const getInFolders = createAsyncThunk(
  "getInFolders",
  async (val: any) => {
    const body = {
      testKey: val.testVal,
    };

    const res = await axios.post(`${API}/`, body);
  }
);
