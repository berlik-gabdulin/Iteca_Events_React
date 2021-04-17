import styled from "styled-components";

export const Loader = () => {
	return (
		<LoaderWrapper>
			<img src="../img/loader.svg" alt="" />
		</LoaderWrapper>
	);
};

const LoaderWrapper = styled.div`
	max-width: 100px;
	img {
		width: 100%;
	}
`;
