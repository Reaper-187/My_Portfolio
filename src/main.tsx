import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./components/utils/i18n/index.i18n.ts";
import { LangSwitch } from "./components/Language-Changer/LangSwitch.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <App />
    <LangSwitch setFlex={true} />
  </StrictMode>,
);
