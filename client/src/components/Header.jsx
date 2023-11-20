
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' max-h-32 shadow-lg flex flex-row justify-between' >
        <div className="flex flex-row">
        <div className='h-24 w-24 m-4'>
        <img src={logo} alt="" />
        
        </div>
        <h1 className="text-3xl  my-7 p-4 font-serif antialiased tracking -wide text-slate-600 mt-12">
    Sparks Banking System
      </h1>
      </div>
      <div className=" flex gap-5 my-7 p-6">
        <Link to="/customer">
          <div className="flex gap-2 bg-white  text-cyan-900 font-semibold  rounded-lg cursor-pointer hover:text-lg  max-h-12 p-2">
            <span className="uppercase p-1 ">Banking</span>
          </div>
        </Link>

        <Link to="/">
          <div className="flex gap-2 bg-white  text-cyan-900 font-semibold  rounded-lg cursor-pointer hover:text-lg max-h-12 p-2">
            <span className="uppercase p-1">Home</span>
          </div>
        </Link>

        <Link to="/transfer">
          <div className="flex gap-2 bg-white  text-cyan-900 font-semibold  rounded-lg cursor-pointer  hover:text-lg max-h-12 p-2">
            <span className="uppercase p-1">Transfer</span>
          </div>
        </Link>
        <Link to="/transaction">
          <div className="flex gap-2 bg-white  text-cyan-900 font-semibold  rounded-lg cursor-pointer hover:text-lg  max-h-12 p-2">
            <span className="uppercase p-1">Transactions</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
 