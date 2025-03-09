import { Briefcase, Code, Banknote, ShoppingCart, Heart, Building } from "lucide-react";

const industries = [
    { id: 1, name: "Technology", icon: <Code size={32} className="text-green-400" />, description: "Innovative solutions in software, AI, and emerging tech." },
    { id: 2, name: "Finance", icon: <Banknote size={32} className="text-green-400" />, description: "Banking, investments, and fintech transformations." },
    { id: 3, name: "E-Commerce", icon: <ShoppingCart size={32} className="text-green-400" />, description: "Online retail, logistics, and consumer experiences." },
    { id: 4, name: "Healthcare", icon: <Heart size={32} className="text-green-400" />, description: "Medical advancements, health tech, and pharmaceuticals." },
    { id: 5, name: "Real Estate", icon: <Building size={32} className="text-green-400" />, description: "Property development, smart homes, and architecture." },
    { id: 6, name: "Corporate", icon: <Briefcase size={32} className="text-green-400" />, description: "Business consulting, HR, and enterprise solutions." }
];

const Industries = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white  p-6 md:p-12 mt-15">
            <h1 className="text-2xl md:text-3xl font-extrabold text-green-400 text-center mb-8">
                Industries We Serve
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry) => (
                    <div
                        key={industry.id}
                        className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="mb-4">{industry.icon}</div>
                        <h2 className="text-xl font-bold mb-2">{industry.name}</h2>
                        <p className="text-gray-300 text-center">{industry.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industries;
