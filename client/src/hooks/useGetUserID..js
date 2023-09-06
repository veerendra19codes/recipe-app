// custom hook to export the userID of the user who is logged in which is stored in localstorage
export const useGetUserID = () => {
    return window.localStorage.getItem("userID");
};