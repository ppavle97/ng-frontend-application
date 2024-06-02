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
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;

		@media (max-width: 768px) {
			width: ${({ size }) => (size === 'large' ? '90%' : '90%')};
			min-height: ${({ size }) => (size === 'large' ? '70vh' : '500px')};
			height: ${({ size }) => (size === 'large' ? '' : 'auto')};
		}
	}
`;
