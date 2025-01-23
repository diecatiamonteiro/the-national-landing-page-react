import "./Home.css";
import ScrollDownArrow from "../components/ScrollDownArrow";
import ScrollUpArrow from "../components/ScrollUpArrow";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <PageTransition>
      {/* These divs become the "children" prop in PageTransition */}
      <div className="home-container">
        <img
          src="/pageImages/band.webp"
          alt="the national band"
          className="background-image w-full h-full object-cover object-[65%_50%]"
        />
        <ScrollDownArrow />
      </div>
      <div className="home-content">
        <p className="home-text">
          The National formed in 1999 in Cincinnati, Ohio, and became known for
          their distinctive blend of indie rock and post-punk influences. Their
          sound is characterized by Matt Berninger's baritone voice,
          introspective and often melancholic lyrics, and intricate
          arrangements. The band's lineup has remained consistent since its
          inception, featuring twin brothers Aaron and Bryce Dessner, who
          contribute significantly to the band's composition and production, and
          brothers Scott and Bryan Devendorf forming the rhythm section.{" "}
        </p>
        <p className="home-text">
          The band gained critical acclaim with albums like "Alligator" (2005),
          which put them on the indie rock map, and "Boxer" (2007), which
          solidified their reputation for creating deeply emotional and
          musically rich works. Their 2010 release, "High Violet," brought them
          international recognition, and subsequent albums like "Trouble Will
          Find Me" (2013) and "Sleep Well Beast" (2017) won Grammy Awards and
          further accolades.{" "}
        </p>
        <p className="home-text">
          The National's music often explores themes of existential angst,
          relationships, and the human condition. They are known for
          collaborating with various artists, including Sufjan Stevens and Bon
          Iver. Their 2023 album, "First Two Pages of Frankenstein," featured
          guest appearances from artists like Taylor Swift, Phoebe Bridgers, and
          Sufjan Stevens, showcasing their collaborative spirit and musical
          versatility. Their live performances are highly regarded for their
          emotional intensity, with Berninger frequently engaging with audiences
          in unique, interactive ways. Over the years, The National has
          maintained a loyal fanbase and a respected presence in the music
          industry, continually pushing the boundaries of indie rock.
        </p>
        <ScrollUpArrow />
      </div>
    </PageTransition>
  );
}

export default Home;
