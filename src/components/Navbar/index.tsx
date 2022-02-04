import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter();
    return(
        <nav className={styles.nav}>
            <div><Image src="/images/logo-colorida.webp" alt="Logo Cred Lemes" width={500} height={168} layout="responsive"/></div>
            <button onClick={() => router.push("https://api.whatsapp.com/send/?phone=5521990045906&text&app_absent=0")}><FaWhatsapp/>Entre em contato</button>
        </nav>
    )
}