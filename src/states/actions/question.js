import { SAVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION, DELETE_QUESTION } from '../type';

export const saveQuestions = data => async dispatch => {
  dispatch({
    type: SAVE_QUESTIONS,
    payload: data,
  });
};

export const addQuestion = data => async dispatch => {
  dispatch({
    type: ADD_QUESTION,
    payload: data,
  });
};

export const updateQuestion = (data, idx) => async dispatch => {
  dispatch({
    type: UPDATE_QUESTION,
    payload: { id: idx, data: data },
  });
};

export const deleteQuestion = idx => async dispatch => {
  dispatch({
    type: DELETE_QUESTION,
    payload: { id: idx },
  });
};

const QuestionActions = {
  saveQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};

export default QuestionActions;
