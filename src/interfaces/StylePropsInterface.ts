export interface ResponsiveLayoutProps {
  sm?: StyleProps;
  md?: StyleProps;
  lg?: StyleProps;
  xl?: StyleProps;
}

export interface StyleProps extends ResponsiveLayoutProps {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  px?: number | string;
  py?: number | string;
  display?: string;
  flex?: boolean;
  grid?: boolean;
  w?: number | string;
  h?: number | string;
  align?: string;
  justify?: string;
  flexDirection?: string;
}
