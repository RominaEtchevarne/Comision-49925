import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'

const NavBar = () => {

    return (
        <div>

            <Flex>
                <Box p='4'>
                    WineHouse
                </Box>
                <Spacer />




                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                <MenuList>
                    <MenuItem>Licores</MenuItem>
                    <MenuItem>Vinos</MenuItem>
                    <MenuItem>Whisky</MenuItem>
                </MenuList>
            </Menu>



            <Spacer />

                <Box p='4'>
                    <CartWidget/>
                </Box>
            
            </Flex>
            
            
        </div>
    )

}

export default NavBar