import http from "../config/http";

export const createPostCard = (data) => http.post(`/novopost`, data);
export const getAllPostCard = () => http.get(`/posts`);
export const getPostById = (id) => http.get(`/posts/${id}`);
export const editPostCard = (id, data) => http.put(`/posts/${id}`, data);
export const removePostCard = (id) => http.get(`/posts/${id}`);
export const getPostByTag = (data) => http.get(`/buscapost`, data);