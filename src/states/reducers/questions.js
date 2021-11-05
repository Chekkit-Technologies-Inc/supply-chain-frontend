import { SAVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION, DELETE_QUESTION } from '../type';
import { Question } from '../../models';

const initialState = [new Question()];

const questionReducer = (questions = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_QUESTIONS:
      return payload;
    case ADD_QUESTION:
      return [...questions, payload];
    case UPDATE_QUESTION:
      return questions.map((question, idx) => {
        if (payload.id === idx) {
          return payload.data;
        }
        return question;
      });
    case DELETE_QUESTION:
      return questions.filter((question, idx) => {
        return payload.id !== idx;
      });
    default:
      return questions;
  }
};

export default questionReducer;
