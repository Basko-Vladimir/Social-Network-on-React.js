const UPDATE_NEW_POST_EL = 'UPDATE-NEW-POST-EL';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let  initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCounts: 12},
        {id: 1, message: 'Yo Yo', likeCounts: 16},
        {id: 2, message: 'Today is nice day', likeCounts: 7}],
        newPostText: 'Abracadabra',
        profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounts: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_EL: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }

        }
        default:
            return state;
    }
};

export const changePostElementActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_EL,
        newText: text
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});

export default profileReducer;
