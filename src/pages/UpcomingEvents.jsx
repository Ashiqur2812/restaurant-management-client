import { motion } from "framer-motion";

const UpcomingEvents = () => {
    const events = [
        { id: 1, name: "Live Music Night", date: "2025-12-15", description: "Enjoy live music with delicious food!" },
        { id: 2, name: "Wine Tasting", date: "2025-12-20", description: "Experience a variety of fine wines." },
    ];

    return (
        <div className="py-20 lg:mx-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Upcoming Events 🎉</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold">{event.name}</h3>
                        <p className="mt-2">{event.date}</p>
                        <p className="mt-4">{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;