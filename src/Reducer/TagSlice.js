import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";


export const getTags = createAsyncThunk(
    'getTags',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/admin/tag/get-tag`, user_input);
            if (response?.data?.status_code === 200) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getSingleTags = createAsyncThunk(
    'getSingleTags',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/admin/tag/get-tag`, user_input);
            if (response?.data?.status_code === 200) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addTags = createAsyncThunk(
    'addTags',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`admin/tag/add-tag`, user_input);


            if (response?.data?.status_code === 201) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getActiveDeactiveTags = createAsyncThunk(
    'getActiveDeactiveTags',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/admin/tag/change-status`, user_input);
            if (response?.data?.status_code === 200) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const updateTags = createAsyncThunk(
    'updateTags',
    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.post(`/admin/tag/update-tag`, user_input);
            if (response?.data?.status_code === 200) {
                return response?.data;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)



const initialState = {
    loading: false,
    allTags: [],
    error: false,
    addTagData: "",
    singleTag: {},
    updateTagData: {}
}
const TagSlice = createSlice(
    {
        'name': 'levelsData',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(getTags.pending, (state) => {
                    state.loading = true
                })
                .addCase(getTags.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.allTags = payload
                    state.error = false
                })
                .addCase(getTags.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(addTags.pending, (state) => {
                    state.loading = true
                })
                .addCase(addTags.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.addTagData = payload
                    state.error = false
                })
                .addCase(addTags.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getSingleTags.pending, (state) => {
                    state.loading = true
                })
                .addCase(getSingleTags.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.singleTag = payload
                    state.error = false
                })
                .addCase(getSingleTags.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(updateTags.pending, (state) => {
                    state.loading = true
                })
                .addCase(updateTags.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.updateTagData = payload
                    state.error = false
                })
                .addCase(updateTags.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }
    }

)
export default TagSlice.reducer;