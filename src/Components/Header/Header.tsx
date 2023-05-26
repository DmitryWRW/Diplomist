import s from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={s.header}>
        <div className={s.wrapper}>
          <div className={s.header_content}>
            <div className={s.header_nav}>
              <a href="" className={s.header_link}>
                Главная
              </a>
              <a href="" className={s.header_link}>
                О нас
              </a>
              <a href="" className={s.header_link}>
                Бакалавриат
              </a>
              <a href="" className={s.header_link}>
                Магистратура
              </a>
              <a href="" className={s.header_link}>
                Колледж
              </a>
              <a href="" className={s.header_link}>
                Блог
              </a>
              <a href="" className={s.header_link}>
                Контакты
              </a>
            </div>
            <div className="header-info">
              <div className={s.header_phone}>
                <img src="img\icons\header-cafe_phone.svg" alt="phone-icon" />
                <p>8 800 000 00 00</p>
              </div>
              <div className={s.header_location}>
                <img src="img\icons\header-location.svg" alt="location-icon" />
                <p>г.Ростов-на-Дону</p>
              </div>
            </div>
            <div>
              <button className={s.header_button}>Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
