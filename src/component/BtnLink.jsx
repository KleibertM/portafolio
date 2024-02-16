import { Link, Button, Tooltip } from '@chakra-ui/react'

const BtnLink = ({ link, icon, name }) => {
    return (
        <Tooltip label={name } placement='top' bg={'#2E4053'} color={'white'}>
            <Button borderRadius={50} h={['20px', '50px']} w={['20px', '50px']} fontSize={'2rem'} color='#000' border={'1px solid #000'} bg='white'>
                <Link href={link} target='_blank' >
                    {icon}
                </Link>
            </Button>
        </Tooltip>
    )
}

export default BtnLink