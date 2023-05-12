import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SimpleTable = ({ classNameContainer, children, ...props }) => {
  return (
    <div className={`${style['simple-table-container']} ${classNameContainer}`}>
      <table className={style['simple-table']}>{children}</table>
    </div>
  );
};

SimpleTable.Head = ({ children, ...props }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

SimpleTable.HeadContent = ({ content, ...props }) => {
  return <th className={style['simple-table-th']}>{content}</th>;
};

SimpleTable.Body = ({ children, ...props }) => {
  return <tbody>{children}</tbody>;
};

SimpleTable.BodyTr = ({ children, ...props }) => {
  return <tr className={style['simple-table-tr']}>{children}</tr>;
};

SimpleTable.BodyContent = ({ children, ...props }) => {
  return <td className={style['simple-table-td']}>{children}</td>;
};

SimpleTable.propTypes = {
  classNameContainer: PropTypes.string,
};

SimpleTable.defaultProps = {
  classNameContainer: '',
};

SimpleTable.Head.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

SimpleTable.Head.displayName = 'SimpleTable.Head';

SimpleTable.HeadContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

SimpleTable.HeadContent.displayName = 'SimpleTable.HeadContent';

SimpleTable.Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

SimpleTable.Body.displayName = 'SimpleTable.Body';

SimpleTable.BodyTr.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

SimpleTable.BodyTr.displayName = 'SimpleTable.BodyTr';

SimpleTable.BodyContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

SimpleTable.BodyContent.displayName = 'SimpleTable.BodyContent';

export default SimpleTable;
