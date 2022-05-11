import sectionStyle from "../styles/SectionMain.module.css";

export default function MainLeft() {
  return (
    <section className={sectionStyle.left_parent_container}>
      <div className={sectionStyle.text_container}>
        <h1>
          Changing <br />
          the world <br />
          with <br />
          technology <br />
        </h1>
      </div>
      <div className={sectionStyle.achievements}>
        <p>
          <span>1M+</span>
          <br />
          Annual Revenue
        </p>
        <p>
          <span>9.5*</span>
          <br />
          Customer Rating
        </p>
      </div>
    </section>
  );
}
