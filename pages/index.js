import NextLink from "next/link";

function Title({children, as}) {
    const Tag = as;
    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
              ${Tag} {
                color: red;
                font-family: sans-serif;
              }
            `}
            </style>
        </>
    )
}

export default function HomePage() {
    return (
        <>
            <Title as="h1">Alura Cases - Homepage</Title>
            <NextLink href='/faq'>Ir para a página do FAQ</NextLink>
        </>
    )
}