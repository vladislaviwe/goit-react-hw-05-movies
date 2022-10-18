import { Dna } from  'react-loader-spinner'
import { LoaderContainer } from './LoaderStyled'

export default function Loader() {
  return (
    <LoaderContainer>
      <Dna
          visible={true}
          height="400"
          width="400"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
      />
    </LoaderContainer>
  )
}


