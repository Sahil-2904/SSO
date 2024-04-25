import React,{useEffect, useState} from 'react';
import { useAuth } from '../AuthContext';
import CreateArea from '../components/CreateArea';
import Footer from '../components/Footer';
import Note from '../components/Note';
import axios from 'axios';

const Home = () => {
  const { user, logout } = useAuth();
  const [notes, setNotes] = useState([]);
  const [u,setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const email = user.email;
        const response = await axios.post('http://localhost:3001/signin', {
          email,
        });

        setUser(response.data.user); // Store user details in state
        setNotes(response.data.user.notes);
        console.log(notes);
      } catch (error) {
        console.error(
          'Error during sign-in:',
          error.response?.data?.message || error
        );
      }
    };

    fetchUser(); // Call the inner async function
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    const savenote = async () => {
      const email = user.email;
      const response = await axios.post(
        `http://localhost:3001/${email}/notes`,
        {
          newNote:newNote
        }
      );
    }
    try{
      savenote();
    }catch (error) {
      console.error(
        'Error adding note:',
        error.response?.data?.message || error
      );
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    const deletenote = async () => {
      const email = user.email;
      const response = await axios.post(
        `http://localhost:3001/${email}/noteid`,
        {
          ind:id
        }
      );
    }
    try{
      deletenote();
    }catch (error) {
      console.error(
        'Error deleting note:',
        error.response?.data?.message || error
      );
    }
  }

  return (
    <>
        {/* <Header /> */}
        <header className="flex p-5 w-full justify-between shadow">
            {/* <div className='flex'> */}
                {/* <HighlightIcon /> */}
                <h1 className='flex flex-col font-medium font-mono text-3xl justify-center'>Keeper</h1>
                <button className='flex bg-blue-400 hover:bg-blue-300 p-3 rounded-2xl text-white' onClick={logout}>Logout</button>
            {/* </div> */}
        </header>
        <div className="flex p-5 justify-center">
            <h1 className='text-xl'>Welcome, <span className='text-blue-400'>{user?.displayName || 'User'}</span></h1>
        </div>
        <CreateArea onAdd={addNote} />
        <div className="p-5 grid gap-5 grid-cols-4">
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
        </div>
      
      <Footer />
    </>
    
  );
};

export default Home;
