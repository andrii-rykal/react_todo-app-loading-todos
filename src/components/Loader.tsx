import classNames from 'classnames';
import React from 'react';

export const Loader: React.FC = () => (
  <div
    data-cy="TodoLoader"
    className={classNames('modal overlay', {
      'is-active': false,
    })}
  >
    <div className="modal-background has-background-white-ter" />
    <div className="loader" />
  </div>
);
