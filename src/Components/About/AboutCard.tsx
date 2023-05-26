import s from "./AboutCard.module.css";
export interface AboutDateProps {
  num: string;
  text: string;
}
const AboutCard = (props: AboutDateProps) => {
  return (
    <div className={s.dateItem}>
      <p className={s.aboutNum}>{props.num}</p>
      <p className={s.aboutText}>{props.text}</p>
    </div>
  );
};
export default AboutCard;
