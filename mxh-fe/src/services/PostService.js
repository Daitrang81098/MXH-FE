import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const editPost = createAsyncThunk (
    'posts/editPost',
    async (data) => {
        await axios.put(`http://localhost:4000/posts/${data.idPost}`,data);
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)
// export const deletePost = createAsyncThunk(
//     'posts/deletePost',
//     async (id)=>{
//         console.log(id)
//         await axios.delete(`http://localhost:4000/posts/${idPost}`)
//         const res = await axios.get('http://localhost:4000/posts')
//         return res.data;
//     }
// )
export const findByIdPost = createAsyncThunk(
    'posts/findByIdPost',
    async (data)=>{
        const res = await axios.get(`http://localhost:4000/posts/findById/${data}`);
        return res.data
    }
)