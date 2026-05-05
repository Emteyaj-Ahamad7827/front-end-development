import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    married: false,
    organization: "",
    hobbies: ""
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age) // convert age to number
        })
      });

      const data = await res.json();
      console.log("Response:", data);

    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="organization"
          placeholder="Enter organization"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="hobbies"
          placeholder="Enter hobbies"
          onChange={handleChange}
        />
        <br /><br />

        <label>
          Married:
          <input
            type="checkbox"
            name="married"
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;