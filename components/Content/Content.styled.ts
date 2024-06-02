import styled from 'styled-components';
import { StyledContentProps } from './types';

export const StyledContent = styled.div<StyledContentProps>`
	width: 100%;
	max-width: 1920px;
	margin: auto;
	height: calc(100vh - 70px);
	display: flex;
	justify-content: center;
	align-items: center;

	.main {
		height: ${({ size }) => (size === 'large' ? '80vh' : '500px')};
		width: ${({ size }) => (size === 'large' ? '85%' : '720px')};
		background-color: ${({ theme }) => theme.colors.black};
		border: solid 1px ${({ theme }) => theme.colors.gold};

		@media (max-width: 768px) {
			width: ${({ size }) => (size === 'large' ? '90%' : '90%')}; // Adjust width for smaller screens
			min-height: ${({ size }) => (size === 'large' ? '70vh' : '400px')}; // Adjust height for smaller screens
		}
	}
`;
