import { Link, Button, Tooltip } from '@chakra-ui/react';

const BtnLink = ({ link, icon, name, color }) => {
    return (
        <>
            {link ? (
                <Tooltip label={name} placement='top' bg={color} color='white'>
                    <Button borderRadius={100} h={['50px', '50px']} w={['50px', '50px']} fontSize={'2rem'} color={color} border={'1px solid #000'} bg='white' name={name}>
                        <Link href={link} target='_blank' >
                            {icon}
                        </Link>
                    </Button>
                </Tooltip>
            ) : null}
        </>
    );
}

export default BtnLink;
