import { cinzel } from '@/styles/GlobalStyles';
import styled from 'styled-components';
import { StyledQuestItemProps } from './types';

export const StyledQuestItem = styled.div<StyledQuestItemProps>`
	box-sizing: border-box;
	border: ${({ detailed }) => (detailed ? '' : 'solid 1px')};
	border-color: ${({ theme }) => theme.colors.gold};
	padding: ${({ theme }) => theme.spacing['xs']};
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};
	height: ${({ detailed }) => (detailed ? '100%' : '')};
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: ${({ cover }) => (cover ? 'flex-start' : 'center')};

	&:hover {
		cursor: ${({ detailed }) => (detailed ? '' : 'pointer')};
	}

	@media (max-width: 576px) {
		padding: ${({ theme }) => theme.spacing['2xs']};
	}

	.cover {
		width: 100%;
		height: ${({ detailed }) => (detailed ? '170px' : '80px')};
	}

	.content {
		display: flex;
		flex-direction: column;
		&-head {
			display: flex;
		}
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
				flex-direction: ${({ detailed }) => (detailed ? 'row' : 'column')};
				@media (max-width: 768px) {
					flex-direction: column;
				}

				&-item {
					display: flex;
					justify-content: flex-end;
					align-items: space-between;
					margin: ${({ theme }) => theme.spacing['2xs']} ${({ theme }) => theme.spacing['2xs']} 0 0;
					img {
						width: 20px;
						height: 20px;
					}
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
			width: 12px;
			height: 12px;
		}

		&-description {
			font-size: 14px;
			line-height: 19px;
			color: ${({ theme }) => theme.colors.grey};
			margin-top: ${({ theme }) => theme.spacing['3xs']};
			padding-bottom: ${({ theme }) => theme.spacing['3xl']};
		}
	}
	.btn {
		padding: ${({ theme }) => theme.spacing['3xs']} ${({ theme }) => theme.spacing['m']};
		border-radius: 10px;
		border: solid 1px ${({ theme }) => theme.colors.darkGrey};
		background-color: transparent;
		color: ${({ theme }) => theme.colors.gold};
		font-weight: ${cinzel.style.fontWeight};
		font-family: ${cinzel.style.fontFamily};
		font-size: 16px;

		@media (max-width: 768px) {
			padding: ${({ theme }) => theme.spacing['4xs']} ${({ theme }) => theme.spacing['s']};
			font-size: 14px;
		}
		@media (max-width: 576px) {
			font-size: 12px;
			margin-top: ${({ theme }) => theme.spacing['4xs']};
		}

		&:hover {
			cursor: pointer;
		}

		&:disabled {
			opacity: 0.4;
			&:hover {
				cursor: not-allowed;
			}
		}

		&:nth-child(2) {
			color: ${({ theme }) => theme.colors.black};
			background-color: ${({ theme }) => theme.colors.gold};
			border: none;
		}

		&-group {
			flex: 1;
			bottom: ${({ theme }) => theme.spacing['2xs']};
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			@media (max-width: 576px) {
				flex-direction: column;
			}
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
