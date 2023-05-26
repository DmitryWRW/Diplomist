import s from "./About.module.css";
import AboutCards from "./AboutDate";
export interface CardProps {
  num: string;
  text: string;
}
const About = () => {
  return (
    <div>
      <div className={s.aboutWrapper}>
        <div className={s.wrapper}>
          {AboutCards()}
          <div className={s.licenseWrapper}>
            <a href="">
              <img
                className={s.licenseImgLink}
                src="img\icons\about1.jpg"
                alt="license link"
              />
            </a>
            <p>
              Сведения о лицензии на осуществление образовательной
              <br /> деятельности от "30" октября 2019г. г. № 2864 серия 90Л01,
              <br /> номер бланка 0009978
            </p>
          </div>
          <div className={s.descWrappper}>
            <div className={s.descContent}>
              <div className={s.videoWrapper}>
                <img
                  src="img\icons\16_9 Youtube (600px).jpg"
                  alt="youtube screen"
                />
              </div>
              <div className={s.desc}>
                <div className={s.title}>
                  <p>Учись уже сейчас вместе с DiplomDist</p>
                </div>
                <div className={s.subTitle}>
                  <p>
                    Дистанционное образование основано на использовании
                    современных технологий и можно учиться удаленно. Это значит,
                    что многие расходы, присущие организации традиционного
                    обучения, сокращаются и не ложатся на плечи студентов.Вот
                    почему дистанционное обучение не только удобнее, но и
                    гораздо выгоднее!
                  </p>
                </div>
                <div>
                  <button className={s.descButton}>Все направления</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.inputWrapper}>
        <div className={s.wrapper}>
          <div className={s.inputContent}>
            <p className={s.inputTitle}>ПОСТУПИТЬ СЕЙЧАС!</p>
            <label htmlFor="nameInput">
              <input
                className={s.nameInput}
                id="nameInput"
                type="text"
                placeholder="имя"
              />
            </label>
            <label htmlFor="phoneInput">
              <input
                className={s.phoneInput}
                id="phoneInput"
                type="text"
                placeholder="ноиер телефона"
              />
            </label>
            <button className={s.inputButton}>перезвоните мне</button>
          </div>
        </div>
      </div>
      <div className={s.benefitsWrapper}>
        <div className={s.wrapper}>
          <div className={s.benefitsContent}>
            <div className={s.benefitsText}>
              <div className={s.benefitsTitle}>
                <p>Дистанционное образование</p>
              </div>
              <div className={s.benefitsSubTitle}>
                <p>
                  Дистанционное образование основано на использовании
                  современных технологий и можно учиться удаленно. Это значит,
                  что многие расходы, присущие организации традиционного
                  обучения, сокращаются и не ложатся на плечи студентов.Вот
                  почему дистанционное обучение не только удобнее, но и гораздо
                  выгоднее!
                </p>
              </div>
              <button className={s.benefitsButton}>Все направления</button>
            </div>
            <div className={s.benefitsImg}>
              <div className="">
                <img src="img\icons\benefits1.jpg" alt="directions img" />
                <p className={s.directionText}>Менеджмент</p>
              </div>
              <div className="">
                <img src="img\icons\benefits2.jpg" alt="directions img" />
                <p className={s.directionText}>Экономика</p>
              </div>
              <div className="">
                <img src="img\icons\benefits3.jpg" alt="directions img" />
                <p className={s.directionText}>Психология</p>
              </div>
              <div className="">
                <img src="img\icons\benefits4.jpg" alt="directions img" />
                <p className={s.directionText}>Реклама и маркетинг</p>
              </div>
              <div className="">
                <img src="img\icons\benefits5.jpg" alt="directions img" />
                <p className={s.directionText}>IT</p>
              </div>
              <div className="">
                <img src="img\icons\benefits6.jpg" alt="directions img" />
                <p className={s.directionText}>Юриспуденция</p>
              </div>
            </div>
          </div>
          <div className={s.benefitsLine}>
            <div className={s.benefitsItem}>
              <img
                className={s.benefitsIcon}
                src="img\icons\noroot 1.svg"
                alt="benefits icon"
              />
              <p>
                Дистанционное
                <br /> обучение
              </p>
            </div>
            <div className={s.benefitsItem}>
              <img src="img\icons\noroot 2.svg" alt="benefits icon" />
              <p>
                В любом возрасте, с любым
                <br /> базовым образованием
              </p>
            </div>
            <div className={s.benefitsItem}>
              <img
                className={s.benefitsIcon}
                src="img\icons\noroot 3.svg"
                alt="benefits icon"
              />
              <p>
                Сопровождение куратором
                <br /> весь период обучения
              </p>
            </div>
            <div className={s.benefitsItem}>
              <img
                className={s.benefitsIcon}
                src="img\icons\noroot 4.svg"
                alt="benefits icon"
              />
              <p>
                Диплом
                <br /> Гос. образца
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
