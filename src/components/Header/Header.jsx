import React, { useState } from "react";
import * as S from "./Header.style";
import logo from "../../assets/seathustler.png";
import { Link } from "react-router-dom";
import { Burger, BurgerMenu, Button } from "../../components";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <S.Header>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu
        open={open}
        setOpen={setOpen}
        links={[
          {
            to: "",
            name: "Home",
          },
          {
            to: "faq",
            name: "FAQ",
          },
          {
            to: "deals",
            name: "Deals",
          },
          {
            to: "contactUs",
            name: "Contact Us",
          },
          {
            to: "news",
            name: "News!",
          },
        ]}
      />
      <Link to="/">
        <S.Logo src={logo} alt="logo" />
      </Link>
      <Button className="small" color="primary">
        Subscribe now
      </Button>
    </S.Header>
  );
}

export default Header;
