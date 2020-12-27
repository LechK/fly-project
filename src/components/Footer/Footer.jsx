import React from "react";
import * as S from "./Footer.style";

function Footer({ email, links, copyright }) {
  return (
    <S.Footer>
      <S.Heading>Want to reach us?</S.Heading>
      <S.Email href={`mailto:${email}`}>{email}</S.Email>
      <S.Navigation>
        {links &&
          links.map((link) => {
            return (
              <S.Link key={link.to} href={`/${link.to}`}>
                {link.name}
              </S.Link>
            );
          })}
      </S.Navigation>
      <S.Copyright>{copyright}</S.Copyright>
    </S.Footer>
  );
}

export default Footer;
