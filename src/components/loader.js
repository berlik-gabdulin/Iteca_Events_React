import styled from "styled-components";

export const Loader = () => {
	return (
		<LoaderWrapper>
			<img src="../img/loader.svg" alt="" />
		</LoaderWrapper>
	);
};

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	img {
		width: 100%;
		max-width: 100px;
	}
`;
