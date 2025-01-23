import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getTheNationalAlbumsFromSpotify } from "../services/spotifyService";
import { getAlbumVideos } from "../services/youtubeService";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Music.css";

export default function Music() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [albumVideos, setAlbumVideos] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getTheNationalAlbumsFromSpotify();
        setAlbums(albumsData);

        // Fetch videos for each album
        const videosData = {};
        for (const album of albumsData) {
          const videos = await getAlbumVideos(album.name);
          videosData[album.id] = videos;
        }
        setAlbumVideos(videosData);
      } catch (error) {
        setError("Failed to fetch albums");
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  if (loading)
    return (
      <div className="page-content" style={{ textAlign: "center" }}>
        Loading...
      </div>
    );

  if (error) return <div className="page-content">{error}</div>;

  // Container animation variant
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // stagger effect
      },
    },
  };

  // Item animation variant
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="page-content">
      <h2 className="albums-page-title text-xl xl:text-2xl">Albums released</h2>
      <motion.div
        className="albums-grid mt-12 mx-4 md:mx-12 lg:mx-52"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {albums.map((album) => (
          <motion.div
            key={album.id}
            className="album-card"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <div
              className="album-cover-container"
              onClick={() => {
                const videos = albumVideos[album.id];
                console.log("Album name:", album.name);
                console.log("Videos:", videos);
                if (videos?.length > 0) {
                  console.log("Selected video ID:", videos[0].id);
                  setSelectedVideo(videos[0].id);
                }
              }}
            >
              <img
                src={album.images[0]?.url}
                alt={`${album.name} cover`}
                className="album-cover"
              />
              <div className="play-overlay opacity-70 lg:opacity-0 transition-opacity duration-300">
                <span>▶ Watch Video</span>
              </div>
            </div>
            <div className="album-info">
              <h3>{album.name}</h3>
              <p className="album-release-date">
                {`${new Date(album.release_date).getFullYear()} ${new Date(
                  album.release_date
                ).toLocaleString("en-US", { month: "short" })}`}
              </p>
              <div className="album-buttons">
                <a
                  href={album.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-button flex flex-row gap-3 justify-center items-center"
                >
                  Listen on Spotify
                  <FaExternalLinkAlt className="text-sm md:text-base" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="modal-content w-[95%] lg:w-[70%]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedVideo(null)}
              >
                ×
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
