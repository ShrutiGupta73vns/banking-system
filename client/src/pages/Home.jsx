import banking from "../assets/banking.jpg";


const Home = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto max-h-full m-32 border-2 rounded-lg shadow-xl">
      <div className="max-w-5xl mx-auto">
        <img src={banking} alt="" />
      </div>
      
    </div>
  );
};

export default Home;
