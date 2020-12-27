import React from "react";
import { bool } from "prop-types";
import * as S from "./BurgerMenu.style";

function Menu({ open, links }) {
  return (
    <S.StyledMenu open={open}>
      {links &&
        links.map((link) => {
          return (
            <S.StyledLink key={link.to} to={`/${link.to}`}>
              {link.name}
            </S.StyledLink>
          );
        })}
    </S.StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
