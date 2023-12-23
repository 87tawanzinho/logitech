import Image from "next/image"
import search from "@/public/images/header/search.png"
import user from "@/public/images/header/user.png"
import store from "@/public/images/header/store.png"

export default function NavBar() {
    return (
        <header>
            <div>
                <h2>LOGITECH</h2>
            </div>

            <div>
                <p>PRODUTOS</p>
                <p>SOFTWARE</p>
                <p>INOVAÇÃO</p>
                <p>COMUNIDADE</p>
                <p>SUPORTE</p>
            </div>

            <div>
                <Image src={search} alt="icon" />
                <Image src={user} alt="icon" />
                <Image src={store} alt="icon" />
            </div>
        </header>
    )
}