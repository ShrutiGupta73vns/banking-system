import Users from "../components/Users";


import background from "../assets/background.jpg"


export default function CustomerPage() {
  return (

    
<div className="" style={{
  
  backgroundImage:`url(${background})`,
  
  
  

}}>


    

    <div className="  max-w-4xl mx-auto m-10 ">
      <div className="bg-white flex flex-col gap-32 max-w-4xl mx-auto m-20 border-2 border-cyan-500 p-16 rounded-xl shadow-2xl ">
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-center mt-5 mb-16 text-slate-500 ">
            Depositors
          </h1>
          <Users />
        </div>
        


      </div>
        
    </div>
    </div>
    
  );
}
