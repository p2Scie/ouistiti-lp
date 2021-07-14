export default {
    userId(state) {
        return state.userId;
    },
    userName(state) {
        return state.userName;
    },
    isAuthenticated(state) {
        return !!state.userId;
    }
}