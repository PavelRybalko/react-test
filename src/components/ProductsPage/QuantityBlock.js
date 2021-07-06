import s from './QuantityBlock.module.css';

export default function QuantityBlock({ handleChange, productAmount }) {
  return (
    <div className={s.quantityBlock}>
      <button
        type="button"
        name="decrement"
        className={s.quantityArrowMinus}
        onClick={handleChange}
      >
        {' '}
        -{' '}
      </button>
      <input
        name="quantity"
        className={s.quantityNum}
        type="number"
        min="1"
        value={productAmount}
        onChange={handleChange}
        // size="2"
        // className={s.buyCounter}
      />
      <button
        type="button"
        name="increment"
        className={s.quantityArrowPlus}
        onClick={handleChange}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
}
