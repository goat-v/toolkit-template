import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/ApiClient"


// 非同期処理はここ
export const fetchContentOperation = createAsyncThunk(
  "counter/fetchContent",
  async () => {
    const res = await client.get("/events")
    return res.data
  }
)
