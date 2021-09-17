import React from 'react';
import styles from './Tabs.module.css';

export const Tabs = ({ children, variant }) => {
  const [selected, setSelected] = React.useState(0);

  const handleChange = index => {
    setSelected(index);
  };

  console.log(children);
  return (
    <div>
      <ul className={styles.inline}>
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
