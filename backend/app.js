// app.js
require('dotenv').config();
const express = require('express');
const db = require('./db/connect'); // Ensure the DB connection is initialized
const User = require('./models/user.model'); // Example user model
const cors = require('cors');

const app = express();

app.use(cors()); // Allow connections from different origins
app.use(express.json()); // Parse incoming JSON requests

app.post("/:email/notes",async(req,res)=>{
  try {
    const email = req.params.email;
    const { newNote } = req.body;
    console.log(newNote.title,newNote.content);
    const title = newNote.title;
    const content = newNote.content;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add a new note to the user's notes array
    user.notes.push({ title, content });
    await user.save();

    res.json({ message: 'Note added', notes: user.notes });
  } catch (err) {
    console.error('Error adding note:', err);
    res.status(500).json({ message: 'An error occurred' });
  }
})
app.post("/:email/noteid",async(req,res)=>{
  try {
    const email = req.params.email;
    const { ind } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(2);

    // Remove the note from the user's notes array
    user.notes.splice(ind, 1);
    await user.save();
    res.json({ message: 'Note deleted', notes: user.notes });
  } catch (err) {
    console.error('Error adding note:', err);
    res.status(500).json({ message: 'An error occurred' });
  }
})

app.post('/signing',async(req,res) => {
  try {
    const { email,username,password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User({
        username,
        email,
        password,
        notes: []
      });
  
      const savedUser = await newUser.save();
      console.log(savedUser);
      res.status(201).json(savedUser);
    }


    res.json({
      message: 'Sign-in successful',
      user: {
        username: user.username,
        email: user.email,
        notes: user.notes,
      },
    });
  }catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'An error occurred during sign-in' });
  }
})

app.post('/signin',async (req,res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    res.json({
      message: 'Sign-in successful',
      user: {
        username: user.username,
        email: user.email,
        notes: user.notes,
      },
    });
  }catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'An error occurred during sign-in' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
      notes: []
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser); 
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error saving user' });
  }
});





// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
