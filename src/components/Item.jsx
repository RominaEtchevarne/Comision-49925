import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, CardFooter,ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Item = ({titulo, descricpion, precio, categoria, id, img }) => {

    return(
        <Card maxW='sm'>
    <CardBody>

    <Stack mt='6' spacing='3'>
    <Heading size='md'>{titulo}</Heading>
    
    </Stack>
</CardBody>
<Divider />
<CardBody>

    <Stack mt='6' spacing='3'>
    <Heading size='md'>{descricpion}</Heading>
    
    </Stack>
</CardBody>
<Divider />
<CardBody>

    <Stack mt='6' spacing='3'>
    <Heading size='md'>{precio}</Heading>
    
    </Stack>
</CardBody>
<Divider />
<CardFooter>
    <ButtonGroup spacing='2'>
        <Button>Ver detalle</Button>
    </ButtonGroup>
</CardFooter>
</Card>
    )
}

export default Item