import { CustomMessage } from '../custom-message.enum';
import { Trace } from './types';

/**
 * This seems to be triggerd based on the CustomAction Step, the body will match the body of the customAction step
 * there is no documentation around this functionality whatsoever but the name of the custom action must match the type
 * the action body is passed as the trace.payload
 * note that for variables, use single curly brace set, UI will not give any visual cues
 */
export const CalendarTrace: Trace = {
  canHandle: ({ type }) => type === 'calendar',
  handle: ({ context }, trace) => {
    console.log("Calendar trace received" + JSON.stringify(trace))
    context.messages.push({ type: CustomMessage.CALENDAR, payload: JSON.parse(trace.payload) });
    return context;
  },
};
