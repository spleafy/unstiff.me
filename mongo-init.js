db.auth('root','rootpassword');

db.getSiblingDB('Unstiff');

db.createUser({
    user: 'root',
    pwd: 'rootpassword',
    roles: [
        {
            role: 'readWrite',
            db: 'Unstiff'
        },
    ],
});

db.createCollection('posts', { capped: false });
db.createCollection('admins', { capped: false });
db.admins.insert([
    {
        "username": "admin",
        "password": "$2b$10$g5iBIzQsW8EIczO9GwJozuXStX.8qSp5YAJVRpzw0r0h3xX5Dvqh2",
    }
]);