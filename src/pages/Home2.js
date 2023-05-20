import React, { useEffect, useState } from 'react';

const Home2 = () => {
  const [data, setData] = useState();
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const bookname=form.bookname.value;
    const age=form.age.value;
    const book=form.book.value;

    const bookdata={
      bookname,
      age,
      book
    }
    console.log(bookdata);
    
    
      const dataFetch = async () => {
        const data = await (
          await fetch(
            `http://localhost:5000/search?name=${bookdata.bookname}&age=${bookdata.age}&book=${bookdata.book}`
          )
        ).json();
  
        // set state when the data received
        setData(data);
      };
  
      dataFetch();
      console.log(data);
    form.reset();
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='text-4xl font-bold text-center'>Book Management System</div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>BookName:</label>
      <input name='bookname' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Publisher Age:</label>
      <input name='age' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      
      
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Book Type:</label>
      <input type="radio" id="Drama" name="book" value="Drama"></input>
      <label for="Drama">Drama</label>
      <input type="radio" id="Novel" name="book" value="Novel"></input>
      <label for="Novel">Novel</label>
      <input type="radio" id="Story" name="book" value="Story"></input>
      <label for="Story">Story</label>
      </div>
      <input className="input btn btn-accent m-3" type='submit' value='Search'/>

      
      
    </form>
    </div>
  );
};

export default Home2;