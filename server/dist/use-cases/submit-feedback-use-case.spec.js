"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64,9239283928329',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64,9239283928329',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,9239283928329',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/gif;base64,9239283928329',
        })).rejects.toThrow();
    });
});
// test('sum 2 + 2', () => {
//   expect(2+2).toBe(4);
// });
