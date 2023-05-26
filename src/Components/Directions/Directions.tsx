import s from "./Directions.module.css";
const Directions = () => {
  return (
    <div className={s.directionsWrapper}>
      <div className={s.wrapper}>
        <div className={s.directionsTitle}>
          <div className={s.titleIcon}>
            <img src="img\icons\about1.jpg" alt="icon" />
          </div>
          <div className={s.title}>
            <p>
              ВЫБИРАЙ СВОЮ <span className={s.titleSpan}>ТРАЕКТОРИЮ</span>{" "}
              ОБУЧЕНИЯ
            </p>
          </div>
        </div>
        <div className={s.buttonsLine}>
          <button className={s.button}>Колледж</button>
          <button className={s.button}>Бакалавриат</button>
          <button className={s.button}>Магистратура</button>
          <button className={s.button}>Специалитет</button>
        </div>
      </div>
    </div>
  );
};
export default Directions;
