import { silentThreadsFromInbox } from "./app/inbox";
import { removeSilentLabel } from "./app/labels";
import { markTopics } from "./app/topics";


const processSilent = (): void => {

	const threads = silentThreadsFromInbox();

	markTopics(threads);

	removeSilentLabel(threads);

}

// -----------------------------------------------------------------------------
function main() {

	processSilent();


}