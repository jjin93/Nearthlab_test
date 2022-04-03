import styled from "styled-components";

const Pagination = ({ meta, handleSetPage}) => {
  let maxPage = meta.maxPage;
  let currentPage = meta.currentPage;
  let offset = Math.floor((currentPage - 1) / 5); 

  return (
    <>
      <Nav>
      <Button onClick={() => handleSetPage((offset-1)*5 + 1)} disabled={offset === 0}>
          &lt;&lt;
        </Button>
        <Button onClick={() => handleSetPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </Button>
        {Array(5)
          .fill()
          .map((_, i) => (
            (i + 1 + (offset*5) <= maxPage) ? (<Button key={i + 1 + (offset*5)} onClick={() => handleSetPage(i + 1 + (offset*5))} aria-current={currentPage === i + 1 + (offset*5) ? "page" : null}>
            {i + 1 + (offset*5)}
          </Button>) : (null)            
          ))}
        <Button onClick={() => handleSetPage(currentPage + 1)} disabled={currentPage === maxPage}>
          &gt;
        </Button>
        <Button onClick={() => handleSetPage((offset+1)*5 + 1)} disabled={offset === parseInt(maxPage/5)}>
          &gt;&gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
