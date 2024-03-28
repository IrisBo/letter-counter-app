import React from "react";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
<footer />;

import {
  titleData,
  subTitleData,
  linkFacebook,
  linkInsta,
  linkLinkedin,
} from "../../data/Header and Footer data ";
import { CharsCounter } from "../charsCounter/CharsCounter";

export function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header title={titleData} subTitle={subTitleData} />
      </div>
      <div className="counter-fun"></div>
      <div>
        <CharsCounter />
      </div>
      <div className="footer">
        <Footer
          linkFacebook={linkFacebook}
          linkInsta={linkInsta}
          linkLinkedin={linkLinkedin}
        />
      </div>
    </div>
  );
}
