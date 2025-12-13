let notifBox: HTMLDivElement | null = null;
let notifMsgBox: HTMLSpanElement | null = null;

export const removeNotification = () => {
  if (notifBox && notifMsgBox) {
    notifMsgBox.innerHTML = "";

    notifBox.classList.remove("notif-shown");
    notifBox.classList.add("notif-hidden");
  }
};

export const addNotification = (
  msg: string,
  autoClose: boolean = true,
  screenTime: number = 3
) => {
  if (notifBox && notifMsgBox) {
    notifMsgBox.innerHTML = "";
    notifMsgBox.innerHTML = msg;
    notifBox.classList.remove("notif-hidden");
    notifBox.classList.add("notif-shown");

    if (autoClose) {
      setTimeout(() => {
        removeNotification();
      }, screenTime * 1000);
    }
  }
};

const initNotifUi = () => {
  notifBox = document.getElementById("notif-box") as HTMLDivElement;
  notifMsgBox = document.getElementById("notif-msg-box") as HTMLDivElement;
};

initNotifUi();
