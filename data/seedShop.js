
const Shop = require('../models/Shop');

const shopData = [
    {
        name: 'Shop 1',
        address: '123 Main St, Anytown, USA',
        owner: 'John Doe',
        items: [
            { name: 'Item 1', price: 9.99, stock: 100 },
            { name: 'Item 2', price: 19.99, stock: 200 }
        ]
    },
    {
        name: 'Shop 2',
        address: '456 Elm St, Othertown, USA',
        owner: 'Jane Smith',
        items: [
            { name: 'Item A', price: 14.99, stock: 50 },
            { name: 'Item B', price: 29.99, stock: 150 }
        ]
    }
];

const seedData = async () => {
    try {
        await Shop.deleteMany({});
        console.log('All shops removed');

        await Shop.insertMany(shopData);
        console.log('Shop data seeded successfully');
    } catch (err) {
        console.error('Error seeding shop data:', err);
    } finally {
        mongoose.connection.close();
    }
};
