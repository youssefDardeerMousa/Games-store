This project is a simple Node.js application using Sequelize to manage a one-to-many relationship between authors and books.
Prerequisites

    Node.js (v12 or higher)
    npm (v6 or higher)
    MySQL database
    Database Configuration

Update the connection.js file with your MySQL database configuration, including the database name, username, password, and host.
Models
Author Model

    id: Integer, primary key, auto-increment
    name: String, required
    Age: int, required
    Country : String,required
    createdAt: Date, automatically set to the current timestamp
    updatedAt: Date, automatically set to the current timestamp

Book Model

    id: Integer, primary key, auto-increment
    name: String, required
    color: String, required
    publishTime: Date, required
    authorId: Integer, foreign key referencing the Author model
    createdAt: Date, automatically set to the current timestamp
    updatedAt: Date, automatically set to the current timestamp

Relationships

    An author can have many books.
    A book belongs to an author.

Syncing the Database

To sync the models with the database, create a script to synchronize the Sequelize models with the MySQL database.

Run the script to sync the models with your database.
