import React, {useEffect} from 'react';
import styles from './tabs.module.css';

export const Tabs = ({ children, variant, className, current }) => {
  const [selected, setSelected] = React.useState(0);

  useEffect(() => {
    if (current) {
      setSelected(current)
    }
  }, [current])

  const handleChange = index => {
    setSelected(index);
  };

  return (
    <div className={`grid grid-cols-1 grid-rows-1`}>
      <ul className={`${className} ${styles.inline} justify-self-center w-full`}>
        {children.map((elem, index) => {
          return (
            <li
              className={`${variant ? styles.item_light : styles.item} ${index === selected ? (variant ? styles.selected_light : styles.selected) : ''}`}
              key={index}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className={styles.tab}>{children[selected]}</div>
    </div>
  );
};

export const Panel = ({ children, title }) => {
  return <div title={title}>{children}</div>;
};
