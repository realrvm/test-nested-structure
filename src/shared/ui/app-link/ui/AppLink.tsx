import { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./styles.module.scss";

type AppLinkProps = {
  to: string;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const { to, children, ...other } = props;

  return (
    <Link to={to} className={styles.link} {...other}>
      {children}
    </Link>
  );
});
