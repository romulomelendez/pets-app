import { Heading, Subtitle } from './styles'

interface TitleProps {

    title?: string,
    subtitle: string | JSX.Element

}

export const Title = ({ title, subtitle }: TitleProps) => {

    return (

        <>
            <Heading>{ title }</Heading>
            <Subtitle>{ subtitle }</Subtitle>
        </>

    )

}