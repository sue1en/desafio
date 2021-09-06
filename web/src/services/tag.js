import http from "../config/http";

export const createTag = (data) => http.post(`/novatag`, data);
export const getAllTag = () => http.get(`/tags`);
export const getTagById = (id) => http.get(`/posts/${id}`);
export const editTag = (id, data) => http.put(`/tags/${id}`, data);
export const tagByName = () => http.get(`/tagname`);