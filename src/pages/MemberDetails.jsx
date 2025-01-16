import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./MemberDetails.css";

export default function MemberDetails() {
  const { id } = useParams();

  const memberInfo = {
    mattberninger: {
      id: "mattberninger",
      name: "Matt Berninger",
      image: "/matt-berninger.jpg",
      role: "Lead Vocals",
      bio: "Matt Berninger is the unmistakable voice of The National. Known for his deep baritone and introspective lyrics, Matt crafts songs that explore themes of love, longing, and existential angst. His emotive delivery and literary approach to songwriting make him a standout figure in modern indie rock, bringing a sense of intimacy and vulnerability to the band's music that resonates deeply with fans.",
    },
    aarondessner: {
      id: "aarondessner",
      name: "Aaron Dessner",
      image: "/aaron-dessner.png",
      role: "Guitar, Keyboards",
      bio: "Aaron Dessner is a multi-instrumentalist and the primary architect behind The National's textured sound. As a guitarist and pianist, Aaron's intricate arrangements give the band's songs their lush, layered quality. Beyond his role in The National, Aaron is a prolific producer and collaborator, having worked with artists across genres, which further enriches his contributions to the band's evolving soundscape.",
    },
    brycedessner: {
      id: "brycedessner",
      name: "Bryce Dessner",
      image: "/bryce-dessner.jpg",
      role: "Guitar",
      bio: "Bryce Dessner, Aaron's twin brother, adds a unique flair to The National with his background in classical music and composition. An acclaimed guitarist and composer, Bryce's talent for creating cinematic, orchestral elements has helped shape the band's sound, making it both expansive and intimate. His work with orchestras and his classical influence contribute to the rich, multifaceted arrangements heard in the band's music.",
    },
    scottdevendorf: {
      id: "scottdevendorf",
      name: "Scott Devendorf",
      image: "/scott-devendorf.webp",
      role: "Bass",
      bio: "Scott Devendorf's bass work provides The National with a solid, melodic foundation, often guiding the rhythm and adding depth to the band's songs. His bass lines are subtle yet essential, blending seamlessly with his brother Bryan's drums to create a steady, powerful rhythm section. Scott's contributions are key to the band's dynamic range, enhancing the emotional pull of their music.",
    },
    bryandevendorf: {
      id: "bryandevendorf",
      name: "Bryan Devendorf",
      image: "/bryan-devendorf.webp",
      role: "Drums",
      bio: "Bryan Devendorf's drumming is the heartbeat of The National, driving their songs with rhythmic intensity and subtle complexity. Known for his unique, almost hypnotic style, Bryan's beats give the band its pulse, providing both energy and restraint. His innovative drumming sets The National apart, adding a layer of sophistication that complements the introspective themes of their music.",
    },
  };

  const member = memberInfo[id];

  // Error handling for invalid member ID
  if (!member) {
    return <div>Member not found</div>; // Display a message if the member is not found
  }

  return (
    <div className="member-info" key={id}>
      <motion.img
        src={member.image}
        alt={member.name}
        initial={{ opacity: 0, y: -20 }} // Start off-screen
        animate={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5 }} // Duration of the animation
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {member.name}
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {member.role}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {member.bio}
      </motion.p>
    </div>
  );
}
