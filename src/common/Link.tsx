import { Link as WouterLink, useRoute } from "wouter";

const Link = (props: any) => {
  const [isActive] = useRoute(props.href);

  return (
    <WouterLink {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </WouterLink>
  );
};

export default Link;
