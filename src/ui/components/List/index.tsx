import { Button } from '@mui/material'

import { Scroll, Item, Photo, Informations, Name, Description } from './styles'

import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps { pets: Pet[]; }

export const List = ({ pets }: ListProps) => {
    const textMaxLength = 200

    return (

        <Scroll>

            { pets.map( pet => (
                <Item key={ pet.id }>
                    <Photo src={ pet.photo_url } alt={ pet.name } />
                    <Informations>

                        <Name>{ pet.name }</Name>
                        <Description>{ TextService.limitText(pet.history, textMaxLength) }</Description>
                        <Button fullWidth variant={'contained'}>Adopt { pet.name }</Button>

                    </Informations>
                </Item>
            ))}

        </Scroll>
        
    )

}