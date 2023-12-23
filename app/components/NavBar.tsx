import Image from "next/image"
import search from "@/public/images/header/search.png"
import user from "@/public/images/header/user.png"
import store from "@/public/images/header/store.png"
// esse codigo irá ter uma div para computador e outra para mobile
export default function NavBar() {
    return (
       
      <div>
           <header className="flex justify-between items-center  p-10 max-w-9xl gap-10 menuDisplayComputer text-white ">
            <div>
                <h2 className="text-4xl">LOGITECH</h2>
            </div>

            <div className="flex gap-4 hoverMenuComputer text-md">
                <p>PRODUTOS</p>
                <p>SOFTWARE</p>
                <p>INOVAÇÃO</p>
                <p>COMUNIDADE</p>
                <p>SUPORTE</p>
            </div>

            <div className="flex justify-center items-center gap-6 cursor-pointer">
                <Image src={search} alt="icon" className="h-5 w-5 object-cover" />
                <Image src={user} alt="icon"   className="h-5 w-5 object-cover"/>
                <Image src={store} alt="icon"  className="h-5 w-5 object-cover" />
            </div>
        </header>
      
      </div>
    )
}