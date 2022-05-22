import { Label, Properties } from "./types";


// -----------------------------------------------------------------------------
const properties: Properties = PropertiesService.getScriptProperties()

const getProp = (key: string): string => {

	const prop: string | null = properties.getProperty(key);

	if (prop === null) throw { message: `Unknown property key: ${key}` };

	return prop;
}

const getProps = (key: string): string[] => {

	const prop: string | null = properties.getProperty(key);

	if (prop === null) throw { message: `Unknown property key: ${key}` };

	return prop.split('#');
}


// -----------------------------------------------------------------------------
export const LABEL_SILENT: Label = GmailApp.getUserLabelByName(getProp("label-silent"));


export const TOPIC_ART_FROM: string[] = getProps("topic-art-from");
export const TOPIC_ART_LABEL: Label = GmailApp.getUserLabelByName(getProp("topic-art-label"));

export const TOPIC_DEV_FROM: string[] = getProps("topic-dev-from");
export const TOPIC_DEV_LABEL: Label = GmailApp.getUserLabelByName(getProp("topic-dev-label"));
