/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

const HeadlessButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props} />;
};

export default HeadlessButton;
