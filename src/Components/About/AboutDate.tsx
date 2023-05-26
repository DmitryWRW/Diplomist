import AboutCard, { AboutDateProps } from "./AboutCard";
import s from "./AboutCard.module.css";
const params: AboutDateProps[] = [
  { num: "1837", text: "студентов получают высшее образование благодаря нам" },
  { num: "5100 +", text: "выпускников, успешно прошедших обучение" },
  { num: "24/7", text: "Сопровождение куратора, весь период обучения в ВУЗе" },
  {
    num: "-20%",
    text: "наша цена выгоднее на 20% чем при оплате напрямую в ВУЗ",
  },
];

const AboutCards = () => {
  return (
    <div className={s.date}>
      {params.map((item) => (
        <AboutCard num={item.num} text={item.text} />
      ))}
    </div>
  );
};
export default AboutCards;
