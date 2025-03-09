import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 mt-15 p-6">
            <div className="flex h-auto w-auto  justify-center items-center overflow-hidden"> <h1 className="text-xl px-5 md:text-2xl p-2 font-extrabold text-green-400 mb-5 bg-black rounded-l-full rounded-r-full font-sans"><em>Data From Fake API</em></h1></div>
            {loading ? (
                <p className="text-center text-lg text-gray-600">Loading posts...</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-black shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
                            <h2 className="text-lg md:text-xl font-semibold text-white">{post.title}</h2>
                            <p className="text-white text-sm md:text-md mt-2">{post.body}</p>
                            <div className="mt-4 text-sm text-gray-300">Post ID: {post.id}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
