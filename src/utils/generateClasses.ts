import { ResponsiveLayoutProps, StyleProps } from '../interfaces/StylePropsInterface';

export const generateStyleClasses = (props: StyleProps): string => {
  const classes: string[] = [];

  // Margin
  if (props.mt !== undefined) classes.push(`mt-${props.mt}`);
  if (props.mr !== undefined) classes.push(`mr-${props.mr}`);
  if (props.mb !== undefined) classes.push(`mb-${props.mb}`);
  if (props.ml !== undefined) classes.push(`ml-${props.ml}`);
  if (props.mx !== undefined) classes.push(`mx-${props.mx}`);
  if (props.my !== undefined) classes.push(`my-${props.my}`);

  // Padding
  if (props.pt !== undefined) classes.push(`pt-${props.pt}`);
  if (props.pr !== undefined) classes.push(`pr-${props.pr}`);
  if (props.pb !== undefined) classes.push(`pb-${props.pb}`);
  if (props.pl !== undefined) classes.push(`pl-${props.pl}`);
  if (props.px !== undefined) classes.push(`px-${props.px}`);
  if (props.py !== undefined) classes.push(`py-${props.py}`);

  // Display
  if (props.display) classes.push(props.display);
  if (props.flex) classes.push('flex');
  if (props.grid) classes.push('grid');

  // Width & Height
  if (props.w) classes.push(`w-${props.w}`);
  if (props.h) classes.push(`h-${props.h}`);

  // Alignment
  if (props.align) classes.push(`items-${props.align}`);
  if (props.justify) classes.push(`justify-${props.justify}`);
  if (props.flexDirection) classes.push(`flex-${props.flexDirection}`);

  // Responsive Layouts
  ['sm', 'md', 'lg', 'xl'].forEach((breakpoint) => {
    const responsiveProps = props[breakpoint as keyof ResponsiveLayoutProps];
    if (responsiveProps) {
      const responsiveClasses = generateStyleClasses(responsiveProps as StyleProps);
      if (responsiveClasses) {
        classes.push(`${breakpoint}:${responsiveClasses}`);
      }
    }
  });

  return classes.join(' ');
};
