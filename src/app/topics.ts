import { TOPIC_ART_FROM, TOPIC_ART_LABEL, TOPIC_DEV_FROM, TOPIC_DEV_LABEL } from "../properties";
import { EmailThread, Label } from "../types"
import { extractSender } from "./thread";


type Topic = { from: string[], label: Label, }

// -----------------------------------------------------------------------------
const topics: Topic[] = [
	{ from: TOPIC_ART_FROM, label: TOPIC_ART_LABEL },
	{ from: TOPIC_DEV_FROM, label: TOPIC_DEV_LABEL },
];


// -----------------------------------------------------------------------------
export const markTopics = (threads: EmailThread[]): void => {

	for(const topic of topics) {

		const topics = threads
			.filter(thread => topic.from.includes(extractSender(thread)));

		Logger.log(`Applying label ${topic.label.getName()} to ${topics.length} threads`);

		topics.forEach(thread => thread.addLabel(topic.label));
	}

}