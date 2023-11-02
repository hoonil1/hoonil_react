import css from "../style/mystyle.module.css";

export function MyText() {
  return (
    <div>
      <h1 className={`${css.error} ${css.coffee} ${css.special}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[css.coffee, css.special, css.error].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
