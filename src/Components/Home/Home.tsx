import s from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.main_content}>
            <div className={s.main_icons_and_img}>
              <div className={s.icons}>
                <img
                  className={s.home_icon}
                  src="img\icons\facebook.svg"
                  alt="facebook-icon"
                />
                <img
                  className={s.home_icon}
                  src="img\icons\vk.svg"
                  alt="vk-icon"
                />
                <img
                  className={s.home_icon}
                  src="img\icons\inst.svg"
                  alt="instagram-icon"
                />
              </div>
              <div className={s.left_img_wrapper}>
                <div className={s.left_img_container}>
                  <img
                    className={s.left_img}
                    src="img\icons\1.png"
                    alt="left img"
                  />
                </div>
              </div>
            </div>
            <div className={s.main_text_and_button}>
              <div className={s.main_text1}>
                <p>25 лет помогаем получить образование</p>
              </div>
              <div className={s.main_text2}>
                <p>
                  Подбери программу обучения и узнай, какая профессия тебе
                  подходит
                </p>
              </div>
              <div>
                <button className={s.main_button}>Все направления</button>
              </div>
            </div>
            <div className={s.right_img_and_text}>
              <div className={s.right_img_container}>
                <img
                  className={s.right_img}
                  src="img\icons\2.png"
                  alt="right img"
                />
              </div>
              <div className={s.text_container}>
                <p className={s.main_text}>← Листайте вниз</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
