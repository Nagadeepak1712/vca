export const ACADEMY_DETAILS = {
    name: "V Creative Academy",
    phone: "+91 98432 91412",
    email: "vcreativeacademy02@gmail.com",
    location: "C245, Kamarajar Street, 7th Stop, Thirunagar, Madurai - 6",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.563810078235!2d78.05554!3d9.88547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTMnMDcuNyJOIDc4wrAwMycyMC4wIkU!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin",
    director: {
        name: "Vijay",
        image: "/Images/vj.jpeg",
        message: "At V Creative Academy, we believe in nurturing the innate potential of every student. Our diverse range of courses is designed to stimulate creativity, enhance cognitive skills, and build confidence that lasts a lifetime."
    }
};

export const COURSES = [
    {
        id: 'art',
        title: 'Art & Craft',
        category: 'Art',
        image: '/courses/art.png',
        description: 'Unleash your creativity with our comprehensive art program covering various mediums and styles.',
        features: [
            'Drawing Classes',
            'Charcoal Pencil Art',
            'Mural Painting',
            'Pen Art',
            'Oil Painting',
            'Acrylic',
            'Tanjore Painting',
            'Carving',
            'Embossed Canvas Work'
        ],
        duration: 'Flexible',
    },
    {
        id: 'english',
        title: 'English',
        category: 'Education',
        image: '/courses/english.png',
        description: 'Master the English language with focus on phonics, grammar, and spoken fluency.',
        features: [
            'Phonics',
            'Grammar',
            'Spoken English'
        ],
        duration: 'Level Based',
    },
    {
        id: 'music',
        title: 'Music',
        category: 'Music',
        image: '/courses/music.png',
        description: 'Learn to perform with confidence. Vocal training and instrument mastery for all ages.',
        features: [
            'Vocal',
            'Keyboard',
            'Drums'
        ],
        duration: 'Certified Courses',
    },
    {
        id: 'abacus',
        title: 'Abacus Classes',
        category: 'Education',
        image: '/courses/abacus.png',
        description: 'Enhance mental math capabilities and brain development with our structured Abacus program.',
        features: [
            'Basic Level',
            'Advance Level'
        ],
        duration: '8 Levels',
    },
    {
        id: 'handwriting',
        title: 'Handwriting',
        category: 'Education',
        image: '/courses/handwriting.png',
        description: 'Improve legibility and speed with scientific handwriting techniques and calligraphy.',
        features: [
            'Basic Lines',
            'Hand rotate training',
            'Pre-cursive',
            'Cursive',
            'Calligraphy Training'
        ],
        duration: '1-3 Months',
    },
    {
        id: 'games',
        title: 'Games',
        category: 'Games',
        image: '/courses/games.png',
        description: 'Develop strategic thinking and physical well-being through our games and fitness sessions.',
        features: [
            'Carrom',
            'Chess',
            'Health-Fitness'
        ],
        duration: 'Ongoing',
    },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Riya S.",
        role: "Student (Art)",
        text: "The art classes here changed how I look at the world. My oil painting skills have improved so much in just 3 months!",
    },
    {
        id: 2,
        name: "Arun K.",
        role: "Parent",
        text: "My son's concentration has improved significantly after joining the Abacus class. Highly recommend V Creative Academy.",
    },
    {
        id: 3,
        name: "Meera P.",
        role: "Student (Music)",
        text: "Learning guitar has been a dream, and the teachers here are so patient and talented. I love every session.",
    },
];
