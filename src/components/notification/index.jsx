import React from "react";
import css from "./notification.css";
import { useSelector } from "react-redux";
import { getNotifications } from "../../modules/ui/selectors";

const notificationTypeClassNameMap = {
  info: css.notificationInfo,
  success: css.notificationSuccess,
  failure: css.notificationFailure,
};

const Notification = ({ type, text }) => {
  return (
    <div
      className={`
        ${css.notification} 
        ${notificationTypeClassNameMap[type]}
        `}
    >
      {text}
    </div>
  );
};

export const NotificationContainer = () => {
  const notifications = useSelector(getNotifications);

  return (
    <div className={css.notificationsContainer}>
      {notifications.map(({ id, text, type, title }) => (
        <Notification key={id} text={text} type={type} title={title} />
      ))}
    </div>
  );
};
