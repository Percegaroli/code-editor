/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SiHtml5, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import { FileExtension } from './FileExtension';
import { FileIconProps } from './interface';

const IconMap = new Map([
  [
    FileExtension.JAVASCRIPT,
    (props: any) => <SiJavascript color="yellow" {...props} />,
  ],
  [
    FileExtension.TYPESCRIPT,
    (props: any) => <SiTypescript color="blue" {...props} />,
  ],
  [FileExtension.HTML, (props: any) => <SiHtml5 color="red" {...props} />],
  [FileExtension.JSX, (props: any) => <SiReact color="yellow" {...props} />],
  [FileExtension.TSX, (props: any) => <SiReact color="blue" {...props} />],
]);

const FileIcon = ({
  fileExtension,
  className = '',
  width = 16,
  height = 16,
}: FileIconProps) => {
  const Icon = IconMap.get(fileExtension);
  if (Icon) {
    return <Icon width={width} height={height} className={className} />;
  }
  return <div style={{ width, height }} className={className} />;
};

export default FileIcon;
