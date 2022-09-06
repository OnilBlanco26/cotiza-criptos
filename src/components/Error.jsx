import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #e30000;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    box-shadow: #e30000 3px 6px 5px;
    opacity: 90%;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error