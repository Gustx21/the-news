import { ReactNode, useEffect, useState } from "react";

interface Post {
    id: number,
    title: string,
    description: string,
    image: URL,
    alt: string
}

function Newsletter() {
    const [posts, setPosts] = useState<Post[]>([]);

    // Requisição de Posts na API
    useEffect(() => {
        fetch("http://localhost:3000/newsletter", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error(err));
    }, []);

    // Conteúdo de Posts
    const content: ReactNode = posts.map((post) => {
        return (
            <div key={post.id} id="newsletter">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        )
    });

    return <section className="cards">{content}</section>
}

export default Newsletter;