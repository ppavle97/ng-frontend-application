'use client';
import React from 'react';
import { StyledContent } from './Content.styled';
import { ContentProps } from './types';

export const Content = ({ children, size }: ContentProps) => {
	return (
		<StyledContent size={size}>
			<div className='main'>{children}</div>
		</StyledContent>
	);
};
