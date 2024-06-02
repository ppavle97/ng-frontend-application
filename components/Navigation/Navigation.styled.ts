import { cinzel } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
	list-style: none;
	padding: 0 ${({ theme }) => theme.spacing['2xl']};
	margin: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;

	@media (max-width: 768px) {
		padding: 0 ${({ theme }) => theme.spacing['m']};
	}

	.logo {
		height: 30px;
		width: 60px;
	}

	.menu {
		display: flex;
		align-items: center;

		&-avatar {
			width: 46px;
			height: 46px;
			margin-left: ${({ theme }) => theme.spacing['4xs']};
		}

		&-divider {
			width: 10px;
			height: 10px;
		}

		&-item {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0px ${({ theme }) => theme.spacing['2xs']};

			@media (max-width: 768px) {
				margin: 0px ${({ theme }) => theme.spacing['3xs']};
			}

			&-icon {
				height: 20px;
			}

			p {
				color: ${({ theme }) => theme.colors.gold};
				margin-left: ${({ theme }) => theme.spacing['4xs']};
				font-family: ${cinzel.style.fontFamily};
				font-weight: ${cinzel.style.fontWeight};
				font-size: 14px;
				letter-spacing: 4%;
				@media (max-width: 768px) {
					font-size: 12px;
				}
			}
		}
	}
`;
