import React from 'react';

const Home = () => {
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const bookname=form.bookname.value;
    const publishername=form.publishername.value;
    const age=form.age.value;
    const number=form.number.value;
    const date=form.date.value;
    const book=form.book.value;

    const bookdata={
      bookname,
      publishername,
      age,
      number,
      date,
      book
    }
    console.log(bookdata);
    fetch('http://localhost:5000/store',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookdata)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      
    })
    form.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='text-4xl font-bold text-center'>Book Management System</div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>BookName:</label>
      <input name='bookname' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Publisher Name:</label>
      <input name='publishername' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Publisher Age:</label>
      <input name='age' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Page Number:</label>
      <input name='number' type="text" placeholder="Type here" className="input w-full max-w-xs" />
      </div>
      <div className='m-4'>
      <label className='text-xl mx-2  font-bold'>Publish Date:</label>
      <input name='date' type="date" placeholder="Type here" className="input w-full max-w-xs" />
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
      <input className="input btn btn-accent m-3" type='submit' value='SUBMIT'/>

      
      
    </form>
  );
};

export default Home;