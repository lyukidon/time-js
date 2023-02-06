const date = new Date();

export const year = () => date.getFullYear();

export const month = () =>
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) + "" : date.getMonth() + 1;

export const day = () =>
    date.getDate() < 10 ? "0" + date.getDate() + "" : date.getDate();

export const hour = () =>
    date.getHours() < 10 ? "0" + date.getHours() + "" : date.getHours();

export const minute = () =>
    date.getMinutes() < 10 ? "0" + date.getMinutes() + "" : date.getMinutes();

export const second = () =>
    date.getSeconds() < 10 ? "0" + date.getSeconds() + "" : date.getSeconds();
