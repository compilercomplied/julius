import { LABEL_SILENT } from "../properties";
import { EmailThread } from "../types";


export const removeSilentLabel = (threads: EmailThread[]): void => {


	Logger.log(`Removing label ${LABEL_SILENT.getName()} to ${threads.length} threads`);

	threads.forEach(t => t.removeLabel(LABEL_SILENT));

}