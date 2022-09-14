import { createSlice } from '@reduxjs/toolkit';


 export const topicsSlice = createSlice({

	name: 'topics',
	initialState: {
		topics: {}
		
	},
	reducers: {
		
		addTopic: (state, action) => {
			const { id, name, icon } = action.payload;
			state.topics[id] = {
				name,
				id,
				icon,
				quizIds:[]
			}

		},
		addQuizTopicId: (state, action) => {
			const { topicId, quizId } = action.payload;
			state.topics[topicId].quizIds.push(quizId);
        }
	}


})
export const { addTopic, addQuizTopicId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;