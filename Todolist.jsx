import React, { useState } from 'react';

const TodoList = () => {
  const [data1, setData1] = useState([]);
  const [inputtext, setInputtext] = useState("");

  const saveData = (e) => {
    e.preventDefault();
    if (inputtext.trim() !== "") {
      setData1([...data1, inputtext]);
      setInputtext(""); 
    }
  };

  const deleteItem = (id) => {
    const res = data1.filter((_, index) => index !== id);
    setData1(res);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '600px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Todo List</h2>
      <form
        action="#"
        onSubmit={(e) => saveData(e)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          name="text"
          id="text"
          value={inputtext}
          onChange={(e) => setInputtext(e.target.value)}
          placeholder="Enter a task"
          style={{
            padding: '10px',
            width: '70%',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          SAVE
        </button>
      </form>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#f9f9f9',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Item</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button
                  onClick={() => deleteItem(index)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
