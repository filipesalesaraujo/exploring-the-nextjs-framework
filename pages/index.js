import Link from "next/link";
import NextLink from "next/link";

export default function HomePage() {
    return (
        <>
            <h1>Alura Cases - Homepage</h1>
           <NextLink href='/faq'>Ir para a página do FAQ</NextLink>
        </>
    )
}