export default function TestPage() {
    return <h1>This is /test</h1>;
  }
  
  // import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";
// import Navbar from "../../components/nav";
// import Footer from "../../components/footer";

// export const loader = async ({ params }) => {
//   const res = await fetch(`http://localhost:5000/api/movies/${params.id}`);
//   if (!res.ok) throw new Response("Movie not found", { status: 404 });
//   const movie = await res.json();
//   return json(movie);
// };

// export default function MovieDetail() {
//   const movie = useLoaderData();

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center bg-[#121212] text-white">
//       <Navbar />
//       <div className="w-[95%] py-10">
//         <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
//         <img src={movie.poster_url} alt={movie.title} className="w-[300px] rounded mb-4" />
//         <p><strong>Genre:</strong> {movie.genre}</p>
//         <p><strong>Cast:</strong> {movie.cast}</p>
//         <p><strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString()}</p>
//       </div>
//       <Footer />
//     </div>
//   );
// }
