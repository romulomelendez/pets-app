import { Button } from '@mui/material'

import { Scroll, Item, Photo, Informations, Name, Description } from './styles'

import { Pet } from '../../../data/@types/Pet'

interface ListProps { pets: Pet[]; }

export const List = ({ pets }: ListProps) => {

    return (

        <Scroll>

            { pets.map( pet => (
                <Item key={ pet.id }>
                    <Photo src={ pet.photo_url } alt={ pet.name } />
                    <Informations>

                        <Name>{ pet.name }</Name>
                        <Description>{ pet.history }</Description>
                        <Button fullWidth variant={'contained'}>Adopt { pet.name }</Button>

                    </Informations>
                </Item>
            ))}

        </Scroll>
        
    )

}