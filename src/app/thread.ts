import { EmailThread } from "../types";

const fromRegex = "\<(.*?)\>";

export const extractSender = (thread: EmailThread): string => {

	const senderRaw = thread.getMessages()[0].getFrom();
	const sender = (senderRaw.match(fromRegex) ?? []).pop() ?? "";

	return sender;

}