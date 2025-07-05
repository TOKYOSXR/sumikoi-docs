import Image from 'next/image'
export default function Navbar(){
    return(
        <header className='Flex justify-center items-center'>
            <nav>
                <Image
                    src="/SumiKoi_logo-sem-escita.png"
                    alt='Logo da Sumikoi'
                    width={250}
                    height={250}
                />
            </nav>
        </header>
    )
}