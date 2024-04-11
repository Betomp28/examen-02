const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3008;
const { Sequelize, DataTypes } = require("sequelize");

app.use(morgan('dev'));
app.use (cors());
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "1234",
  database: "prueba_db",
});

// Entity class for dynamic table creation
class Entity {
  constructor(name, fields) {
    this.name = name;
    this.model = sequelize.define(name, fields);
  }

  async sync() {
    await this.model.sync({ force: true });
    console.log(`Table for ${this.name} synchronized`);
  }
}

// Define a simple schema for the User entity
const userSchema = {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
};

const noteSchema = {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
};




// Create User entity using the schema
const User = new Entity("User", userSchema);
const Note = new Entity("Note", noteSchema);

const syncronizeDB = () => {
  sequelize
    .sync()
    .then(async () => {
      await User.sync();
      await Note.sync();
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
};

//syncronizeDB();


const user = {
  name: 'John',
  age: 25,
};   

app.get('/api', (req, res) => {
  res.send("conectado");
});

app.post('/user', (req, res) => {
  console.log("req.body");
  res.send(user);
}); 

app.post('/login', async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    console.log("req.body");
    console.log(req.body);
    const user = await User.model.findOne({
      where: {
        user_email: user_email,
        user_password: user_password ,
      }
    });

    if (user) {
      res.status(200).json({ message: 'Login successful', user: user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }

  } catch (error) {
    
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { user_email, user_name, user_last_name, user_password } = req.body;
    console.log("req.body");
    console.log(req.body);

    const user = await User.model.create({
      user_email,
      user_name,
      user_last_name,
      user_password,
    });

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
  });
