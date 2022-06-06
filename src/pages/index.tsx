import type { NextPage } from 'next'

import { Title } from '../ui/components/Title'
import { List } from '../ui/components/List'

const Home: NextPage = () => {

  return (

    <>
      <Title
        title="TESTE"
        subtitle={ <span>Com um pequeno valor mensal, você<br />pode <strong>adotar um pet virtualmente</strong></span> }
      />
      <List
        pets={[
          {
            id: 1,
            name: 'Maillow',
            history: 'dewiofnwejof',
            photo_url: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png'
          },
          {
            id: 2,
            name: 'Renato',
            history: 'dewiofnwejof',
            photo_url: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-2.png'
          }
        ]}
      />
    </>

  )

}

export default Home
