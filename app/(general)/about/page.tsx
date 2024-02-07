//mr snipett

import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['About Page', 'Antonio', 'Información','... info conectada a BD']
};

export default function AboutPage() {
    return(
        <span className="text-7xl">About Page</span>
    )
}