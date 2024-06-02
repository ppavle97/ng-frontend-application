import { cinzel } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const StyledQuestItem = styled.div`
	box-sizing: border-box;
	border: solid 1px ${({ theme }) => theme.colors.gold};
	padding: ${({ theme }) => theme.spacing['xs']};
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};

	@media (max-width: 576px) {
		padding: ${({ theme }) => theme.spacing['2xs']};
	}

	.cover {
		width: 100%;
		height: 80px;
	}

	.item {
		display: flex;

		&-left {
			margin-right: ${({ theme }) => theme.spacing['4xs']};
			width: 75%;

			.name {
				margin: ${({ theme }) => theme.spacing['4xs']} 0 0;
				font-weight: ${cinzel.style.fontWeight};
				font-family: ${cinzel.style.fontFamily};
				font-size: 18px;
				@media (max-width: 576px) {
					font-size: 16px;
				}
			}
			&-properties {
				display: flex;
				margin-top: ${({ theme }) => theme.spacing['3xs']};
				flex-wrap: wrap;
			}
		}
		&-right {
			width: 25%;
			display: flex;
			justify-content: flex-end;
			.reward {
				display: flex;
				flex-direction: column;
				&-item {
					display: flex;
					justify-content: flex-end;
					align-items: space-between;
					margin: ${({ theme }) => theme.spacing['2xs']} 0 0;
					p {
						font-weight: ${cinzel.style.fontWeight};
						font-family: ${cinzel.style.fontFamily};
						font-size: 14px;
						margin: 0 0 0 ${({ theme }) => theme.spacing['4xs']};
						@media (max-width: 576px) {
							font-size: 12px;
						}
					}
				}
			}
		}
		&-difficulty {
			margin-right: ${({ theme }) => theme.spacing['5xs']};
		}
	}

	.attribute-box {
		border: solid 1px ${({ theme }) => theme.colors.grey};
		padding: 0 ${({ theme }) => theme.spacing['4xs']};
		margin: 0 ${({ theme }) => theme.spacing['4xs']} ${({ theme }) => theme.spacing['4xs']} 0;
		height: 35px;
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		@media (max-width: 576px) {
			height: 30px;
		}

		p {
			margin: 0;
			padding: 0;
			font-size: 14px;

			@media (max-width: 576px) {
				font-size: 12px;
			}
		}
	}
`;
