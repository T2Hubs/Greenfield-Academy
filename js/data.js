/* ========================================
   DATA STORE - Greenfield Academy
   Uses localStorage for persistence
   ======================================== */

const DataStore = {
    // Default carousel images (generated placeholder URLs with Picsum)
    defaultCarouselImages: [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1600&h=900&fit=crop',
            title: 'Annual Sports Day 2025',
            category: 'Sports'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop',
            title: 'Modern Science Laboratory',
            category: 'Infrastructure'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=900&fit=crop',
            title: 'Cultural Festival Celebration',
            category: 'Events'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&h=900&fit=crop',
            title: 'Library & Knowledge Center',
            category: 'Infrastructure'
        }
    ],

    defaultGalleryImages: [
        {
            id: 101,
            src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
            title: 'Classroom Session',
            category: 'Academic'
        },
        {
            id: 102,
            src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
            title: 'Science Exhibition',
            category: 'Events'
        },
        {
            id: 103,
            src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
            title: 'Art & Craft Workshop',
            category: 'Academic'
        },
        {
            id: 104,
            src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop',
            title: 'Annual Day Performance',
            category: 'Events'
        },
        {
            id: 105,
            src: 'https://images.unsplash.com/photo-1564429238961-bf8f8be2a4c5?w=800&h=600&fit=crop',
            title: 'Basketball Tournament',
            category: 'Sports'
        },
        {
            id: 106,
            src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
            title: 'Campus Aerial View',
            category: 'Infrastructure'
        },
        {
            id: 107,
            src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
            title: 'Computer Lab',
            category: 'Infrastructure'
        },
        {
            id: 108,
            src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
            title: 'Graduation Ceremony',
            category: 'Events'
        },
        {
            id: 109,
            src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop',
            title: 'Swimming Pool',
            category: 'Sports'
        }
    ],

    defaultTeachers: [
        {
            id: 201,
            name: 'Dr. Priya Sharma',
            designation: 'Principal',
            subject: 'Administration & Educational Leadership',
            qualification: 'Ph.D. in Education',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
        },
        {
            id: 202,
            name: 'Mr. Rajesh Kumar',
            designation: 'Senior Teacher',
            subject: 'Mathematics',
            qualification: 'M.Sc. Mathematics, B.Ed',
        },
        {
            id: 203,
            name: 'Mrs. Anita Desai',
            designation: 'Head of Department',
            subject: 'English Literature',
            qualification: 'M.A. English, M.Ed',
        },
        {
            id: 204,
            name: 'Dr. Vikram Singh',
            designation: 'Senior Teacher',
            subject: 'Physics',
            qualification: 'Ph.D. in Physics',
        },
        {
            id: 205,
            name: 'Ms. Kavita Patel',
            designation: 'Teacher',
            subject: 'Chemistry',
            qualification: 'M.Sc. Chemistry, B.Ed',
        },
        {
            id: 206,
            name: 'Mr. Arjun Mehta',
            designation: 'Teacher',
            subject: 'Computer Science',
            qualification: 'MCA, B.Ed',
        }
    ],

    defaultNotices: [
        {
            id: 301,
            title: 'Annual Day Celebration - March 2026',
            content: 'We are pleased to announce that the Annual Day celebration will be held on 15th March 2026 at the school auditorium. All parents are cordially invited.',
            date: '2026-03-10',
            type: 'event'
        },
        {
            id: 302,
            title: 'Board Examination Schedule Released',
            content: 'The board examination schedule for Class X and XII has been released. Students are advised to check the notice board for detailed timetable.',
            date: '2026-03-08',
            type: 'academic'
        },
        {
            id: 303,
            title: 'School Closed on Account of Holi',
            content: 'The school will remain closed from 14th to 16th March on account of the Holi festival. Classes will resume on 17th March.',
            date: '2026-03-12',
            type: 'general'
        },
        {
            id: 304,
            title: 'Urgent: Parent-Teacher Meeting',
            content: 'An urgent parent-teacher meeting is scheduled for all classes on 20th March 2026 at 10:00 AM. Attendance is mandatory.',
            date: '2026-03-15',
            type: 'urgent'
        },
        {
            id: 305,
            title: 'Inter-School Cricket Tournament',
            content: 'Our school cricket team has qualified for the inter-school tournament finals. The match will be held on 25th March at the District Sports Complex.',
            date: '2026-03-18',
            type: 'event'
        },
        {
            id: 306,
            title: 'New Library Books Available',
            content: 'Over 500 new books have been added to the school library covering subjects like science, literature, and general knowledge. Students are encouraged to visit.',
            date: '2026-03-20',
            type: 'general'
        }
    ],

    // Initialize data
    init() {
        if (!localStorage.getItem('ga_initialized')) {
            localStorage.setItem('ga_carousel', JSON.stringify(this.defaultCarouselImages));
            localStorage.setItem('ga_gallery', JSON.stringify(this.defaultGalleryImages));
            localStorage.setItem('ga_teachers', JSON.stringify(this.defaultTeachers));
            localStorage.setItem('ga_notices', JSON.stringify(this.defaultNotices));
            localStorage.setItem('ga_initialized', 'true');
        }
    },

    // Generic CRUD
    getAll(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    },

    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    add(key, item) {
        const data = this.getAll(key);
        item.id = Date.now();
        data.unshift(item);
        this.save(key, data);
        return item;
    },

    remove(key, id) {
        const data = this.getAll(key).filter(item => item.id !== id);
        this.save(key, data);
    },

    // Specific getters
    getCarouselImages() { return this.getAll('ga_carousel'); },
    getGalleryImages() { return this.getAll('ga_gallery'); },
    getTeachers() { return this.getAll('ga_teachers'); },
    getNotices() { return this.getAll('ga_notices'); },

    addCarouselImage(item) { return this.add('ga_carousel', item); },
    addGalleryImage(item) { return this.add('ga_gallery', item); },
    addTeacher(item) { return this.add('ga_teachers', item); },
    addNotice(item) { return this.add('ga_notices', item); },

    removeCarouselImage(id) { this.remove('ga_carousel', id); },
    removeGalleryImage(id) { this.remove('ga_gallery', id); },
    removeTeacher(id) { this.remove('ga_teachers', id); },
    removeNotice(id) { this.remove('ga_notices', id); },

    // Reset to defaults
    reset() {
        localStorage.removeItem('ga_initialized');
        this.init();
    }
};

// Initialize on load
DataStore.init();
