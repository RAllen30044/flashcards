import { createSlice } from '@reduxjs/toolkit';
import { addQuizTopicId } from '../topics/topicsSlice';




export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }
        }
    }
})
export const thunkActionCreator = (quiz) => {
    return (dispatch) => {
      
        const { name, topicId, id, cardIds } = quiz;


        dispatch(addQuiz({ name, id, topicId, cardIds}))

        dispatch(addQuizTopicId({ topicId: topicId, quizId: id }));

    }

}
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;