//Server component (lado del servidor)
//pueden ser async

import { ActiveLink } from "@/components";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
//Link a diferencia de 'a' genera un script para no hacer un full refresh de la app para cambiarnos de ruta.

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {

    console.log('Navbar creado');
    
        
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2"/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} {...navItem}/>
                ))
            }
        </nav>
    )
}
