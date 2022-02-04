import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import { useRouter } from "next/router";

import style from './style.module.css'

export default function Footer() {
    const router = useRouter()

    return (
        <footer className={style.footer}>
            <div>
                <Image src="/images/logo-branca.webp" alt="Logo Cred Lemes" width={2110} height={274} />
            </div>

            <div>
                <h2>Precisa de ajuda?</h2>
                <button onClick={() => router.push("https://api.whatsapp.com/send/?phone=5521990045906&text&app_absent=0")}><FaWhatsapp/>FALE COM A GENTE</button>
                <p>Fale com a gente no whatsapp. Nossa equipe de atendimento está disponível para te atender de segunda a sexta, de 10:00 ás 19:30H</p>
                <span>Desenvolvido por <Link href="https://api.whatsapp.com/send/?phone=5521982436773&text&app_absent=0" passHref>Conect-se</Link></span>
            </div>
        </footer>
    )
}