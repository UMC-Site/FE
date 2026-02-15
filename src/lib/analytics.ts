import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
};

export const logPageView = (path: string, title?: string) => {
  if (!import.meta.env.PROD) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title,
  });
};
