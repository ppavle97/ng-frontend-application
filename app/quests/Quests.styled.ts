import styled from 'styled-components';

export const StyledQuestsList = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacing.l};
	align-content: flex-start;

	& > * {
		flex: 0 0 calc(33.33% - 20px);
		min-height: 230px;
	}

	@media (max-width: 1280px) {
		& > * {
			flex: 0 0 calc(50% - 20px);
		}
	}

	@media (max-width: 992px) {
		& > * {
			flex: 0 0 calc(70%);
			margin: auto;
		}
	}
	@media (max-width: 768px) {
		& > * {
			flex: 0 0 calc(90%);
		}
	}
	@media (max-width: 576px) {
		padding: ${({ theme }) => theme.spacing.xs};
		& > * {
			flex: 0 0 calc(100%);
		}
	}
`;
