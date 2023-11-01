import "../style/mystyle.module.css";

export function MyText() {
  return (
    <div>
      <h1 className={`${css.error} ${css.coffee} ${css.special}`}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
