import onlineIcon from "/images/icon-online.svg";
import budgeting from "/images/icon-budgeting.svg";
import onboarding from "/images/icon-onboarding.svg";
import api from "/images/icon-api.svg";

export const cart = {
  1: {
    cartImgAddress: { onlineIcon },
    cartName: "Online Banking",
    cartPara:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  2: {
    cartImgAddress: { budgeting },
    cartName: "Simple Budgeting",
    cartPara:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  3: {
    cartImgAddress: { onboarding },
    cartName: "Fast Onboarding",
    cartPara:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  4: {
    cartImgAddress: { api },
    cartName: "Open API",
    cartPara:
      " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
};
