import { Message, SystemResponse, useRuntime } from '@voiceflow/react-chat';
import Calendar from 'react-calendar';
import {useState} from "react";

export interface SystemMessageProps extends React.ComponentProps<(typeof SystemResponse)['SystemMessage']> {
  value: Date;
  runtime: ReturnType<typeof useRuntime>;
}

export const CalendarMessage: React.FC<SystemMessageProps> = ({ value, runtime, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(value); // Initialize selectedDate with the value prop

  const handleChange = async (date: Date) => {
    setSelectedDate(date);
    /**
     * You must use the runtime API to store this value in a variable.
     *
     * https://developer.voiceflow.com/reference/updatestatevariables-1
     *
     * Without this, the conversation will not have access to the chosen date.
     * You can alternatively integrate your own state storage API.
     *
     * here we are setting the voiceflow variable appointment_date to the date and also storing the timezone
     * because I need to be able to check the calendar relative to the users timezone
     *
     * TODO if appointment already finalized disable, control with new variable
     *
     * Custom Action: https://developer.voiceflow.com/reference/custom-actions-1
     */
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("detected timezone: " + userTimeZone)
    console.log("detected date: " + date)
    console.log("value: " + value)
    await fetch(`https://general-runtime.voiceflow.com/state/user/${runtime.session.userID}/variables`, {
      method: 'PATCH',
      body: JSON.stringify({ appointment_date: date,
      user_timezone: userTimeZone
      }),
      headers: {
        authorization: import.meta.env.VF_DM_API_KEY,
        'content-type': 'application/json',
      },
    });

    return runtime.interact({
      type: 'done',
      payload: "c"});
  };

  return (
    <SystemResponse.SystemMessage {...props}>
      <Message from="system">
        <Calendar value={selectedDate} onChange={(next) => handleChange(next as Date)} />
      </Message>
    </SystemResponse.SystemMessage>
  );
};
