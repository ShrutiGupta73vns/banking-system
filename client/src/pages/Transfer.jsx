import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const res = await fetch("api/v1/user/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/transaction");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="bg-cyan-100 h-screen  pt-4 pb-18 m-0">
      <div className="max-w-lg mx-auto mt-32 p-8 border-2 border-cyan-200 rounded-lg shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-center text-slate-700 my-12">
          Transfer Money
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            className="p-3 border-2  border-slate-400 rounded-lg"
            type="text"
            placeholder="Senders Name"
            id="from"
          />
          <input
            onChange={handleChange}
            className="p-3 border-2   border-slate-400 rounded-lg"
            type="text"
            placeholder="Recievers Name"
            id="to"
          />
          <input
            onChange={handleChange}
            className="p-3 border-2 border-slate-400 rounded-lg"
            type="number"
            placeholder="Amount"
            id="amount"
          />
          <Button disabled={loading} radius="large" variant="soft">
            Send
          </Button>
        </form>

        <div className="">
          {error && <p className="text-red-700 font-bold my-5">{error}</p>}
        </div>
      </div>
    </div>
  );
}
