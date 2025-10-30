import React from 'react'
import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu';

function Navbar() {
    return (
        <NavigationMenu className='h-16 w-full px-15 fixed text-white' >
            <NavigationMenuLink className='text-xl'>
                LINX
            </NavigationMenuLink>

            <div className="ms-auto flex gap-4">
                <NavigationMenuLink>
                    About
                </NavigationMenuLink>
                <NavigationMenuLink className='bg-white text-black px-4 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:text-white'>
                    Sign Up
                </NavigationMenuLink>
            </div>
        </NavigationMenu>
    )
}

export default Navbar