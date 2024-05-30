export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '1024px',
	lg: '1280px',
	xl: '1440px',
	xxl: '1560px',
	xxxl: '1800px'
};

export const breakpoint = (size: keyof typeof breakpoints) => (styles: string) =>
	`
  @media (min-width: ${breakpoints[size]}) {
    ${styles}
  }
`;

export const breakpointMax = (size: keyof typeof breakpoints) => (styles: string) =>
	`
  @media (max-width: ${breakpoints[size]}) {
    ${styles}
  }
`;
