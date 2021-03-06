import { fireEvent } from "../../../common/dom/fire_event";

export const loadNewAutomationDialog = () =>
  import(/* webpackChunkName: "thingtalk-dialog" */ "./dialog-new-automation");

export const showNewAutomationDialog = (element: HTMLElement): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "ha-dialog-new-automation",
    dialogImport: loadNewAutomationDialog,
    dialogParams: {},
  });
};
