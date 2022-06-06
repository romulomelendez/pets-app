import type { NextPage } from 'next'
import { Title } from '../ui/components/Title'

const Home: NextPage = () => {

  return (

    <>
      <Title
        title="TESTE"
        subtitle={ <span>Com um pequeno valor mensal, você<br />pode <strong>adotar um pet virtualmente</strong></span> }
      />
    </>

  )

}

export default Home
