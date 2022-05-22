import { LABEL_SILENT } from "../properties";
import { EmailThread } from "../types";


export const silentThreadsFromInbox = (): EmailThread[]  => {

	const threads: EmailThread[] = GmailApp.getInboxThreads();

	const silentThreads = threads
		.filter(t => t.getLabels().some(label => label === LABEL_SILENT));

	Logger.log(`${silentThreads.length} silent threads in inbox`);

	return silentThreads;

}